<template>


    <div class="fixed w-screen h-screen top-0 left-0 bg-[#ffffff] bg-opacity-20"></div>

    <div class="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2 pointer-events-none transition-all duration-500" :class="fade?'opacity-0' : 'opacity-100'">
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
        <div class="w-full mt-[1000px]">
            <div ref="section0">
                <img src="/pieces/5-0.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
                <img src="/pieces/5-1.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
            </div>
            <div ref="section1" class="mt-64">
                <img src="/pieces/5-0.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
                <img src="/pieces/5-1.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
            </div>
            <div ref="section2" class="mt-64">
                <img src="/pieces/5-0.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
                <img src="/pieces/5-1.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
            </div>
            <div ref="section3" class="mt-64">
                <img src="/pieces/5-0.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
                <img src="/pieces/5-1.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
            </div>
            <div ref="section4" class="mt-64">
                <img src="/pieces/5-0.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
                <img src="/pieces/5-1.jpg" class="w-[90%] md:w-[600px] mx-auto my-4" />
            </div>
        </div>
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
            console.log(this.$refs.section1.offsetTop);
            // Any code to be executed when the window is scrolled
            if(this.$refs.container.scrollTop <= 0) {
                this.fade = false;
                this.$emit('sectionChange', 0);
            }
            if(this.$refs.container.scrollTop > 0) {
                this.fade = true;
                this.$emit('sectionChange', 1);
            }
           if(this.$refs.container.scrollTop >= this.$refs.section1.offsetTop) {
                this.$emit('sectionChange', 2);
            }
            if(this.$refs.container.scrollTop >= this.$refs.section2.offsetTop) {
                this.$emit('sectionChange', 3);
            }
            if(this.$refs.container.scrollTop >= this.$refs.section3.offsetTop) {
                this.$emit('sectionChange', 4);
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
