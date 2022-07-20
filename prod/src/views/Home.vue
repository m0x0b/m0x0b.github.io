<template>


    <div class="fixed w-screen h-screen top-0 left-0 bg-[#ffffff] bg-opacity-20"></div>

    <div class="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2 pointer-events-none transition-all duration-500"
        :class="fade ? 'opacity-0' : 'opacity-100'">
        <h2 class="text-md md:text-xl font-[GT] absolute -top-4">
            <scramble :newText="stamp"></scramble>
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
        <div class="w-full mt-[100vh]">
            <div ref="section0" class="flex flex-col text-xl white">
                <h1 class="text-center uppercase md:hidden">Pascals 0 & 1</h1>
                <img src="/pieces/1-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <img src="/pieces/1-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
            </div>
            <div ref="section1" class="mt-72">
                <h1 class="text-center uppercase text-xl md:hidden">Detritus 0 & 1</h1>
                <img src="/pieces/2-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <img src="/pieces/2-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
            </div>
            <div ref="section2" class="mt-72">
                <h1 class="text-center uppercase text-xl md:hidden">After Image 0 & 1</h1>
                <img src="/pieces/3-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <img src="/pieces/3-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
            </div>
            <div ref="section3" class="mt-72">
                <h1 class="text-center uppercase text-xl md:hidden">Polyethylene 0 & 1</h1>
                <img src="/pieces/4-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <img src="/pieces/4-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
            </div>
            <div ref="section4" class="mt-72 mb-32 text-xl md:mb-0">
                <h1 class="text-center uppercase md:hidden">Pyrolysis 0 & 1</h1>
                <img src="/pieces/5-0.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <img src="/pieces/5-1.jpg" class="w-[78%] md:w-[100vh] mx-auto md:m-0" />
                <h1 class="text-center uppercase text-xl md:hidden">Inquire</h1>
            </div>
        </div>
    </div>


        <div class="fixed right-0 top-1/2 transform -translate-y-1/2 hidden md:block uppercase">
        <h1 class="text-6xl">Pyrolysis 0 & 1</h1>
        <h1 class="text-2xl cursor-pointer">Inquire</h1>
    </div>

</template>

<script>
import { RouterLink } from "vue-router";
import Scramble from "../components/Scramble.vue";
export default {
    name: "Home",
    components: {
        Scramble
    },
    data() {
        return {
            stamp: "",
            fade: false,
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
            if (this.$refs.container.scrollTop > window.innerHeight / 3) {

                this.$emit('sectionChange', 1);
            }
            if (this.$refs.container.scrollTop > this.$refs.section1.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 2);
            }
            if (this.$refs.container.scrollTop > this.$refs.section2.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 3);
            }
            if (this.$refs.container.scrollTop > this.$refs.section3.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 4);
            }
            if (this.$refs.container.scrollTop > this.$refs.section4.offsetTop - window.innerHeight / 1.3) {
                this.$emit('sectionChange', 5);
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.stamp = "1654056634000";
        }, 1500)

    }
}
</script>
