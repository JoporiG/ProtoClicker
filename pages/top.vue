<template>
    <div>
        <v-btn tile outlined href="/clicker">
            <v-icon>
                mdi-arrow-left-thick
            </v-icon>
        </v-btn>
        <v-list v-for="user in users" :key="user.id">
            <!-- <v-card style="margin-bottom: 10px"   max-width="700" height="50">
                <v-img style="margin-left: 10px;" width="40" :src="user.img"/>
            </v-card> -->
            <v-card
                class="mx-auto"
                max-width="344"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">{{user.login}}</div>
                    <v-list-item-title class="headline mb-1">{{user.ammount}}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                ><v-img :src="user.img"/> </v-list-item-avatar>
                </v-list-item>
            </v-card>
        </v-list>
    </div>
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