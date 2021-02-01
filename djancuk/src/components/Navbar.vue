<template>
  <div>
    <v-app-bar color="blue">
      <v-title><h2>Masih kosong</h2></v-title>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-spacer></v-spacer>
        <v-btn
        elevation="24"
          color="white"
          text
          v-bind="attrs"
          v-on="on"
          icon
        > <v-icon>mdi-account</v-icon> 
        </v-btn>
      </template>
     <v-row justify="center">
    <v-col
      cols="12"
      sm="8"
    >
      <v-card>
        <v-card-title class="blue">
          <span class="headline white--text">ikhsan Muhafi</span>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>08111494035</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>08111494035</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Giblaty@gmail.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Ngeplak, Sleman, Jogjakarta</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-img
          src="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104320622_713403646072868_3980691987857493283_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=TZ0TMhZm42UAX9XCNQZ&tp=1&oh=55b886e07e65f2e35da7579446b550f5&oe=603FE6FD"
          height="400px"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
    </v-dialog>
  </v-row>
      <!-- <v-btn link to="/" class="ml-2">home</v-btn> -->
      <!-- <v-spacer></v-spacer> -->
            <!-- <v-btn link to="/login">login</v-btn> -->

            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/login">login</router-link>
            </li> -->

    </v-app-bar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialog: false
    }
  }
};
</script>

<style>
</style>