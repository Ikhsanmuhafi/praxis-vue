<template>
<div class="ProfilMurid">
  <Navbar/>
  <v-card>
    <v-card-title>
      <v-icon> mdi-account </v-icon>
      Profil
    </v-card-title>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">No Identitas</th>
            <th class="text-left">Nama Depan</th>
            <th class="text-left">Nama Belakang</th>
            <th class="text-left">Alamat</th>
            <th class="text-left">No Hendpone</th>
            <th class="text-left">Pendidikan Terakhir</th>
            <th class="text-left">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.noidentitas }}</td>
            <td>{{ item.namadepan }}</td>
            <td>{{ item.namabelakang }}</td>
            <td>{{ item.alamat }}</td>
            <td>{{ item.notelepon }}</td>
            <td>{{ item.pendidikan }}</td>
            <td>{{ item.nilai }}</td>
          </tr>
        <v-divider></v-divider>
        </tbody>
      </template>
    </v-simple-table>

    <v-card-actions> </v-card-actions>
  </v-card>
  <!-- <v-card max-width="375" class="mx-auto my-12">
    <v-card-text>
      <h1>Profil</h1></v-card-text
    >
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo"> mdi-id </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo"> mdi-email </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo"> mdi-map-marker </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card> -->
</div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
export default {
  components: { Navbar },
  data() {
    return {
      desserts: [
        {
          id: 1,
          noidentitas: 98890918090,
          namadepan: "Iksan",
          namabelakang: "Muhafi",
          alamat: "Jogjakarta",
          notelepon: '+6289694322606',
          pendidikan: "SMA",
          nilai: 72,
        },
      ],
    };
  },
};
</script>

<style>
</style>