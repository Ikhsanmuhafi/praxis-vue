<template>
  <div>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
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

<style>

</style>