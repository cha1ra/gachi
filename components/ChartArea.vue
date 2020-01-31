<template>
  <v-card height="250">
    <v-card-title>
      Tips投稿数 平均値推移
    </v-card-title>
    <v-card-text>
      <v-sparkline
        :value="valueInner"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
        show-labels
      />
    </v-card-text>
  </v-card>
</template>
<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
  ['light-blue']
]

export default {
  data: () => ({
    width: 1,
    radius: 2,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[1],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    valueInner: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }),
  computed: {
    value: {
      get () {
        return this.$store.state.modal.value
      },
      set (val) {
        this.valueInner = this.$store.state.modal.value
      }
    }
  },
  watch: {
    value () {
      this.valueInner = this.$store.state.modal.value
    }
  }
}
</script>
