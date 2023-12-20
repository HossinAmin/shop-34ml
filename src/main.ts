import { createApp } from "vue";
import { createPinia } from "pinia";

import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/home.vue";
import "./style.css";

const routes = [{ name: "home", path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
