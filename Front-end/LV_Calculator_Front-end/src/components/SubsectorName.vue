<template>
    <div class="subsector-name" >
        <div v-for="(subsector, index) in subsectors" :key="index" :content="subsector">
            {{ subsector }}
        </div>
    </div>
</template>

<script>
export default {
    name: "SubsectorName",
    inject: ['subsectorsData'],
    data () {
        return {
            subsector: this.subsectorsData
        }
    }
}
</script>