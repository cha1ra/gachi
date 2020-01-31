<template>
  <v-app dark>
    <navigation-drawer
      :items="items"
    />
    <v-app-bar
      app
      clipped-left
      color="white"
      elevation="2"
    >
      <v-toolbar-title class="mr-4">
        <v-img :src="require('~/static/logo.svg')" width="180" />
      </v-toolbar-title>
      <v-btn color="mblack" text>
        カテゴリ一覧
      </v-btn>
      <v-btn color="mblack" text class="mr-4">
        ランキング
      </v-btn>
      <v-spacer />
      <v-btn
        color="mblack"
        outlined
        class="mr-2"
      >
        新規会員登録
      </v-btn>
      <v-btn
        color="mblack"
        outlined
      >
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
          title: 'Tips一覧',
          to: '/'
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
        },
        {
          icon: 'mdi-account',
          title: 'マイページ',
          to: '/dashboard'
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
