<template>
  <div>
    <v-container>
      <h1>Data Pendaftaran Mobile</h1>
      <v-list-item v-for="user in filterUsers" :key="user.name">
        <v-list-item-content>
          <v-list-item-title>Nama : {{user.name}}</v-list-item-title>
          <v-list-item-title>Alamat : {{user.address}}</v-list-item-title>
          <v-list-item-title>Program : {{user.program}}</v-list-item-title>
          <v-list-item-title>Status : {{user.status}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
     filterUsers() {
       return this.$store.state.users.filter((user) => {
         if (user.isApproved === false) {
            user.status = 'belum diterima'
         } else{
           user.status = 'diterima'
         }
         return user.program === 'Mobile'
       })
     }
   }
}
</script>