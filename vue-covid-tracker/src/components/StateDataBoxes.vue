<template>

<!-- this is the base div for the boxes output -->
<div class="grid md:grid-cols-2 gap-4">
    <!-- Box 1 -->
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 class="text-3xl text-blue-900 font-bold mb-3">
            Cases
        </h3>

        <div class="text-2xl mb-4">
            <span class="font-bold">New:</span>
            {{numberWithCommas(stats.actuals.newCases)}}
        </div>
        <div class="text-2xl mb-4">
            <span class="font-bold">Total:</span>
            {{numberWithCommas(stats.actuals.cases)}}
        </div>
    </div>

    <!-- Box 2 --> 
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 class="text-3xl text-blue-900 font-bold mb-3">
            Deaths
        </h3>

        <div class="text-2xl mb-4">
            <span class="font-bold">New:</span>
            {{numberWithCommas(stats.actuals.newDeaths)}}
        </div>
        <div class="text-2xl mb-4">
            <span class="font-bold">Total:</span>
            {{numberWithCommas(stats.actuals.deaths)}}
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name: 'StateDataBoxes',
        props: ['stats'],
        methods: {
            numberWithCommas(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
        }
    }
</script>
