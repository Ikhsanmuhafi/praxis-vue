<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h2>Ini halaman Admin</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>
                <h3>Data Pendaftaran</h3>
                <h4>Data Pendaftran program</h4>
            <v-list v-for="user in filterUsers" :key="user.name">
                <v-list-item-content>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Name : {{user.name}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Alamat : {{user.address}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Terima</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(user)">Tolak</v-btn>
                <v-btn color="error" @click="delusr(user.name)">hapus</v-btn>
            </v-list>
            <v-list v-for="user in ilterUsers" :key="user.name">
                <v-list-item-content>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Nama : {{user.name}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Alamat : {{user.address}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Terima</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(user)">Tolak</v-btn>
                <v-btn color="error" @click="delusr(user.name)">hapus</v-btn>
            </v-list>
            <v-list v-for="user in lterUsers" :key="user.name">
                <v-list-item-content>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Name : {{user.name}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Alamat : {{user.address}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Terima</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(user)">Tolak</v-btn>
                <v-btn color="error" @click="delusr(user.name)">hapus</v-btn>
            </v-list>
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-btn color="error" dark @click="handleLogout">
              <v-icon>mdi-logout</v-icon>
              logout
            </v-btn>
        </v-card>
    </v-container>
</template>

<script>
export default {
    computed: {
    //  usersFrontend(){
    //   return this.$store.state.users.filter((user) => {
    //     return user.program === 'frontend'
    //   })
    // },
    filterUsers() {
       return this.$store.state.users.filter((user) => {
         if (user.isApproved === false) {
            user.status = 'Tolak'
         } else{
           user.status = 'Terima'
         }
         return user.program === 'Frontend'
       })
     },
    ilterUsers() {
       return this.$store.state.users.filter((user) => {
         if (user.isApproved === false) {
            user.status = 'Tolak'
         } else{
           user.status = 'Terima'
         }
         return user.program === 'Backend'
       })
     },
    lterUsers() {
       return this.$store.state.users.filter((user) => {
         if (user.isApproved === false) {
            user.status = 'Tolak'
         } else{
           user.status = 'Terima'
         }
         return user.program === 'Mobile'
       })
     }
   },
   methods: {
       handleApprove(user) {
          user.isApproved = !user.isApproved
          console.log(user)
       },
        handleLogout(){
        var yakin = confirm("Apakah kamu yakin ingin keluar");

        if (yakin) {
            window.location =('/');
        } else {
            document.write=('http://localhost:8080/#/admin');
        }
       },

       delusr(userName){
         this.$store.dispatch('deleteuser', userName)
       },

   }
}
</script>
