<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card width="550" class="mx-auto">
              <v-card-title class="py-5">
                <h1>Регистрация</h1>
              </v-card-title>
              <v-card-text>
                <v-form class="px-3 py-2">
                  <v-text-field 
                    label="Логин" 
                    prepend-icon="mdi-account-circle"
                    type="text"
                    v-model="login"
                  />
                  <v-text-field 
                    :type="showPassword ? 'text' : 'password'" 
                    label="Пароль"
                    v-model="password1"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-text-field 
                    :type="showPassword ? 'text' : 'password'" 
                    label="Повторите пароль"
                    v-model="password2"
                    prepend-icon="mdi-lock"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="px-3 py-3">
                <v-spacer></v-spacer>
                <v-btn color="success" @click="signup()">Создать аккаунт</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data(){
      return{
          login: '',
          password1: '',
          password2: '',
          showPassword: false,
      }
    },
    methods: {
        signup() {
            //надо сделать регистрацию
            if (true) {
                alert("Вы успешно создали аккуант!")
                this.$router.push('/login');
            }
        }
    }
}
</script>

<style>

</style>template