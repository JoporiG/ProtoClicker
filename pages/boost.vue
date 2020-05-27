<template>
    <div>
        <v-btn tile outlined href="/clicker">
            <v-icon>
                mdi-arrow-left-thick
            </v-icon>
        </v-btn>
        <v-list>
            <v-list-item v-for="boost in boosts" :key="boost.id">
                <v-card align="end" style="width: 500px; margin-bottom: 10px;">
                    <v-card-title>
                        {{boost.name}}
                    <v-img class="img" :src="boost.img">
                    </v-img>
                    </v-card-title>
                    <v-card-text>
                        Стоимость: {{boost.price}} coins
                        <br/>
                        Буст: +{{boost.boost}} coins
                    </v-card-text>
                    <v-card-actions>
                        <v-card-text style="margin-left: 0px;">
                            Ammount: {{boost.ammount}}
                        </v-card-text>
                        <v-btn @click="NewBoost(boost.id)">
                            Buy
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
    data(){
        return{
            boosts: [
                {
                    name: 'Лучшая кастрюля', //название дилдо
                    boost: 1, //    сколько бустит дилдо (как сильно рвет очко)
                    price: 100, // цена дилдо
                    icon: 'mdi-flask-empty', // иконка дилдо
                    img: "data:image/jpeg;base64,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",
                    //сверху картинка дилдо(ее нету у меня(и наверно не будет(просто пустое место было)))
                    ammount: 0, //количество уже купленных дилдосов
                    id: 0, //id дилдоса, чтобы их отличать как-то
                },
                {
                    name: 'Сковородка',
                    boost: 1,
                    price: 100,
                    icon: 'mdi-flask-empty',
                    img: "https://dosh-home.com/img/products/306/5bdc85c0c4145.png",
                    ammount: 0,
                    id: 1,
                },
            ]
        }
    },
    methods: {
        NewBoost(id){
            //а еще смотреть, что у нас есть деньги
            //здесь надо пушить то, что мы купили новый дилдо на сервер
            if(this.$store.getters.GetCoins >= this.boosts[id].price){
                this.$store.dispatch('ChangeClicks', this.boosts[id].boost);
                this.$store.dispatch('ChangeCoins', -this.boosts[id].price);
                this.boosts[id].ammount++;
            } else {
                console.log("Not enough money"); //кому не лень, сделайте нормальный обработчик
            }
        }
    }
}
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img{
    margin-left: 100px; 
    width: 10px;

}
</style>