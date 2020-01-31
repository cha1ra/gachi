<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    clipped
    permanent
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    items: Array
  },
  data () {
    return {
      drawer: true,
      fixed: false,
      miniVariant: false
    }
  }
}
</script>
