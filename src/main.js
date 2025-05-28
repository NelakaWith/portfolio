import { createApp } from "vue";
import "./scss/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

createApp(App).component("Icon", Icon).mount("#app");
