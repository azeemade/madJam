import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Playlist from "../views/Playlist.vue";
import formFail from "../components/formFail.vue";
import formSuccess from "../components/formSuccess.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist
  },
  {
    path: "/404",
    name: "formFail",
    component: formFail
  },
  {
    path: "/thanks",
    name: "formSuccess",
    component: formSuccess
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
