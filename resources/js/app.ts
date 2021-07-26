import Vue from "vue";
import Basecomponent from "./components/base.component.vue";

const app = new Vue({
    el: "#app",
    render: h => h(Basecomponent)
});
