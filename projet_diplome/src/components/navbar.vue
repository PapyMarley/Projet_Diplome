<script>
const myMenu = [
  {
    name: 'Getting Started',
    icon: { text: 'home', class: 'material-icons-outlined' },
    children: [
      {
        name: 'level 1.1',
        href: '/homepage',
        icon: { text: 'home', class: 'material-icons-outlined' }
      }
    ]
  }
]
</script>

<template>
    <VueAwesomeSideBar
      v-model:miniMenu="miniMenu"
      v-model:collapsed="collapsed"
      :menu="myMenu"
      vueRouterEnabel
    ></VueAwesomeSideBar>
  </template>

<style>

</style>
