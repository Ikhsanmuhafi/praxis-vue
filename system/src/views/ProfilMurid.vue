<template>
  <div class="ProfilMurid">
    <Navbar />
    <v-container>
      <v-card max-width="800" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
        <v-toolbar flat>
          <v-toolbar-title
            ><v-icon left>mdi-account</v-icon>Profil Siswa</v-toolbar-title
          >
        </v-toolbar>
        </v-col>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>