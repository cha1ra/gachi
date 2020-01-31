<template>
  <div>
    <template>
      <h2 class="title font-weight-bold">
        あなたの指向性に似ているユーザ
      </h2>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                名前
              </th>
              <th class="text-left">
                スキル
              </th>
              <th class="text-left">
                相関スコア
              </th>
              <th class="text-left">
                あなたが未実施のノウハウ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <td class="pt-1 pb-1">
                <v-avatar>
                  <v-img src="https://mlolbbgsm5o1.i.optimole.com/w:150/h:150/q:auto/rt:fill/g:ce/https://corp.proglearn.com/wp-content/uploads/2019/11/aira.jpg" />
                </v-avatar>
                {{ item.name }}
              </td>
              <td>{{ item.department }}</td>
              <td>
                <v-progress-linear
                  v-model="item.score"
                  :color="item.score<40?'error':'primary'"
                  height="18"
                >
                  <template v-slot="{ value }">
                    <strong>{{ value }}%</strong>
                  </template>
                </v-progress-linear>
              </td>

              <td>
                <div v-for="knowledge in item.knowledges" :key="knowledge">
                  <v-checkbox
                    :label="knowledge"
                    class="pa-0"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div style="text-align: right" class="mb-4">
        もっと見る
      </div>
    </template>
    <template>
      <h2 class="title font-weight-bold">
        あなたと関連性があるTips
      </h2>
      <v-row>
        <v-col
          v-for="cD in cardData"
          :key="cD.id"
          cols="12"
          md="3"
        >
          <front-data-card
            :title="cD.title"
            :link="`/post/${cD.id}`"
          />
        </v-col>
      </v-row>
    </template>
  </div>
</template>
<script>
import FrontDataCard from '../components/molecules/FrontDataCard'

export default {
  components: {
    FrontDataCard
  },
  data () {
    return {
      items: [
        {
          name: 'プログ 太郎',
          department: '営業部第一',
          score: 89,
          img: '',
          knowledges: [
            'プログラム情報を調べるときはまず英語で'
          ]
        },
        {
          name: 'プログ 二郎',
          department: '営業部第一',
          score: 45,
          img: '',
          knowledges: [
            'コードエディタは迷ったらVSCode'
          ]
        },
        {
          name: 'プログ 三郎',
          department: '営業部第一',
          score: 39,
          img: '',
          knowledges: [
            '手が疲れないマウスタイピングの方法'
          ]
        }
      ],
      cardData: [
        {
          id: 1,
          title: 'hogehoge hogehoge',
          rating: 3
        },
        {
          id: 2,
          title: 'hogehoge hogehoge',
          rating: 4
        },
        {
          id: 3,
          title: 'hogehoge hogehoge',
          rating: 5
        },
        {
          id: 4,
          title: 'hogehoge hogehoge',
          rating: 5
        }
      ]
    }
  }
}
</script>
