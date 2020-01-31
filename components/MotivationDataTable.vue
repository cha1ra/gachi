<template>
  <v-row>
    <v-col>
      <v-dialog v-model="dialog" max-width="600">
        <v-card height="600">
          <v-card-title>
            メンバーステータス詳細
          </v-card-title>
          <v-card-text class="mt-8 mb-8">
            <v-row>
              <v-col cols="4">
                <v-avatar size="40" class="mr-2">
                  <v-img
                    :src="require(`~/static/坂尻 愛明.jpg`)"
                  />
                </v-avatar>
                <span class="title">
                  坂尻愛明
                </span>
              </v-col>
              <v-col>
                TimeMetis Score
                <v-progress-linear
                  value="23"
                  size="60"
                  height="25"
                  rotate="270"
                  color="error"
                  class="td-margin"
                >
                  <strong>23</strong>
                </v-progress-linear>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="所属"
                  placeholder="法人営業部第一"
                />
              </v-col>
              <v-col>
                <v-text-field
                  label="上司"
                  placeholder="深野 嗣"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="title">
                  診断結果詳細
                </p>
                <p>
                  集中力の著しい低下が観測されています。業務時間、特に午後1時から午後3時の時間帯に集中力の低下がみられます。<br>
                  上司との1on1ミーティングを設定・部下のコンディション把握機会を作ることをお勧めします。
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="title">
                  実施推奨アクション
                </p>
                <v-checkbox
                  v-model="checkbox['test']"
                  label="1on1 ミーティングの設定"
                />
                <v-btn outlined small>
                  ToDo リストに追加
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td v-for="(key, val) in item" :key="val">
              <div v-if="val=='concentration'" class="mt-2 mb-2">
                <v-progress-linear
                  :value="key"
                  :color="key<40?'error':'primary'"
                  size="60"
                  height="15"
                  rotate="270"
                  class="td-margin"
                >
                  <strong>{{ key }}</strong>
                </v-progress-linear>
              </div>
              <div v-else-if="val=='name'">
                <p class="td-margin mt-2 mb-2">
                  <v-avatar size="40" class="mr-2">
                    <v-img
                      v-if="$store.state.modal.desserts.length >= 2"
                      :src="require(`~/static/${key}.jpg`)"
                      @click="dialog=true"
                    />
                  </v-avatar>
                  {{ key }}
                </p>
              </div>
              <div v-else-if="val=='action'">
                <v-checkbox
                  v-model="checkbox[key]"
                  :label="key"
                />
              </div>
              <div v-else>
                <p class="td-margin mt-2 mb-2">
                  {{ key }}
                </p>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'メンバ名',
          align: 'left',
          sortable: false,
          value: 'name',
          width: 180
        },
        { text: '所属', value: 'department', width: 120 },
        { text: '相関度', value: 'concentration', width: 180 },
        { text: '主要Tips', value: 'action', width: 4000 }
      ],
      checkbox: {},
      dialog: false
    }
  },
  computed: {
    desserts () {
      return this.$store.state.modal.desserts
    }
  }
}
</script>
