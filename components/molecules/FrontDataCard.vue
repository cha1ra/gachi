<template>
  <v-card :to="link" nuxt>
    <v-row align="center" justify="center">
      <iframe
        width="200"
        height="100"
        src="https://www.youtube.com/embed/2uZYKcKHgU0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </v-row>

    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div>
        <v-avatar color="primary" size="20">
          <v-icon dark>
            mdi-account
          </v-icon>
        </v-avatar>
        Aira Sakajiri
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text>
        <v-icon>
          mdi-heart
        </v-icon>
        14
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    link: String,
    rating: Number
  },
  data () {
    return {
    }
  }
}
</script>
