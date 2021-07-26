const state = {
    choice: {
        size: 0,
        price: 0
    }
};
const actions = {};

const mutations = {
    choice: (args: any, context: any) => {
        args.choice.size = context.size;
        args.choice.price = context.price;
    }
};

const getters = {
    defaults: (args: any) => args
};
export default { state, actions, getters, mutations };
