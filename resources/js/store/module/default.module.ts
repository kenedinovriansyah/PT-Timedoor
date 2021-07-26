const state = {
    choice: {
        size: 0,
        price: 0
    },
    updated: true,
    record: false
};
const actions = {};

const mutations = {
    choice: (args: any, context: any) => {
        args.choice.size = context.size;
        args.choice.price = context.price;
    },
    updated: (args: any, context: boolean) => (args.updated = context),
    record: (args: any, context: boolean) => (args.record = context)
};

const getters = {
    defaults: (args: any) => args
};
export default { state, actions, getters, mutations };
