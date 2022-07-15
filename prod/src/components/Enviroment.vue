<template>
    <div id="container" class="top-0 absolute" style="z-index: -1"></div>
    <div class="bg-white fixed top-0 left-0 w-screen h-full transition-all duration-[5s]"
        :class="reveal ? 'opacity-0' : 'opacity-100'"></div>
</template>

<script type="ts">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import gsap from 'gsap';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Water } from 'three/examples/jsm/objects/Water';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';

export default {
    name: "Enviroment",
    props: {
        section: {
            type: String,
            default: function () {
                return "";
            },
        },
    },
    data() {
        return {
            scenes: [
                { img: "textures/1.jpg" },
                { img: "textures/2.jpg" },
                { img: "textures/3.jpg" },
                { img: "textures/4.jpg" },
                { img: "textures/5.jpg" },
            ],
            disc0: null,
            disc1: null,
            disc2: null,
            disc3: null,
            disc4: null,
            curScene: 0,
            bloom: null,
            bloomScenes: [
                0.24, 0.24, 0.2, 0.27, 0.35
            ],
            reveal: false,
        };
    },
    watch: {
        section: {
            handler: function (val) {
                if (val > this.curScene) this.nextScene()
                else this.prevScene()
                this.curScene = val
            }
        },
    },
    mounted() {

        let container;
        let camera, scene, renderer, composer;
        let controls, water, sun;
        let reflect0, reflect1, reflect2, reflect3, reflect4;

        const params = {
            exposure: 1,
            bloomStrength: 0.24,
            bloomThreshold: 0,
            bloomRadius: 0.1
        };

        container = document.getElementById('container');
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        container.appendChild(renderer.domElement);

        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;

        this.bloom = bloomPass

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 2000);

        if (window.innerWidth > 1200) camera.position.set(0, 160, 0);
        else camera.position.set(0, 190, 0);

        sun = new THREE.Vector3();

        const waterGeometry = new THREE.PlaneGeometry(2000, 2000);

        water = new Water(
            waterGeometry,
            {
                textureWidth: 360,
                textureHeight: 360,
                waterNormals: new THREE.TextureLoader().load('textures/1612.jpeg', function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                }),
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0xe8e8e8,
                distortionScale: 15,
                size: 2,
                fog: scene.fog !== undefined,
            }
        );

        water.rotation.x = - Math.PI / 2;

        const bokehPass = new BokehPass(scene, camera, {
            focus: 1.0,
            aperture: 0,
            maxblur: 0.01,
            width: window.innerWidth,
            height: window.innerHeight
        });

        scene.add(water);
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(bloomPass);
        composer.addPass(bokehPass);

        for (let i = 0; i < this.scenes.length; i++) {
            let texture = this.scenes[i].img;
            let bgTexture = new THREE.TextureLoader().load(texture);
            let bgGeometry = new THREE.CircleGeometry(250, 32);
            let bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture, side: THREE.DoubleSide, opacity: 1 });
            let bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
            bgMesh.rotation.x = Math.PI / 2;
            scene.add(bgMesh);
            if (i == 0) {
                bgMesh.position.set(0, 400, 0);
                this.disc0 = bgMesh;
                reflect0 = this.disc0;
            }
            if (i == 1) {
                bgMesh.position.set(0, 410, 0);
                this.disc1 = bgMesh;
                reflect1 = this.disc1;
            }
            if (i == 2) {
                bgMesh.position.set(0, 420, 0);
                this.disc2 = bgMesh;
                reflect2 = this.disc2;
            }
            if (i == 3) {
                bgMesh.position.set(0, 430, 0);
                this.disc3 = bgMesh;
                reflect3 = this.disc3;
            }
            if (i == 4) {
                bgMesh.position.set(0, 440, 0);
                this.disc4 = bgMesh;
                reflect4 = this.disc4;
            }
        }

        const sky = new Sky();
        sky.scale.setScalar(10000);
        scene.add(sky);

        const skyUniforms = sky.material.uniforms;

        skyUniforms['turbidity'].value = 10;
        skyUniforms['rayleigh'].value = 0;
        skyUniforms['mieCoefficient'].value = 0.005;
        skyUniforms['mieDirectionalG'].value = 0.8;

        const parameters = {
            elevation: 0,
            azimuth: 180
        };

        const material = new THREE.MeshPhysicalMaterial({
            roughness: 0.6,
            transmission: 0.9, // Add transparency
            thickness: 100, // Add refraction
        });

        const light = new THREE.PointLight()
        light.position.set(0.8, 1.4, 1.0)
        scene.add(light)

        const objLoader = new OBJLoader()

        objLoader.load(
            'nr.obj',
            (object) => {
                object.traverse(function (child) {
                    if (child.isMesh) {
                        child.material = material;
                    }
                });
                object.position.set(0, 50, 35);
                object.rotation.set(-Math.PI / 2, 0, 0);
                scene.add(object)

                object.scale.set(0.5, 0.5, 0.5);
            },
            (xhr) => {
                if (xhr.loaded == xhr.total) this.revealScene();
            },
            (error) => {
                console.log(error)
            }
        )

        const pmremGenerator = new THREE.PMREMGenerator(renderer);

        function updateSun() {
            const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
            const theta = THREE.MathUtils.degToRad(parameters.azimuth);
            sun.setFromSphericalCoords(1, phi, theta);
            sky.material.uniforms['sunPosition'].value.copy(sun);
            water.material.uniforms['sunDirection'].value.copy(sun).normalize();
            scene.environment = pmremGenerator.fromScene(sky).texture;
        }

        updateSun();

        controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set(0, 10, 0);
        controls.minDistance = 40.0;
        controls.maxDistance = 200.0;
        controls.update();

        window.addEventListener('resize', onWindowResize);

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            const time = performance.now() * 0.0005;
            water.material.uniforms['time'].value += 1.0 / 600.0;
            reflect0.rotation.z += 0.001;
            reflect1.rotation.z += 0.001;
            reflect2.rotation.z += 0.001;
            reflect3.rotation.z += 0.001;
            reflect4.rotation.z += 0.001;
            composer.render(scene, camera);
        }
        animate();
        setTimeout(() => {
            this.nextScene()
        }, 4000);
        setTimeout(() => {
            this.nextScene()
        }, 8000);
        setTimeout(() => {
            this.nextScene()
        }, 12000);
        setTimeout(() => {
            this.nextScene()
        }, 16000);
        this.revealScene();
    },
    methods: {
        revealScene() {
            setTimeout(() => {
                this.reveal = true;
            }, 2000);
        },
        prevScene() {
            let d
            if (this.curScene == 0) {
                return
            }
            if (this.curScene == 1) {
                d = this.disc0
            }
            if (this.curScene == 2) {
                d = this.disc1
            }
            if (this.curScene == 3) {
                d = this.disc2
            }
            if (this.curScene == 4) {
                d = this.disc3
            }
            let discSizeCurrent = { s: d.scale.x }
            let discSizeNew = { s: 1 }
            gsap.to(discSizeCurrent, {
                s: discSizeNew.s,
                onUpdate: () => {
                    d.scale.x = discSizeCurrent.s
                    d.scale.y = discSizeCurrent.s
                },
                duration: 2,
                ease: "power1.out"
            });

            let bloomCurrent = { s: this.bloom.strength }
            let bloomNew = { s: this.bloomScenes[this.curScene - 1] }
            gsap.to(bloomCurrent, {
                s: bloomNew.s,
                onUpdate: () => {
                    this.bloom.strength = bloomCurrent.s
                },
                duration: 3,
                ease: "power1.out"
            });
            this.curScene -= 1;
        },
        nextScene() {
            let d
            if (this.curScene == 0) {
                d = this.disc0
                this.disc1.scale.x = 1
                this.disc1.scale.y = 1
            }
            if (this.curScene == 1) {
                d = this.disc1
                this.disc2.scale.x = 1;
                this.disc2.scale.y = 1;
            }
            if (this.curScene == 2) {
                d = this.disc2
                this.disc3.scale.x = 1
                this.disc3.scale.y = 1
            }
            if (this.curScene == 3) {
                d = this.disc3
                this.disc4.scale.x = 1;
                this.disc4.scale.y = 1;
            }
            if (this.curScene == 4) {
                return
            }
            let discSizeCurrent = { s: 1 }
            let discSizeNew = { s: 0 }
            gsap.to(discSizeCurrent, {
                s: discSizeNew.s,
                onUpdate: () => {
                    d.scale.x = discSizeCurrent.s
                    d.scale.y = discSizeCurrent.s
                },
                duration: 2,
                ease: "power1.in"
            });
            let bloomCurrent = { s: this.bloom.strength }
            let bloomNew = { s: this.bloomScenes[this.curScene + 1] }
            gsap.to(bloomCurrent, {
                s: bloomNew.s,
                onUpdate: () => {
                    this.bloom.strength = bloomCurrent.s
                },
                duration: 3,
                ease: "power1.out"
            });
            this.curScene += 1;
        }
    },
}
</script>