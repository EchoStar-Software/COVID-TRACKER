<template>
    <main v-if="!loading">
        <DataTitle :text="title" :dataDate="dataDate" />
        <StateDataBoxes :stats="stats" />
        <StateSelect @get-state="getStateData" :states="states"/>
        <button @click="clearStateData"
            v-if="stats.state"
            class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-500">
            Clear State
        </button>
    </main>

     <main class="flex flex-col align-center justify-center text-center" v-else>
        <div class="text-gray-500 text-3xl mt-10 mb-6">
        Fetching Data
        </div>
        <img :src="loadingImage" class="w-24 m-auto" alt="" />
    </main>
</template>

<script>
import DataTitle from '@/components/DataTitle'
import StateDataBoxes from '@/components/StateDataBoxes'
import StateSelect from '@/components/StateSelect'

export default {
  name: 'USA',
  components: {
    DataTitle,
    StateDataBoxes,
    StateSelect
  },
  data(){
    return {
      loading: true,
      title: 'National',
      dataDate: '',
      stats: {},
      states: [],
      loadingImage: require('../assets/loading.gif')
    }
  },
  methods: {
    async fetchStateData() {
        const res = await fetch('https://api.covidactnow.org/v2/states.json?apiKey=8d41e6846aa64a2d98f4138f779035d7')
        const data = await res.json()
        return data
    },
    async fetchNationalData() {
        const key = '8d41e6846aa64a2d98f4138f779035d7'
        const res = await fetch('https://api.covidactnow.org/v2/country/US.json?apiKey=8d41e6846aa64a2d98f4138f779035d7')
        const data = await res.json()
        return data
    },
    getStateData(state) {
      if(state != 0) {
        this.stats = state
        this.title = state.state
      } else
      {
        this.clearStateData()
      }
    },
    async clearStateData(){
        this.loading = true
        const nationalData = await this.fetchNationalData()
        this.title = "National"
        this.stats = nationalData
        this.loading = false
    }
  },
  async created() {
    const nationalData = await this.fetchNationalData()
    const stateData = await this.fetchStateData()
    
    console.log(nationalData)
    console.log(stateData)

    this.dataDate = nationalData.lastUpdateDate
    this.stats = nationalData
    this.states = stateData
    this.loading = false
  },
}
</script>