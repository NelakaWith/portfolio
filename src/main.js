import { createApp } from "vue";
import "./scss/main.scss";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from "./router";

import { createHead } from "@unhead/vue/client";

const head = createHead();

createApp(App).component("Icon", Icon).use(router).use(head).mount("#app");

