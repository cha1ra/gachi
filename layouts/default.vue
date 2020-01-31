<template>
  <v-app dark>
    <navigation-drawer
      :items="items"
    />
    <v-app-bar
      app
      clipped-left
      color="deep-orange"
    >
      <v-toolbar-title>
        <v-img :src="require('~/static/icon.png')" />
      </v-toolbar-title>
      <v-spacer />
      <v-btn outlined dark>
        <v-icon>mdi-login</v-icon>ログイン
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '../components/organisms/NavigationDrawer'
export default {
  components: {
    NavigationDrawer
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'ダッシュボード',
          to: '/'
        },
        {
          icon: 'mdi-file-document-box-multiple',
          title: '実践管理',
          to: '/card'
        },
        {
          icon: 'mdi-file-document-box-multiple',
          title: 'ストック',
          to: '/stock'
        },
        {
          icon: 'mdi-chart-bar',
          title: '相関性',
          to: '/data'
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
