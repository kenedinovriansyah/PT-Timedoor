import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeScreen from "../components/screen/home.screen.vue";
import DetailScreen from "../components/screen/detail.screen.vue";

Vue.use(VueRouter);

type RouteName = "home" | "detail";
type RoutePath = "/" | "/detail/:name";

export interface Routes {
    path: RoutePath;
    name: RouteName;
    component: VueConstructor<Vue>;
}

const routes: Routes[] = [
    {
        name: "home",
        path: "/",
        component: HomeScreen
    },
    {
        name: "detail",
        path: "/detail/:name",
        component: DetailScreen
    }
];

const router = new VueRouter({ routes });

export default router;
