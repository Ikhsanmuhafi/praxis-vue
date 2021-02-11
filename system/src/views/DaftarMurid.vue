<template>
<v-app>
<div class="DaftarMurid">
    <Navbar/>
    <v-container>
    <v-card max-width="700" :elevation="6" class="mx-auto my-12">
        <v-col md="12">
            <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No Absen</th>
                  <th class="text-left">Nama</th>
                </tr>
              </thead>
            </template>
          </v-simple-table>
        </v-col>
    </v-card>
</v-container>
</div>
</v-app>

</template>

<script>
import Navbar from "../components/Navbar"
// import axios from "axios"
export default {
    components:{
        Navbar
    }
}
</script>

<style>

</style>