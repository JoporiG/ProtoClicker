<template>
    <v-app>
        <v-content>
            <v-container>
                <v-row align="center" class="mb-10">
                    <v-btn outlined to="/clicker" color="primary">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <h1 class="ml-5">Топ пользователей</h1>
                </v-row>
                <v-card v-for="user in users" :key="user.id"
                    class="mx-auto mt-5"
                    max-width="500"
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="mb-4">{{user.login}}</v-list-item-title>
                        <v-list-item-subtitle class="headline mb-1">{{user.ammount}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                    ><v-img :src="user.img"/> </v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </v-container>
        </v-content> 
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            users: [
                {
                    login: 'Main dildo 1', //имя бомжа
                    img: 'https://s.starladder.com/uploads/user_discipline_logo/7/2/8/c/thumb_270_476e6c222dcd3914786731c9e46305e5.jpg', //ава бомжа(мб уберем)
                    //авы можно дать несколько на выбор
                    ammount: '1 000 000', //количество денег (пока хз каких (мб пельменей)) у бомжа
                    id: 0, //айди бомжa
                },
                {
                    login: 'Main dildo 2', //имя бомжа
                    img: 'https://s.starladder.com/uploads/user_discipline_logo/7/2/8/c/thumb_270_476e6c222dcd3914786731c9e46305e5.jpg', //ава бомжа(мб уберем)
                    //авы можно дать несколько на выбор
                    ammount: '0', //количество денег (пока хз каких (мб пельменей)) у бомжа
                    id: 1, //айди бомжа
                }
            ],
        }
    },
    mounted(){
        //тут загружаем бомжей и пихаем в дату
    }
}
</script>