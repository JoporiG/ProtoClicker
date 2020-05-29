export const state = () => ({
    coins: 0,
    onClick: 0,
    boosts: [] 
})

//крч из-за localStorage всё надо в инты переводить поэтому везде parseInt, лучше так оставить
export const mutations = {
    setCoins(state, coins) {
        state.coins = parseInt(coins);
        localStorage.coins = parseInt(coins); // localStorage чтобы сохранялось при обновлении (как куки)
        console.log("set coins", state.coins);
    },
    setClicks(state, onClick) {
        state.onClick = parseInt(onClick);
        localStorage.onClick = parseInt(onClick);
        console.log("set onClick", state.onClick);
    },
    plusClicks(state, onClick) {
        state.onClick = parseInt(state.onClick) + parseInt(onClick);
        localStorage.onClick = parseInt(localStorage.onClick) + parseInt(onClick);
        console.log("+ onClick", state.onClick);
    },
    addAmmount(state, i){ //не понял как массив засунуть в локалстораге
        state.boosts[i]++;
        localStorage.setItem("boosts", JSON.stringify(state.boosts));
    },
    setAmmount(state, boosts){
        state.boosts = boosts;
        localStorage.setItem("boosts", JSON.stringify(boosts));
    }
}

export const actions = {
    ChangeClicks(ctx, delta) {
        ctx.commit('plusClicks', parseInt(delta));
    },
    ChangeCoins(ctx, am) {
        ctx.commit('setCoins', am);
    },
    Save(ctx, {coins, onClick}) { //сохранение по кнопке
        localStorage.coins = coins;
        localStorage.onClick = onClick;
        ctx.commit('setClicks', coins);
        ctx.commit('setCoins', onClick);

        //this.$axios.push(""); отправить на серв
    },
    Restore(ctx) {
        console.log("restoring", localStorage.coins, localStorage.onClick);
        if (!isNaN(localStorage.coins))
            ctx.commit('setCoins', parseInt(localStorage.coins)); // восстанавливается из localStorage
        else
            ctx.commit('setCoins', 0);

        if (!isNaN(localStorage.onClick))
            ctx.commit('setClicks', parseInt(localStorage.onClick)); // восстанавливается из localStorage
        else
            ctx.commit('setClicks', 1);
        if (isNaN(localStorage.getItem("boosts")))
            ctx.commit('setAmmount', JSON.parse(localStorage.getItem("boosts"))); // восстанавливается из localStorage
        else{
            ctx.commit('setAmmount', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); //сюда при добавлении нового надо пихать ноль (naverno)
        }
    },
    addAmmount(ctx, i){
        ctx.commit('addAmmount', i);
    }
}

export const getters = {
    getCoins: function (state) { 
        console.log("getting clicks", parseInt(state.coins));
        return parseInt(state.coins);
    },
    getOnClick: function (state) { 
        console.log("getting onClick", state.onClick);
        return parseInt(state.onClick);
    },
    getAmmount: function (state) { 
        return state.boosts;
    },
}
