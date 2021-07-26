import Vue from "vue";
import Vuex from "vuex";
import defaultmodules from "./module/default.module";
import productmodules from "./module/product.module";

Vue.use(Vuex);

export default new Vuex.Store({ modules: { defaultmodules, productmodules } });
