<template>
    <div class="text whitespace-nowrap">{{ text }}</div>
</template>

<script>
export default {
    props: {
        newText: {
            type: String,
            default: function () {
                return "";
            },
        },
    },
    data() {
        return {
            text: "",
            chars: "!<>-_\\/[]{}—=+*^?#________",
            q: [],
            frameRequest: null,
            frame: null,
            resolve: null,
            el: null
        };
    },
    methods: {
        scramble(newText) {
            let oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => (this.resolve = resolve));
            this.q = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || "";
                const to = newText[i] || "";
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.q.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        },
        update() {
            let output = "";
            let complete = 0;
            for (let i = 0, n = this.q.length; i < n; i++) {
                let { from, to, start, end, char } = this.q[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.q[i].char = char;
                    }
                    //output += `<span class="dud">${char}</span>`;
                    output += char;
                } else {
                    output += from;
                }
            }
            this.text = output;
            if (complete === this.q.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        },
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    },
    mounted() {
        this.el = document.querySelector(".text");
    },
    watch: {
        newText: function (newVal, oldVal) { // watch it
            this.scramble(this.newText);
        }
    }
};
</script>
