<template>
    <div class="fixed w-full h-screen top-0 left-0 bg-white bg-opacity-90 filter backdrop-blur-md overflow-y-auto" :class="active ? 'block' : 'hidden'">

        <div class="absolute top-4 left-1/2  w-8 h-8 transform rotate-45 -translate-x-1/2 cursor-pointer" @click="closeInquiry">
            <span class="absolute w-full h-px bg-black top-4"></span>
            <span class="absolute w-full h-px bg-black top-4 transform rotate-90"></span>
        </div>

        <div class="absolute left-1/2 top-20 md:top-24 transform -translate-x-1/2">
            <form action="https://formspree.io/f/xwkygbvg" class="w-[80vw] md:w-[500px]" method="POST" ref="form">
                <label>
                    <p class="font-[GT] uppercase">Your email:</p>
                    <input class="w-full border outline-none" type="email" name="email" style="border-radius: 0 !important">
                </label>
                <br /> <br />
                <label>
                    <p class="font-[GT] uppercase">Your message:</p>
                    <textarea rows="5" v-model="message" class="w-full border outline-none" name="message" style="border-radius: 0 !important"></textarea>
                </label>
                <br />
                <br />
                <button class="font-[GT] uppercase border w-full text-center py-2 border-black"
                    type="submit">Send</button>
                <div class="text-center font-[GT] uppercase text-sm" id="form-status" ref="status"></div>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: "Inquire",
    props: {
        title: {
            type: String,
            default: function () {
                return "";
            },
        },
        active: {
            type: Boolean,
            default: function () {
                return true;
            },
        },
    },
    data() {
        return {
            message: "Re: " + this.title + ",\n",
        }
    },
    mounted() {
        let form = this.$refs.form;
        async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "Inquiry Sumbitted";
                    form.reset()
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "Error Submitting Inquiry"
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "Error Submitting Inquiry"
            });
        }
        form.addEventListener("submit", handleSubmit)
    },
    methods: {
        closeInquiry() {
            this.message = "Re: " + this.title + ",\n";
            this.$refs.status.innerHTML = ""
            this.$emit("close");
            
        }
    }
}
</script>