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
                        <v-icon>
                            {{boost.icon}}
                        </v-icon>
                        {{boost.name}}
                    <v-img class="img" :src="boost.img">
                    </v-img>
                    </v-card-title>
                    <v-card-text>
                        {{boost.price}} coins
                        <br/>
                        + {{boost.boost}} coins
                    </v-card-text>
                    <v-card-actions>
                        <v-card-text style="margin-left: 0px;">
                            Ammount: {{boost.ammount}}
                        </v-card-text>
                        <v-btn style="margin-left: 0px;" @click="NewBoost(boost.id)">
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
                    name: 'blue dildo', //название дилдо
                    boost: 1, //    сколько бустит дилдо (как сильно рвет очко)
                    price: 100, // цена дилдо
                    icon: 'mdi-flask-empty', // иконка дилдо
                    img: "https://lh3.googleusercontent.com/proxy/MwMGETZJW6p1N7ef12bi47qmFWnBgIFwtVVHHy6CgxXsy-P4zjeOO5rHDwhBNLFjLOvTqpqrIKqXBLAXyRzO7MqW1fiiLxlOJBwf5BGF9xJqH_8hsLw4ViPnmperobzu",
                    //сверху картинка дилдо(ее нету у меня(и наверно не будет(просто пустое место было)))
                    ammount: 0, //количество уже купленных дилдосов
                    id: 0, //id дилдоса, чтобы их отличать как-то
                },
                {
                    name: 'red dildo',
                    boost: 1,
                    price: 100,
                    icon: 'mdi-flask-empty',
                    img: "https://lh3.googleusercontent.com/proxy/MwMGETZJW6p1N7ef12bi47qmFWnBgIFwtVVHHy6CgxXsy-P4zjeOO5rHDwhBNLFjLOvTqpqrIKqXBLAXyRzO7MqW1fiiLxlOJBwf5BGF9xJqH_8hsLw4ViPnmperobzu",
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