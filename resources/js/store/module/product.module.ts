import { Cart, ProductState } from "../types/interface";

const state: ProductState = {
    cart: [],
    product: []
};
const actions = {};
const mutations = {
    add: (args: ProductState, context: Cart) => {
        args.cart.unshift(context);
    },
    remove: (args: ProductState, context: Cart) => {
        args.cart = args.cart.filter(x => {
            return x.id !== context.id;
        });
    }
};
const getters = {
    product: (args: ProductState) => args
};
export default { state, actions, mutations, getters };
