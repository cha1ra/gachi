<template>
  <v-card height="250">
    <v-card-title>
      グループ別
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <p class="subtitle-2">
            全体
          </p>
          <v-progress-circular
            :value="$store.state.modal.circleValue"
            :size="size"
            width="15"
            rotate="270"
            color="primary"
            class="td-margin"
          >
            <span class="title">{{ $store.state.modal.circleValue }}</span>
          </v-progress-circular>
        </v-col>
        <v-col>
          <p class="subtitle-2">
            フォローユーザ
          </p>
          <v-progress-circular
            :value="$store.state.modal.circleValue * 0.8"
            :size="size"
            width="15"
            rotate="270"
            color="primary"
            class="td-margin"
          >
            <span class="title">{{ Math.floor($store.state.modal.circleValue * 0.8) }}</span>
          </v-progress-circular>
        </v-col>
        <v-col>
          <p class="subtitle-2">
            マイスコア
          </p>
          <v-progress-circular
            :value="$store.state.modal.circleValue * 1.8"
            :size="size"
            width="15"
            rotate="270"
            color="primary"
            class="td-margin"
          >
            <span class="title">{{ Math.floor($store.state.modal.circleValue * 1.8) }}</span>
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      size: 100
    }
  }
}
</script>
