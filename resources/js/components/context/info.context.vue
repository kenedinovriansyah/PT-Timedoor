<template>
    <div>
        <div class="info">
            <div class="floating">
                <div :class="dropdown ? 'dropdown' : 'hidden'">
                    <div class="dropdown-body">
                        <div
                            class="cart"
                            v-for="(items, index) in product.cart"
                            :key="index"
                            @click="removecart(items)"
                        >
                            <div class="cart-image">
                                <img :src="items.img" alt="" />
                            </div>
                            <div class="name">
                                <span>{{ items.name }}</span>
                            </div>
                            <span class="quantity">
                                {{ items.quantity }}
                            </span>
                            <div class="total">${{ items.total }}</div>
                        </div>
                    </div>
                    <div class="dropdown-footer">
                        <span>Sub Total</span>
                        <span>${{ sub_total }}</span>
                    </div>
                    <button class="btn-buy">
                        Buy Now
                    </button>
                </div>
                <button @click="clickdropdown()">
                    <icons :src="cart" class="icons" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters, mapState } from "vuex";
import { Cart } from "../../store/types/interface";
import cart from "../media/new_icons/shopping-cart (1).svg";

@Component({
    computed: {
        ...mapGetters(["product"]),
        ...mapState(["productmodules"])
    }
})
export default class InfoContext extends Vue {
    cart = cart;
    dropdown = false;
    sub_total = 0;
    productmodules: any;

    removecart(context: Cart) {
        this.$store.commit("remove", context);
    }

    clickdropdown() {
        this.dropdown = !this.dropdown;
    }

    beforeUpdate() {
        let total: number = 0;
        for (let i = 0; i < this.productmodules.cart.length; i++) {
            total += this.productmodules.cart[i].total;
        }
        this.sub_total = total;
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

.info {
    position: fixed;
    bottom: 60px;
    right: 60px;
    .floating {
        position: relative;
        transition: 500ms ease-in-out;
    }
    button {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: $color;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: $boxshadow-pedia;
        -webkit-box-shadow: $boxshadow-pedia;
        -moz-box-shadow: $boxshadow-pedia;
        border: none;
        outline: none;
    }
    .icons {
        width: 20px;
        height: 20px;
        fill: $white;
    }
}

.hidden {
    display: none;
    visibility: hidden;
}

.dropdown {
    width: 280px;
    height: 360px;
    background-color: $white;
    box-shadow: $boxshadow-pedia;
    -webkit-box-shadow: $boxshadow-pedia;
    -moz-box-shadow: $boxshadow-pedia;
    position: absolute;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    animation: dropdown 1s forwards;
    overflow: hidden;
    .dropdown-body {
        display: flex;
        flex-direction: column;
        padding: 10px;
        height: 70%;
        overflow-y: auto;
        border-bottom: solid 1px #c9d1d9;
        /* width */
        &::-webkit-scrollbar {
            width: 1px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
    .dropdown-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: $font-family-Kanit;
        padding: 13px 15px 13px 15px;
    }
    .cart {
        display: flex;
        align-items: center;
        transition: 500ms ease-in-out;
        border-bottom: solid 1px #c9d1d9;
        padding: 3px 0px 3px 0px;
        &:hover {
            background-color: #42424230;
            padding: 5px 10px 5px 10px;
            margin: 5px 0px 5px 0px;
            border-radius: 15px;
            cursor: pointer;
        }
        .cart-image {
            width: 32px;
            height: 32px;
            margin: 0px 5px 0px 5px;
            img {
                width: 100%;
                height: 100%;
                background-size: 100% 100%;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
        font-family: $font-family-Public;
        font-size: 13.333px;
        .name {
            width: 140px;
            padding: 0px 5px 0px 5px;
            color: $text;
        }
        .quantity {
            margin: 0px 10px 0px 10px;
        }
        .quantity,
        .total {
            font-family: $font-family-Kanit;
        }
    }
}

.btn-buy {
    position: absolute;
    bottom: 0;
    width: 100% !important;
    height: 40px !important;
    border-radius: 0px !important;
    font-family: $font-family-Public !important;
    color: $white !important;
}

@keyframes dropdown {
    from {
        opacity: 0;
        top: -50%;
        left: -50%;
    }
    to {
        opacity: 1;
        top: -260%;
        left: -300%;
    }
}
</style>
