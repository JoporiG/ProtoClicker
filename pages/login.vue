<template>
  <v-app>
    <v-content>
      <v-container fluid>
          <v-card width="550" class="mx-auto my-10">
            <v-card-title class="py-6">
              <h1>Вход</h1>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3 py-3">
                <v-text-field 
                  label="Логин" 
                  prepend-icon="mdi-account-circle"
                  type="text"
                  v-model="login"
                />
                <v-text-field 
                  :type="showPassword ? 'text' : 'password'" 
                  label="Пароль"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="px-3 py-3">
              <v-btn color="success" @click="signup()">Создать аккаунт</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="info" @click="signin()">Войти</v-btn>
            </v-card-actions>
          </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    components: {
    },
    data(){
      return{
          login: '',
          password: '',
          showPassword: false,
      }
    },
    methods:{
        signin(){
            //Паша, работай (нахуй иди)
            //тут еще с сервера надо коины получать и в клик (короче все о пользователе)
            if(true){ //Тут условие, что ник и пароль подходят
                this.$router.push('/clicker')
            }
        },
        signup() {
          this.$router.push('/signup')
        }
    }
}
</script>