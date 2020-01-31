<template>
  <v-row>
    <v-col>
      <draggable
        v-model="list"
        :group="group"
      >
        <v-card
          v-for="element in list"
          :key="element.id"
          class="mb-2"
          color="deep-orange lighten-4"
        >
          <v-card-title class="subtitle-1">
            {{ element.name }}
          </v-card-title>
        </v-card>
      </draggable>
    </v-col>
  </v-row>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  props: {
    list: Array,
    group: String
  },
  data () {
    return {
    }
  }

}
</script>
