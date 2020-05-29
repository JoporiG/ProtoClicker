<template>
  <v-app>
    <v-content>
      <v-container fluid>
          <v-card width="550" class="mx-auto my-10">
            <v-card-title class="py-6">
              <h1>Отправить</h1>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3 py-3">
                <v-text-field 
                  label="Nickname" 
                  prepend-icon="mdi-account-circle"
                  type="text"
                  v-model="nickname"
                />
                <v-text-field 
                  label="Ammount"
                  v-model="ammount"
                  prepend-icon="mdi-currency-usd-circle-outline"
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="px-3 py-3">
              <v-spacer/>
              <v-btn color="info" @click="Send()">Отправить</v-btn>
            </v-card-actions>
          </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data(){
      return{
          nickname: '',
          ammount: '',
      }
    },
    methods:{
        Send(){ 
          //для читов убрал
            // if(this.ammount < 0)
            //     return alert("Число коинов не может быть меньше 0");
            if(this.$store.getters.getCoins >= this.ammount){
                //тут челу по нику дают коины если не нашли, то return alert("Net chela")
                this.$store.dispatch('ChangeCoins', this.$store.getters.getCoins - parseInt(this.ammount));
            }
            else
                alert("Недостаточно коинов")
        },
    }
}
</script>