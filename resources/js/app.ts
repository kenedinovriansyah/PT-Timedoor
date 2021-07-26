import Vue from "vue";
import Basecomponent from "./components/base.component.vue";
import "./static/kenedi.min.scss";
import SvgInline from "vue-inline-svg";
import store from "./store";
import router from "./routes";

Vue.component("icons", SvgInline);

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(Basecomponent)
});
