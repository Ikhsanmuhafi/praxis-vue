<template>
  <!-- <app> -->
    <div class="Home">
      <Navbarr/>
  <v-container>
    <v-row justify="center">
      <v-layout style="margin-top: 50px">
        <v-flex>
          <v-card max-width="400" :elevation="6" class="mx-auto my-12">
            <v-col md="12">
              <v-card-title class="justify-center"
                ><p>Sekolahanmu</p></v-card-title
              >
              <v-row justify="center">
                <v-col md="12">
                  <v-text-field
                    label="NIS/NIK"
                    single-line
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    single-line
                    outlined
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-col>
                <v-btn
                  rounded
                  block
                  elevation="2"
                  color="#54a9f6"
                  to="/murid"
                  class="ma-2 white--text"
                >
                  login
                </v-btn>
                <h4 id="lupa-password">
                  <a href="/about" style="text-decoration: none"
                    >Lupa Password?</a>
                </h4>
              </v-col>
            </v-col>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
  <!-- </app> -->
  </div>
</template>


<script>

import Navbarr from '../components/Navbarr.vue';
export default {
  components: { Navbarr },
  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        // min: v => v.length >= 8 || 'Min 8 characters',
        // emailMatch: () => (`The email and password you entered don't match`),
      },
    };
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-margin-bottom {
  margin-bottom: 20px;
}
.ma-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#lupa-password {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
.hem {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
</style>                            