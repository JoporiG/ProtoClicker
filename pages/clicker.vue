<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <h1>Кликер</h1>
        </v-row>
        <v-row class="mt-10">
          <v-col cols="11"> <!--левая сторона (счетчик и кнопка)-->
            <v-row justify="center" align="center">
              <!--если число очков кратно 100 цвет красный-->
              <h1 :style="`color: ${(coins % 100 == 0) ? 'red' : 'black'}`">{{coins}}</h1>
              <v-icon class="ml-2" large color="red">mdi-currency-usd-circle-outline</v-icon>
            </v-row>
            <v-row class="mt-10">
              <!--цвет меняется от количества очков (начиная с 60)-->
              <v-btn @click="increasing" class="btn" :style="`color: #${parseInt(coins, 16)}`" fab> 
                <v-img src="/img/dumpling.png" height="200" contain alt="Пельмень"/>
              </v-btn>
            </v-row>
          </v-col>

          <v-col cols="1"> <!--правая сторона (кнопки)-->
            <v-row>
              <v-btn to="/top"  height="100" width="100" color="orange">
                <v-icon large color="white">mdi-star</v-icon>
              </v-btn>
            </v-row>
            <v-row>
              <v-btn to="/send" class="my-10" height="100" width="100" color="primary">
                <v-icon large>mdi-send</v-icon>
              </v-btn>
            </v-row>
              <v-row>
              <v-btn to="/boost" height="100" width="100" color="success">
                <v-icon large>mdi-rocket</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        
        
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      coins: 0,
      coinsPerClick: 1,
    }
  },
  methods:{
    increasing(){
      this.coins += this.coinsPerClick;
      //if (this.coins % 10 == 0) //чтобы каждые 10 кликов оно сохранялось, а не каждый клик
      this.$store.dispatch('ChangeCoins', this.coins);
    },
    save() {

    }
  },
  mounted(){
    this.$store.dispatch('Restore', this.coins); //восстановливает из localStorage
    this.coins = this.$store.getters.getCoins;
    this.coinsPerClick = this.$store.getters.getOnClick;
  }
}
</script>

<style scoped>
.btn{
  margin: auto;
  height: 300px;
  width: 300px;
}
</style>