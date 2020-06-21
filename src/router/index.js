import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Playlist from "../views/Playlist.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
