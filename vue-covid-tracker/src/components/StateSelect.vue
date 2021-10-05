<template>
    <select @change="onChange()" v-model="selected" class="form-select mt-10 block w-full border p-3 rounded">
        <option value="0">Select State</option>
        <option v-for="state in states" :value="state.locationId">
            {{ state.state }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'StateSelect',
    props: ['states'],
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        onChange() {
            if(this.selected != 0) {
                const state = this.states.find((item) => item.locationId === this.selected)
                this.$emit('get-state', state)
                console.log('selected: ' + state.locationId)
            }
            else {
                this.$emit('get-state', 0)
            }
        }
    }
}

</script>