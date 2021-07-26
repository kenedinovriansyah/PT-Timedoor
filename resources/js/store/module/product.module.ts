import { Cart, ProductState } from "../types/interface";

const state: ProductState = {
    cart: [],
    product: [
        {
            name: "Italino Original",
            description:
                "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
            img:
                "https://ths.cafe/wp-content/uploads/2021/01/THS-Special-Pizza-The-Hunger-Solution.png"
        },
        {
            name: "Chiken Hawaii",
            description:
                "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
            img: "https://i.dlpng.com/static/png/6699618_preview.png"
        },
        {
            name: "Summer Pizza",
            description:
                "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
            img:
                "https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png"
        }
    ],
    data: {}
};
const actions = {};
const mutations = {
    add: (args: ProductState, context: Cart) => {
        args.cart = args.cart.filter(function(x) {
            return x.name !== context.name;
        });
        args.cart.unshift(context);
    },
    remove: (args: ProductState, context: Cart) => {
        args.cart = args.cart.filter(x => {
            return x.id !== context.id;
        });
    },
    detail: (args: ProductState, context: Cart) => {
        args.data = context;
    }
};
const getters = {
    product: (args: ProductState) => args
};
export default { state, actions, mutations, getters };
