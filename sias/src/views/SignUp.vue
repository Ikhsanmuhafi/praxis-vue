<template>
  <!-- <app> -->
  <v-container>
    <v-row justify="center">
      <v-layout style="margin-top: 100px">
        <v-flex>
          <v-card max-width="400" :elevation="6" class="mx-auto my-12">
            <v-col md="12">
              <v-card-title class="justify-center"
                ><p>Sistem Academy Sekolah</p></v-card-title
              >
              <v-row justify="center">
                <v-col md="12">
                  <v-text-field
                    label="Nama"
                    type="text"
                    single-line
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Kelas"
                    type="text"
                    single-line
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    type="email"
                    single-line
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Masukan Kata Sandi"
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
                block
                  rounded
                  elevation="2"
                  color="#54a9f6"
                  class="ma-2 white--text"
                >
                  Sign Up
                </v-btn>
                <!-- <p class="hem">ATAU</p>
                <h3 id="lupa-password">
                  <a href="/google" style="text-decoration: none"
                    >Masuk Dengan Google</a>
                </h3> -->
              </v-col>
            </v-col>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
  <!-- </app> -->
</template>


<script>
export default {
  data() {
    return {
      show1: true,
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