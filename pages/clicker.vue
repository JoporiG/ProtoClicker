<template>
  <div>
    <v-list>
      <v-list-item>
        <v-card-text class="center">
          {{coins}}
          <v-icon>
            mdi-currency-usd-circle-outline
          </v-icon>
        </v-card-text>
      </v-list-item>
      <v-list-item>
        <v-container class="center" style="height: 500px">
              <v-btn @click="increasing" class="but" fab large>
                  <v-icon dark justify-center>.!.</v-icon>
              </v-btn>
        </v-container>
      </v-list-item>
      <v-list-item class="center">
          <v-btn href="/top" style="width: 150px;" class="ma-3">
              TOP Players
          </v-btn>
          <v-btn href="/boost" style="width: 150px; margin-left: 10px; margin-right: 10px" class="ma-auto">
              Boost
          </v-btn>
          <v-btn style="width: 150px;" class="ma-3">
              Что-то еще
          </v-btn>
      </v-list-item>
    </v-list>
  </div>
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
      this.coins++;
    }
  },
  mounted(){
    this.coins = 0;
    //здесь надо коины искать. либо с сервера брать, либо в вуех класть.
  }
}
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.but{
  margin: auto;
  height: 300px;
  width: 300px;
}
</style>