<script setup>
    import SectorLogo from "./SectorLogo.vue";
    import SectorName from "./SectorName.vue";
</script>

<template>
    <div class="levers-sector-container" v-if="content">
        <div class="levers-sector">
            <div class="card">
                <SectorName :sectorName="content.name"></SectorName>
                <SectorLogo :sectorLogo="content.img"></SectorLogo>
            </div>
            <div class="lever-steps-container">
                <div class="lever-step"></div>
                <div class="lever-step"></div>
                <div class="lever-step"></div>
                <div class="lever-step"></div>
            </div>
        </div>
        <div class="levers-subsector-container ">
            <div class="levers-subsector">
                <div class="lever-step"></div>
                <div class="lever-step"></div>
                <div class="lever-step"></div>
                <div class="lever-step"></div>
            </div>

        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'InputsLeversSector',
        props: {
            content: {
                Type: Object,
                default: null
            }
        }
    }
</script>