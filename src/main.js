import { createApp } from "vue";
import "./scss/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from "./router";

createApp(App).component("Icon", Icon).use(router).mount("#app");

