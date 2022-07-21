<template>


    <div class="fixed w-screen h-screen top-0 left-0 bg-[#ffffff] bg-opacity-25"></div>

    <div class="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2 pointer-events-none transition-all duration-500"
        :class="fade ? 'opacity-0' : 'opacity-100'">
        <h2 class="text-md md:text-xl font-[GT] absolute -top-4">
            {{ stamp }}
        </h2>
        <h1 class="text-5xl md:text-8xl text-black">NULL IDEAL</h1>
    </div>

    <p class="fixed bottom-4 right-4 w-[180px] text-[8px] leading-[9px] pointer-events-none">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9ca4<br />
        &nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ce47&nbsp;&nbsp;7fa6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
        &nbsp;&nbsp;&nbsp;dd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;53&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bc&nbsp;&nbsp;&nbsp;&nbsp;90<br />
        &nbsp;&nbsp;42bbb&nbsp;&nbsp;&nbsp;773f82a529e66695231903d451f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
        &nbsp;&nbsp;&nbsp;0d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a6<br />
        &nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2626<br />
    </p>

    <div class="absolute h-screen w-full overflow-y-scroll" @scroll="handleScroll" ref="container">

        <div class="fixed right-0 top-1/2 transform -translate-y-1/2 hidden md:block uppercase transition-all duration-500 pointer-events-none"
            :class="inquire ? 'opacity-100 hidden' : 'opacity-0 visible'">

            <div class="pointer-events-none select-none">
                <h1 v-for="(t, index) in titles"
                    class=" text-2xl xl:text-5xl whitespace-nowrap transition-all duration-500"
                    :class="index == active ? 'opacity-100' : 'opacity-20'">
                    {{ t }}
                </h1>
            </div>

            <router-link :to="links[active]"
                class="text-xl cursor-pointer absolute left-0 mt-4 border border-black px-8 py-2 text-black font-[GT]">
                Inquire</router-link>
        </div>

        <div class="w-full mt-[100vh]">
            <div ref="section0" class="flex flex-col text-xl white">
                <router-link :to="links[0]">
                    <h1 class="text-center uppercase md:hidden">Pascals 0 & 1</h1>
                    <img src="/pieces/1-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                </router-link>
                <router-link :to="links[1]">
                    <img src="/pieces/1-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                    <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
                </router-link>
            </div>
            <div ref="section1" class="mt-72">
                <router-link :to="links[2]">
                    <h1 class="text-center uppercase text-xl md:hidden">Detritus 0 & 1</h1>
                    <img src="/pieces/2-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                </router-link>
                <router-link :to="links[3]">
                    <img src="/pieces/2-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                    <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
                </router-link>
            </div>
            <div ref="section2" class="mt-72">
                <router-link :to="links[4]">
                    <h1 class="text-center uppercase text-xl md:hidden">After Image 0 & 1</h1>
                    <img src="/pieces/3-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                </router-link>
                <router-link :to="links[5]">
                    <img src="/pieces/3-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                    <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
                </router-link>
            </div>
            <div ref="section3" class="mt-72">
                <router-link :to="links[6]">
                    <h1 class="text-center uppercase text-xl md:hidden">Polyethylene 0 & 1</h1>
                    <img src="/pieces/4-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                </router-link>
                <router-link :to="links[7]">
                    <img src="/pieces/4-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                    <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
                </router-link>
            </div>
            <div ref="section4" class="mt-72 mb-32 text-xl md:mb-0">
                <router-link :to="links[8]">
                    <h1 class="text-center uppercase md:hidden">Pyrolysis 0 & 1</h1>
                    <img src="/pieces/5-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                </router-link>
                <router-link :to="links[9]">
                    <img src="/pieces/5-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                    <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
                </router-link>
            </div>
        </div>


    </div>


    <router-link :to="{ name: 'about' }">
        <h1 class="fixed top-4 right-4 p-1 text-4xl cursor-pointer border-black border rounded-full">?</h1>
    </router-link>

</template>

<script>
import { RouterLink } from "vue-router";
export default {
    name: "Home",
    data() {
        return {
            stamp: "1654056634000",
            fade: false,
            inquire: false,
            titles: ["Pascals 0 & 1", "Detritus 0 & 1", "After Image 0 & 1", "Polyethylene 0 & 1", "Pyrolysis 0 & 1"],
            links: ["/wall/pascals0", "/wall/pascals1", "/wall/detritus0", "/wall/detritus1", "/wall/afterimage0", "/wall/afterimage1", "/wall/polyethylene0", "/wall/polyethylene1", "/wall/pyrolysis0", "/wall/pyrolysis1"],
            active: 0,
        }
    },
    methods: {
        handleScroll() {
            if (this.$refs.container.scrollTop <= 0) {
                this.fade = false;
                this.$emit('sectionChange', 0);
            }
            if (this.$refs.container.scrollTop > 0) {
                this.fade = true;

            }
            if (this.$refs.container.scrollTop < window.innerHeight / 3) {
                this.inquire = false;
            }
            if (this.$refs.container.scrollTop > window.innerHeight / 3) {
                this.inquire = true;
                this.$emit('sectionChange', 1);
                this.active = 0
            }
            if (this.$refs.container.scrollTop > this.$refs.section1.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 2);
                this.active = 1
            }
            if (this.$refs.container.scrollTop > this.$refs.section2.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 3);
                this.active = 2
            }
            if (this.$refs.container.scrollTop > this.$refs.section3.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 4);
                this.active = 3
            }
            if (this.$refs.container.scrollTop > this.$refs.section4.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 5);
                this.active = 4
            }
        }
    },
}
</script>
