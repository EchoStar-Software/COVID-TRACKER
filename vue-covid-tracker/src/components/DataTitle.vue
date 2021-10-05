<template>
    <div class="text-center">
        <div v-if="text == 'United States of America'">
            <h2  class="text-3xl font-bold text-blue-500"><a href="https://echostarsoftware.com/covid-tracker/usa">{{text}}</a></h2>
        </div>
        <div v-else>
            <h2 class="text-3xl font-bold">{{text}}</h2>
        </div>
        <div class="text-2xl mt-4 mb-10">
            updated: {{timestamp}}
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'DataTitle',
        props: ['text', 'dataDate'],
        computed: {
            timestamp: function (){
                return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a')
            }
        }
    }
</script>