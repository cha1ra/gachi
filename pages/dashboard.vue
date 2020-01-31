<template>
  <v-row>
    <v-col>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card height="200">
          <v-card-title>
            データ生成中
          </v-card-title>
          <v-card-text class="mt-8 mb-8">
            <v-row justify="center">
              <v-col>
                <v-progress-linear
                  v-model="dialogMessagePercentage"
                  height="25"
                  reactive
                  buffer-value="0"
                  stream
                >
                  <strong>{{ dialogMessageNum }}/{{ dialogMessage.length }}</strong>
                </v-progress-linear>
                {{ dialogMessage[dialogMessageNum] }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-row>
        <v-col>
          <chart-area />
        </v-col>
        <v-col>
          <progress-circle />
        </v-col>
      </v-row>
      <motivation-data-table />
    </v-col>
  </v-row>
</template>
<script>
import MotivationDataTable from '../components/MotivationDataTable'
import ChartArea from '../components/ChartArea'
import ProgressCircle from '../components/ProgressCircle'
export default {
  components: {
    MotivationDataTable,
    ChartArea,
    ProgressCircle
  },
  data () {
    return {
      test: '',
      dialogFlag: false,
      dialogMessage: [
        'メンバの基本情報を読み込んでいます...',
        'メンバの活動状況を集計しています...',
        'GaChi Scoreを算出しています...',
        '各メンバに有効なアクションを算定中です...',
        '出力中です...'
      ],
      dialogMessageNum: 0
    }
  },
  computed: {
    dialog: {
      get () {
        return this.dialogFlag
      },
      set (flag) {
        this.dialogFlag = flag
        if (flag) {
          this.displayProcess()
        }
      }
    },
    dialogMessagePercentage () {
      return this.dialogMessageNum * 20
    }
  },
  mounted () {
    this.$store.dispatch(`modal/changeModalStatus`, true)
    this.dialog = this.$store.state.modal.modal
  },
  methods: {
    displayProcess () {
      if (this.dialogMessageNum < this.dialogMessage.length + 1) {
        setTimeout(this.addDialogMessageNum, (Math.random() * 400) + 300)
      } else {
        this.dialog = false
        this.$store.dispatch(`modal/changeModalStatus`, false)
        setTimeout(() => { this.dialogMessageNum = 0 }, (Math.random() * 700) + 500)
        // this.dialogMessageNum = 0
      }
    },
    addDialogMessageNum () {
      this.dialogMessageNum++
      this.displayProcess()
    }
  }
}
</script>
