<template>
  <v-row>
    <v-col>
      <h2 class="subtitle-1 font-weight-bold">
        ストックしたタスク
      </h2>
      <v-row>
        <v-col>
          <h2 class="title font-weight-bold">
            興味がある
          </h2>
          <draggable-task-cards-column
            :list="toDoList"
            :group="group"
          />
        </v-col>
        <v-col>
          <h2 class="title font-weight-bold">
            実践中
          </h2>
          <draggable-task-cards-column
            :list="doingList"
            :group="group"
          />
        </v-col>
        <v-col>
          <h2 class="title font-weight-bold">
            結果
          </h2>
          <draggable-task-cards-column
            :list="goodList"
            :group="group"
          />
          <draggable-task-cards-column
            :list="badList"
            :group="group"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import DraggableTaskCardsColumn from '../components/organisms/DraggableTaskCardsColumn'
export default {
  components: {
    DraggableTaskCardsColumn
  },
  data () {
    return {
      enabled: true,
      toDoList: [
        { name: '満足度の高いテキストエディタ', id: 0 },
        { name: 'switch文を書く時はブロックで記述しよう', id: 1 },
        { name: '5人以上のプロジェクトならTypeScript', id: 1 }
      ],
      doingList: [
        { name: 'pythonでAPIリクエストを送るならrequestモジュール', id: 0 }
      ],
      goodList: [
      ],
      badList: [
      ],
      group: 'task',
      dragging: false
    }
  }

}
</script>
