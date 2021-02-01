<template>
  <v-container>
    <v-row justify="center">
      <v-layout style="margin-top: 100px">
        <v-flex sm12 md4>
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-6">
            <v-col md="12">
              <v-file-input
                label="File input"
                filled
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>