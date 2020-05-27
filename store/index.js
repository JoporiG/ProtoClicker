export const state = () => ({
    coins: 0,
    OnClick: 1,
})

export const mutations = {
    ChangeCoins(state, ch) {
        state.coins += ch;
        console.log("CH coins")
        console.log(state.coins);
    },
    ChangeClicks(state, ch) {
        state.OnClick += ch;
        console.log("Ch click")
    },
}

export const actions = {
    ChangeClicks(ctx, am) {
        ctx.commit('ChangeClicks', am);
    },
    ChangeCoins(ctx, am) {
        ctx.commit('ChangeCoins', am);
    }
}

export const getters = {
    GetCoins: function (state) { 
        console.log(state.coins);
        return state.coins 
    },
    GetOnClick: function (state) { 
        console.log("Na clicki")
        return state.OnClick 
    },
}
