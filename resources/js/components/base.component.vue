<template>
    <div>
        <InfoContext />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import InfoContext from "./context/info.context.vue";

@Component({
    components: {
        InfoContext
    }
})
export default class BaseComponent extends Vue {}
</script>

<style lang="scss" scoped>
$font-family-Inter: "Inter", sans-serif;
$font-family-Kanit: "Kanit", sans-serif;
$font-family-Lato: "Lato", sans-serif;
$font-family-Open: "Open Sans", sans-serif;

$white: rgba(255, 255, 255);
$boxshadow-pedia: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
$boxshadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
$boxshadow-button: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
$gray: #c9d1d9;
$color: rgb(0, 171, 85);
$text: rgba(49, 53, 59, 0.68);
</style>
