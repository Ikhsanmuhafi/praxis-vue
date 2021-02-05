<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
Sistem Informasi academy Sekolah
      </v-toolbar-title>
      <ul>
        <a href="/jadwal" class="btn">Jadwal</a>
        <a href="/kelas" class="btn">Kelas</a>
      </ul>
      <v-spacer></v-spacer>
      <v-btn rounded text color="red" @click="handleLogout">Logout</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => {
    return {};
  },
  beforeCreated() {
    alert("hallo");
  },
  methods: {
    handleLogout(){
        var yakin = confirm("Apakah kamu yakin ingin keluar");
        if (yakin) {
            window.location =('/');
        } else {
            document.write=('http://localhost:8080/murid');
        }
       },

  }
};
</script>
<style scoped>
.v-btn-title {
  /* font-display: Krona One; */
  font-size: 24px;
  color: rgb(13, 13, 14);
}
ul {
  margin-right: 30px;
}
a {
  /* font-family: Poppins; */
  color: black !important;
  font-size: 20px;
  margin: 0 10px 0 10px;
  text-decoration: none;
}
.v-btn-title {
  margin-left: 40px !important;
}
.active,
.btn:hover {
  font-weight: bolder;
  color: rgb(150, 150, 150);
  border-bottom-width: 2px;
}
nav li:hover,
nav li:active {
  background-color: indianred;
  cursor: pointer;
}
</style>