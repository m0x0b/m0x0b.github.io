<template>

    <div class="absolute w-screen h-screen top-0 left-0 bg-[#ffffff] bg-opacity-80 text-black overflow-y-scroll">
        <div class="flex w-full flex-col lg:flex-row">
            <img class="w-full lg:w-[100vh] lg:h-[100vh]" src="/pieces/3-0.jpg" />
            <div class="flex flex-col text-left flex-grow justify-center items-center uppercase relative">
                <router-link :to="'afterimage1'">
                    <button
                        class="absolute top-0 left-0 font-[GT] border-b border-[rgba(0,0,0,0.2)] h-16 w-full px-8 z-100 uppercase text-lg md:text-xl">View
                        Next in Pairing</button>
                </router-link>

                <router-link :to="'/'">
                    <button
                        class="absolute pb-48 bottom-0 lg:pb-0 pt-4 left-0 font-[GT] border-t border-[rgba(0,0,0,0.2)] h-16 w-full px-8 z-100 uppercase text-lg md:text-xl">View
                        All Works</button>
                </router-link>
                <div class="py-24 pb-64 lg:py-0 lg:pb-0 px-4">
                    <h1 class="text-4xl">After Image 0</h1>
                    <h3 class="font-[GT] mt-4">Unix Timestamp: 161395522000</h3>
                    <h3 class="font-[GT]">Dimensions: 36" x 36"</h3>
                    <h3 class="font-[GT]">Medium: Print on Silk Canvas</h3>
                    <h3 class="font-[GT]">Status: No Owner</h3>
                    <button class="mt-4 font-[GT] uppercase  border border-black px-8 py-2 mb-2">Inquire</button>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import { RouterLink } from "vue-router";
export default {
    data() {
        return {

        }
    }
}
</script>