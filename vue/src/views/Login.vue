<template>
  <v-app>
    <v-container>
      <v-row class="justify-center">
        <v-col>
          <v-card tile elevation="5" class="mx-auto my-8" max-width="400">
            <v-parallax src="https://img.freepik.com/free-vector/digital-white-background-with-binary-code-numbers_1017-25335.jpg?size=626&ext=jpg&ga=GA1.2.373053261.1610236800">
            <v-card-title>
              <h3 class="color">Login Admin</h3>
            </v-card-title>
            <v-form ref="form">
              <v-alert color="error" type="error" :value="error.username">
                Username tidak sesuai!
              </v-alert>
              <v-alert color="error" type="error" :value="error.password">
                Password tidak sesuai!
              </v-alert>
              <v-alert color="error" type="error" :value="error.userpass">
                Username dan password tidak sesuai!
              </v-alert>
              <v-card-text>
                <v-text-field
                outlined
                  color="blue"
                  label="Username"
                  v-model="admin.username"
                />
                <v-text-field
                  outlined
                  color="blue"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="handleClick"
                  v-model="admin.password"
                />
                <v-btn color="blue lighten-1" dark @click="handleSubmit">
                  Masuk
                </v-btn>
              </v-card-text>
            </v-form>
            </v-parallax>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    admin: {
      username: "",
      password: "",
    },
    showPassword: false,
    error: {
      username: false,
      password: false,
      userpass: false,
    },
  }),
  methods: {
    handleClick() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      const adminUsername = this.$store.state.admin.username;
      const adminPassword = this.$store.state.admin.password;
      if (
        this.admin.username !== adminUsername &&
        this.admin.password !== adminPassword
      ) {
        this.error.userpass = true;
      } else if (this.admin.username !== adminUsername) {
        this.error.username = true;
      } else if (this.admin.password !== adminPassword) {
        this.error.password = true;
      } else {
        this.$store.commit("setAuthentication", true);
        this.$store.dispatch("login", this.admin);
        alert("Login success!");
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style>
.color{
  text-align: center;
  color: black;
}
</style>