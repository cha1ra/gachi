<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          お客さんの目を引く！POPの作り方
        </v-card-title>
        <v-row>
          <v-col>
            <v-row align="center" justify="center">
              <iframe
                width="450"
                height="300"
                src="https://www.youtube.com/embed/2uZYKcKHgU0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </v-row>
          </v-col>
          <v-col>
            <v-card outlined class="mb-2">
              <v-card-title class="subtitle-1 font-weight-bold">
                動画のポイント
              </v-card-title>
              <v-card-text>
                <ul>
                  <li>POPの表示は暖色系を使う！</li>
                  <li>店員コメントを添えることで親近感を持たせる！</li>
                </ul>
              </v-card-text>
            </v-card>
            <h3 class="subtitle-1 font-weight-bold">
              コメント
            </h3>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      時間
                    </th>
                    <th class="text-left">
                      コメント
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in comments" :key="item.name">
                    <td>{{ item.time }}</td>
                    <td>{{ item.comment }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
        <v-card-text>
          投稿者
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      comments: [
        {
          time: '00:00:30',
          comment: '早速うちでも実践してみます！'
        },
        {
          time: '00:00:42',
          comment: 'ノリを使うんですね'
        }
      ]
    }
  }
}
</script>
