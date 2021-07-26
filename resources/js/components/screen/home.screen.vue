<template>
    <div class="home">
        <div class="grids">
            <div
                class="card"
                v-for="(items, index) in product.product"
                :key="index"
            >
                <div class="card-image">
                    <img :src="items.img" alt="" />
                </div>
                <div class="card-body">
                    <span class="name">{{ items.name }}</span>
                    <div class="description">
                        Extra-virgin olive oil, garlic, mozzarella, mushrooms
                        and olives.
                    </div>
                    <div class="pick-size">
                        <span>Pick Size</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="groups">
                        <div
                            class="group"
                            @click="clickrouter(items.name, 22, 8)"
                        >
                            <div class="box">
                                <span>22</span>
                                <span>cm</span>
                            </div>
                            <div class="price">
                                $8
                            </div>
                        </div>
                        <div
                            class="group"
                            @click="clickrouter(items.name, 29, 10)"
                        >
                            <div class="box">
                                <span>29</span>
                                <span>cm</span>
                            </div>
                            <div class="price">
                                $10
                            </div>
                        </div>
                        <div
                            class="group"
                            @click="clickrouter(items.name, 32, 12)"
                        >
                            <div class="box">
                                <span>32</span>
                                <span>cm</span>
                            </div>
                            <div class="price">
                                $12
                            </div>
                        </div>
                    </div>
                    <div class="card-button" @click="clickChoice(items)">
                        <button>
                            Choice
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <DetailScreen />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters, mapState } from "vuex";
import { Product } from "../../store/types/interface";
import DetailScreen from "./detail.screen.vue";

@Component({
    components: { DetailScreen },
    computed: {
        ...mapGetters(["product"]),
        ...mapState(["productmodules"])
    }
})
export default class HomeScreen extends Vue {
    choice = -1;
    productmodules: any;

    click(index: number) {
        this.choice = index;
    }

    clickChoice(args: Product) {
        const cart = this.productmodules.cart.filter(function(x) {
            return x.name === args.name;
        })[0];
        if (!cart) {
            this.$store.commit("updated", true);
        }
        this.$store.commit("detail", args);
    }

    clickrouter(name: string, size: number, price: number) {
        if (size) {
            this.$store.commit("choice", { size: size, price: price });
            localStorage.setItem("size", size.toString());
            localStorage.setItem("price", price.toString());
        }
        const cart = this.productmodules.cart.filter(function(x) {
            return x.name === name;
        })[0];
        if (!cart) {
            this.$store.commit("updated", true);
        }
        this.$router.push({
            name: "detail",
            params: {
                name: name
            }
        });
    }
}
</script>

<style lang="scss" scoped>
$font-family-Inter: "Inter", sans-serif;
$font-family-Kanit: "Kanit", sans-serif;
$font-family-Lato: "Lato", sans-serif;
$font-family-Open: "Open Sans", sans-serif;
$font-family-Public: "Public Sans", sans-serif;

$white: rgba(255, 255, 255);
$boxshadow-pedia: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
$boxshadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
$boxshadow-button: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
$gray: #c9d1d9;
$color: rgb(0, 171, 85);
$text: rgba(49, 53, 59, 0.68);

.home {
    background-color: $white;
    padding: 10px;
}

.grids {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    margin: 5px;
    width: 320px;
    background-color: $white;
    border-radius: 10px;
    overflow: hidden;
    transition: 500ms ease-in-out;
    border: none;
    cursor: pointer;
    &:hover {
        box-shadow: $boxshadow-pedia;
        -webkit-box-shadow: $boxshadow-pedia;
        -moz-box-shadow: $boxshadow-pedia;
        border: solid 1px #c9d1d9;
    }
    .card-image {
        width: 100%;
        img {
            width: 100%;
            height: 260px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    .card-body {
        display: flex;
        flex-direction: column;
        .name,
        .description {
            font-family: $font-family-Public;
            text-align: center;
        }
        .name {
            font-size: 16px;
        }
        .description {
            font-size: 13.333px;
            color: $text;
        }
        .pick-size {
            position: relative;
            text-align: center;
            font-family: $font-family-Kanit;
            span {
                background-color: $white;
                z-index: 2;
                position: relative;
                padding: 0px 10px 0px 10px;
                color: #2d2b2d;
                cursor: default;
            }
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                background-color: #e4e4e4;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    .card-footer {
        .groups {
            display: flex;
            align-items: center;
            justify-content: space-around;
            .group {
                display: flex;
                align-items: center;
                .box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 40px;
                    height: 40px;
                    background-color: $white;
                    box-shadow: $boxshadow-pedia;
                    -webkit-box-shadow: $boxshadow-pedia;
                    -moz-box-shadow: $boxshadow-pedia;
                    border-radius: 100%;
                    font-size: 13px;
                    line-height: 12px;
                    font-family: $font-family-Kanit;
                    margin: 0px 5px 0px 0px;
                    cursor: pointer;
                    transition: 500ms ease-in-out;
                    &:hover {
                        background-color: $color;
                        color: $white;
                    }
                }
                .price {
                    font-family: $font-family-Public;
                    font-size: 12px;
                }
            }
        }
        .card-button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 15px 0px 0px 0px;
            button {
                width: 200px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $white;
                border-radius: 30px;
                border: none;
                outline: none;
                background-color: rgba(0, 171, 85, 0.08);
                color: $color;
                font-family: $font-family-Kanit;
                transition: 500ms ease-in-out;
                &:hover {
                    background-color: $color;
                    color: $white;
                }
            }
        }
    }
}
</style>
