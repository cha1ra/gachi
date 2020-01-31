<template>
  <div>
    <section class="mb-8">
      <h2 class="title font-weight-bold">
        オススメ
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
    </section>
    <section>
      <h2 class="title font-weight-bold">
        新着
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
    </section>
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
