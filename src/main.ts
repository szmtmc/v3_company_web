import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import components from "./components";
import './assets/style/reset.css'
import '@arco-design/web-vue/es/message/style/css.js';

const app = createApp(App);
app.use(router).use(components);
app.mount("#app");
