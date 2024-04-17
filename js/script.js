const { createApp } = Vue

createApp({
    data(){
        return {
            greetings: "Hello world i'm a Capibara!",
            image: "./img/capibara.jpeg"
        };
    }
}).mount("#app");

