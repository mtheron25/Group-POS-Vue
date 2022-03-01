import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/products.js";

createApp(App).use(router).mount("#app");
