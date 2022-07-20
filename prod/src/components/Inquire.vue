<template>
    <div class="fixed w-full h-screen top-0 left-0 bg-white bg-opacity-50" :class="active?'block':'hidden'">
        <form action="https://formspree.io/f/xwkygbvg" method="POST" ref="form">
            <label>
                Your email:
                <input type="email" name="email">
            </label>
            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>
            <!-- your other form fields go here -->
            <button type="submit">Send</button>
        </form>
        <div id="form-status">yo?</div>
    </div>
</template>

<script type="ts">



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
                return false;
            },
        },
    },
    data() {
        return {}
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
                    status.innerHTML = "Thanks for your submission!";
                    form.reset()
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form"
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form"
            });
        }
        form.addEventListener("submit", handleSubmit)
    }
}
</script>