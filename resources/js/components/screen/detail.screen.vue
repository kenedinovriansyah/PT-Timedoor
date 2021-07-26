<template>
    <div class="detail">
        <div class="page-header">
            <button @click="clickrouter()">
                <i class="fas fa-arrow-left"></i>
                <span>Back To Home</span>
            </button>
        </div>
        <div class="grids">
            <div class="cols">
                <img
                    src="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png"
                    alt=""
                />
            </div>
            <div class="cols">
                <div class="piza-card">
                    <div class="piza-card-header">
                        <h2 class="name">Hawaii Vegetarian Pizza</h2>
                        <span class="description"
                            >Mouth watering pepperoni, cabanossi, mushroom,
                            capsicum, black olives and stretchy mozzarella,
                            seasoned with garlic and oregano.
                        </span>
                    </div>
                    <div class="piza-card-body">
                        <div class="piza-card-cols">
                            <h6>Select Crust</h6>
                            <ul>
                                <li
                                    v-for="(items, index) in array"
                                    :key="index"
                                    @click="addToppings(items)"
                                >
                                    <div class="group">
                                        <div
                                            :class="
                                                add.filter(
                                                    x =>
                                                        x.name.indexOf(
                                                            items.name
                                                        ) > -1
                                                )[0]
                                                    ? 'box active'
                                                    : 'box'
                                            "
                                        ></div>
                                        <span>{{ items.name }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="piza-card-cols">
                            <h6>Select Size</h6>
                            <ul>
                                <li>
                                    <div class="group">
                                        <div
                                            :class="
                                                defaults.choice.size === 22
                                                    ? 'box-s active'
                                                    : 'box-s'
                                            "
                                        >
                                            <span>22</span>
                                            <span>cm</span>
                                        </div>
                                        <div class="price">
                                            $8
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="group">
                                        <div
                                            :class="
                                                defaults.choice.size === 29
                                                    ? 'box-s active'
                                                    : 'box-s'
                                            "
                                        >
                                            <span>29</span>
                                            <span>cm</span>
                                        </div>
                                        <div class="price">
                                            $10
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="group">
                                        <div
                                            :class="
                                                defaults.choice.size === 32
                                                    ? 'box-s active'
                                                    : 'box-s'
                                            "
                                        >
                                            <span>32</span>
                                            <span>cm</span>
                                        </div>
                                        <div class="price">
                                            $12
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h6>Quantity</h6>
                    <div class="buttons">
                        <div class="field" id="field-input">
                            <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="Quantity"
                                autocomplete="off"
                                :value="quantity"
                                @input="clickquantity($event)"
                                min="1"
                            />
                        </div>
                        <button @click="addCart()">
                            <icons :src="cart" class="icons" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                    <div class="total">
                        <span>Total</span>
                        ${{ total }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters, mapState } from "vuex";
import cart from "../media/new_icons/shopping-cart.svg";

@Component({
    computed: {
        ...mapGetters(["defaults", "product"]),
        ...mapState(["defaultmodules", "productmodules"])
    }
})
export default class DetailScreen extends Vue {
    cart = cart;
    quantity = 1;
    total = 32;
    default_total = 32;
    defaultmodules: any;
    productmodules: any;
    array = [
        { name: "Avocado", price: 1 },
        { name: "Broccoli", price: 1 },
        { name: "Onions", price: 1 },
        { name: "Zucchini", price: 1 },
        { name: "Lobster", price: 2 },
        { name: "Oyster", price: 2 },
        { name: "Salmon", price: 2 },
        { name: "Tuna", price: 2 },
        { name: "Bacon", price: 3 },
        { name: "Duck", price: 3 },
        { name: "Ham", price: 3 },
        { name: "Sausage", price: 3 }
    ];
    add = [];

    clickquantity(args: any) {
        const value = args.target.value;
        this.total = this.default_total * value;
        this.quantity = value;
    }

    addToppings(context: any) {
        if (this.add.filter(x => x.name === context.name)[0]) {
            this.add = this.add.filter(function(x) {
                return x.name !== context.name;
            });
            const price = this.quantity * context.price;
            this.default_total = this.total - price;
            this.total = this.default_total;
        } else {
            this.add.unshift(context);
            const add = this.quantity * context.price;
            this.default_total = this.total + add;
            this.total = this.default_total;
        }
    }

    addCart() {
        this.$store.commit("add", {
            id: this.productmodules.cart.length + 1,
            img:
                "https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png",
            name: "Pizza",
            total: this.total,
            quantity: this.quantity
        });
    }

    clickrouter() {
        this.$router.push({
            name: "home"
        });
    }

    beforeMount() {
        document.body.style.backgroundColor = "white";
        this.$store.commit("choice", {
            size: parseInt(localStorage.getItem("size")),
            price: parseInt(localStorage.getItem("price"))
        });
        this.default_total = this.defaultmodules.choice.price;
        this.total = this.default_total;
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

.detail {
    padding: 2rem 0px 2rem 0px;
}

.grids {
    display: flex;
    justify-content: center;
    padding: 4rem 0px 0px 0px;
    .cols {
        width: 100%;
        padding: 0px 10px 0px 10px;
        &:first-child {
            max-width: 40%;
        }
        &:last-child {
            max-width: 50%;
        }
        img {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        h6 {
            font-family: $font-family-Public;
            margin: 0px;
            padding: 0px;
            margin: 10px 0px 10px 0px;
        }
    }
}
.piza-card {
    .piza-card-header {
        display: flex;
        flex-direction: column;
        .name,
        .description {
            font-family: $font-family-Public;
        }
        .name {
            font-size: 18px;
        }
        .description {
            color: $text;
        }
    }
    .piza-card-body {
        display: flex;
        .piza-card-cols {
            width: 100%;
            max-width: 50%;
            h6 {
                padding: 15px 0px 0px 0px;
                font-family: $font-family-Public;
            }
        }
    }
}

ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: block;
    li {
        display: inline-block;
        cursor: pointer;
        .group {
            display: flex;
            align-items: center;
            .box {
                width: 15px;
                height: 15px;
                border-radius: 100%;
                border: solid 1px #c9d1d9;
                margin: 0px 5px 0px 0px;
            }
            .box.active {
                background-color: $color;
            }
            color: $text;
            width: 120px;
            margin: 0px 5px 5px 0px;
            font-family: $font-family-Public;
            .box-s {
                width: 46px;
                height: 46px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: $font-family-Kanit;
                line-height: 12px;
                background-color: $white;
                border-radius: 100%;
                border: solid 1px rgb(0 171 85 / 24%);
                margin: 0px 5px 0px 0px;
                transition: 500ms ease-in-out;
                &:hover {
                    background-color: $color;
                    color: $white;
                }
            }
            .box-s.active {
                background-color: $color;
                color: $white;
            }
        }
    }
}
.buttons {
    display: flex;
    align-items: center;
    margin: 15px 0px 0px 0px;
    #field-input {
        width: 200px;
        height: 40px;
        box-shadow: $boxshadow-pedia;
        -webkit-box-shadow: $boxshadow-pedia;
        -moz-box-shadow: $boxshadow-pedia;
        border-radius: 15px;
        overflow: hidden;
        margin: 0px 5px 0px 0px;
        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding: 0px 15px 0px 15px;
        }
    }
    button {
        margin: 0px 0px 0px 5px;
        width: 200px;
        height: 40px;
        border-radius: 30px;
        background-color: rgb(0 171 85 / 24%);
        color: $color;
        font-family: $font-family-Kanit;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .icons {
            width: 20px;
            height: 20px;
            fill: $color;
        }
    }
}

.page-header {
    padding: 0px 15px 0px 15px;
    button {
        width: 160px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: none;
        border-radius: 30px;
        background-color: $color;
        color: $white;
        font-family: $font-family-Kanit;
    }
}

.total {
    font-family: $font-family-Public;
    margin: 10px 0px 0px 0px;
    font-size: 20px;
}
</style>
