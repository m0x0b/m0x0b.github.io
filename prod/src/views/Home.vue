<template>

        <div class="absolute w-screen h-full top-0 left-0 bg-[#ffffff] bg-opacity-20"></div>

        <div class="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2">
            <h2 class="text-md md:text-xl font-[GT] absolute -top-4">
                <scramble :newText="stamp"></scramble>
            </h2>
            <h1 class="text-5xl md:text-8xl text-black">NULL IDEAL</h1>
        </div>

        <p class="fixed bottom-4 right-4 w-[180px] text-[8px] leading-[9px]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9ca4<br />
            &nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ce47&nbsp;&nbsp;7fa6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            &nbsp;&nbsp;&nbsp;dd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;53&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bc&nbsp;&nbsp;&nbsp;&nbsp;90<br />
            &nbsp;&nbsp;42bbb&nbsp;&nbsp;&nbsp;773f82a529e66695231903d451f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            &nbsp;&nbsp;&nbsp;0d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a6<br />
            &nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2626<br />
        </p>


</template>

<script>
import { RouterLink } from "vue-router";
import Scramble from "../components/Scramble.vue";
export default {
    name: "Home",
    components:{
        Scramble
    },
    data() {
        return {
            stamp: ""
        }
    },
    mounted() {
        setTimeout(() => {
            this.stamp = "1654056634000";
        }, 1500)

    }
}
</script>
