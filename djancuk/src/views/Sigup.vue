<template>
  <v-app id="inspire">
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-main class="grey">
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
    
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: '/sigup',
        },
        {
          text: 'Link 2',
          disabled: false,
          href: 'osas',
        },
      ],
   }),
  }
</script>