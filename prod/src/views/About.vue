<template>
    <div class="absolute w-full h-screen top-0 left-0 bg-white bg-opacity-50 filter backdrop-blur-md overflow-y-scroll">
        <div class="w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
            <h1 class="mt-16 text-4xl uppercase">Introduction</h1>
            <h2 class="font-[GT] tracking-tight mt-4">NULL IDEAL, my second exhibition, represents a marked advancement in the detail,
                direction, and cohesion of
                my work. Recent advancements in the field of deep learning have enabled more ambitious concepts and true
                collaboration of artist and data. It is with great pleasure that I release this 14-piece collection as a
                more ideal display of my capabilities.
            </h2>


            <h1 class="mt-16 text-4xl uppercase">Methodology</h1>
            <h2 class="font-[GT] mt-4 tracking-tight">
                I see data in my surroundings and picture forms produced from its embeddings, whether that be decaying
                leaves
                from my yard in the Detritus pairing or plastic containers from my pantry in Polyethene 0 and 1. After I
                have
                decided on a source, I go about composing a training set, which may either involve taking hundreds of
                photos
                of
                objects I can get my hands on (expanding with augmentation) or pulling images from the internet. I often
                take
                advantage of object detection and color-matching techniques to curate data in the ladder case. I then
                train
                and
                tailor a deep neural network to be responsible for supplying the “essence” of the source data to the
                forms I
                will create. I create these forms in any way I decide, whether that be painting/ drawing and scanning,
                folding
                from paper, photographs, etc. Any given work may have dozens of different techniques behind neighboring
                forms,
                all made cohesive by the deep net. In this way, I collaborate with the data. Though this process
                requires a
                digital output, I prefer that my work be viewed in a physical form, and I explain in the signature
                section
                how I
                ensure the uniqueness of each print.
            </h2>


            <h1 class="mt-16 text-4xl uppercase">Signature</h1>
            <h2 class="font-[GT] mt-4 tracking-tight">
                I am creating an ecosystem around my works where anyone can verify their authenticity without my or
                another
                body's input. Each piece is signed with a traditional signature and a public key, as well as a timestamp
                marking
                the exact second the work was completed. Owners of my works are given a certificate of authenticity in
                the
                form
                of a private key corresponding to the public key. Messages can be encrypted with the public key that can
                only be
                decrypted with the private key. Via this relationship a variety of robust authentication methods are
                possible. I
                will maintain a secure webserver to enable signing, making duplication impossible. This technology is
                adjacent
                to what allows NFTs to function, so imagining these as physical NFTs is not entirely misplaced, though
                my
                process requires little computational / energy draw and is proprietary to my works alone. My larger
                canvas
                works
                use RSA for this process and my household items (scarves, vases, etc) use elliptic curve encryption.
            </h2>

            <h1 class="mt-16 text-4xl uppercase">NULL IDEAL</h1>
            <h2 class="uppercase font-[GT] tracking-tight mt-4 pb-16">A precious metal, the element of kings. <br /> 
                From the Earth it is mined, <br />  
                and within our bodies it lies. <br /> 
                A conductor of electricity, <br /> 
                and a key component in all life. <br /> 
                Gold is the metal of the Sun, <br /> 
                and the color of our blood. <br /> 
                <br /> 
                As the leaves decay <br /> 
                and the colors fade away <br /> 
                the hope of springtime still remains. <br /> 
                <br /> 
                Lightning flashes In the sky <br /> 
                And for a moment Everything is clear <br /> 
                Then it's gone <br /> 
                And we're left With only the memories <br /> 
                Of what we saw <br /> 
                <br /> 
                Plastic is the new skin<br /> 
                It's what we're made of And it's what makes us beautiful <br /> 
                It's what keeps us together And it's what makes us whole <br /> 
                And it's what keeps us alive.<br /> 
                <br /> 
                Slowly, steadily, the wax melts away <br /> 
                drip by drip the flame flickers <br /> 
                the light dances in the darkness <br /> 
                the shadows stretch <br /> 
                the years vanish into the past <br /> 
                <br /> 
                -GPT3
                <br />
                <br />
                <br />
            </h2>
        </div>
    </div>

        <router-link :to="{name: 'home'}">
        <h1 class="fixed top-4 right-4 p-1 text-4xl cursor-pointer border-black border rounded-full">X</h1>
    </router-link>
</template>

<script>
export default {
    name: "About",
    data() {
        return {

        }
    },
}
</script>