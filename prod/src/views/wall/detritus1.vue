<template>

    <div class="absolute w-screen h-screen top-0 left-0 bg-[#ffffff] bg-opacity-80 text-black overflow-y-scroll">
        <div class="flex w-full flex-col lg:flex-row">
            <img class="w-full lg:w-[100vh] lg:h-[100vh]" src="/pieces/2-1.jpg" />
            <div class="flex flex-col text-left flex-grow justify-center items-center uppercase relative">
                <router-link :to="'detritus0'">
                    <button
                        class="absolute top-0 left-0 font-[GT] border-b border-[rgba(0,0,0,0.2)] h-16 w-full px-8 z-100 uppercase text-lg md:text-xl">View
                        Prev in Pairing</button>
                </router-link>

                <router-link :to="'/'">
                    <button
                        class="absolute pb-48 bottom-0 lg:pb-0 pt-4 lg:pt-0 left-0 font-[GT] border-t border-[rgba(0,0,0,0.2)] h-16 w-full px-8 z-100 uppercase text-lg md:text-xl">View
                        All Works</button>
                </router-link>
                <div class="py-24 pb-64 lg:py-0 lg:pb-0 px-4">
                    <h1 class="text-4xl">Detritus 1</h1>
                    <h3 class="font-[GT] mt-4">Unix Timestamp: 1637744928000</h3>
                    <h3 class="font-[GT]">Dimensions: 36" x 36"</h3>
                    <h3 class="font-[GT]">Medium: Print on Silk Canvas</h3>
                    <h3 class="font-[GT]">Status: No Owner</h3>
                    <button class="mt-4 font-[GT] uppercase  border border-black px-8 py-2 mb-2"
                        @click="inquire = true">Inquire</button>
                </div>
            </div>
        </div>
    </div>

    <Inquire :active="inquire" @close="inquire = false" title="Detritus 1"></Inquire>

</template>


<script>
import { RouterLink } from "vue-router";
import Inquire from "../../components/Inquire.vue";

export default {
    components: {
        Inquire
    },
    data() {
        return {
            inquire: false,
        }
    }
}
</script>