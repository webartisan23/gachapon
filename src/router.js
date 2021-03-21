import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./view/Home.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./view/Home.vue"),
    },
    {
      path: "/gachapon",
      name: "Gachapon",
      component: () => import("./view/Gachapon.vue"),
    },
    {
      path: "/taiyak-eth",
      name: "TaiyakEth",
      component: () => import("./view/TaiyakEth.vue"),
    },
    {
      path: "/collection",
      name: "Collection",
      component: () => import("./view/Collection.vue"),
    },
    {
      path: "/artist-panel",
      name: "ArtistPanel",
      component: () => import("./view/ArtistPanel.vue"),
      children : [
        {
          path: "/",
          name: "Dashboard",
          component: () => import("./components/artistpanel/Dashboard.vue"),
        },
        {
          path: "profile",
          name: "ProfileEdit",
          component: () => import("./components/artistpanel/EditProfile.vue"),
        },
        {
          path: "create-nfts",
          name: "CreateNFTS",
          component: () => import("./components/artistpanel/CreateNFTS.vue"),
        },
        {
          path: "manage-nfts",
          name: "ManageNFTS",
          component: () => import("./components/artistpanel/ManageNFTS.vue"),
        },
        {
          path: "manage-machine",
          name: "ManageMachine",
          component: () => import("./components/artistpanel/ManageMachines.vue"),
        },
        
      ]
    },
    {
      path: "/artist-tab",
      name: "ArtistTab",
      component: () => import("./view/ArtistTab.vue"),
    },
    { path: "*", redirect: "/" },
  ],
});
export default router;
