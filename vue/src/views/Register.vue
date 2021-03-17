<template>
  <v-app>
    <v-container>
      <v-row class="justify-center">
        <v-col>
          <v-card tile elevation="5" class="mx-auto my-12" max-width="374">
            <v-card-title>
              <h3>Registrasi</h3>
            </v-card-title>
            <v-form ref="form">
              <v-card-text>
                <v-text-field
                  outlined
                  color="blue"
                  label="Nama"
                  v-model="user.name"
                  :rules="nameRules"
                />
                <v-text-field
                  outlined
                  color="blue"
                  label="Alamat"
                  v-model="user.address"
                  :rules="addressRules"
                />
                <v-select
                  outlined
                  :items="programs"
                  color="blue"
                  label="Program"
                  v-model="user.program"
                  :rules="programRules"
                  dense
                ></v-select>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue lighten-1" dark @click="handleSubmit"
                  >Submit</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "",
      address: "",
      program: "",
      isApproved: false,
    },
    programs: ["Frontend", "Backend", "Mobile"],
    nameRules: [(value) => value != "" || "Nama harus diisi"],
    addressRules: [(value) => value != "" || "Alamat harus diisi"],
    programRules: [(value) => value != "" || "Program harus diisi"],
  }),
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("actionUsers", this.user);
        if (this.user.program === "Frontend") {
          this.$router.push({ name: "Frontend" });
        } else if (this.user.program === "Backend") {
          this.$router.push({ name: "Backend" });
        } else {
          this.$router.push({ name: "Mobile" });
        }
        alert("Registrasi telah berhasil!");
      }
    },
  },
};
</script>
<style>
.con {
  text-align: justify;
  text-emphasis-color: black;
}
</style>