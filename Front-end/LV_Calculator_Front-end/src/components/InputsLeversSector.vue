<script setup>
    import SectorLogo from "./SectorLogo.vue";
    import SectorName from "./SectorName.vue";
    import LeverStepsSector from "./LeverStepsSector.vue";
    import LeverStepsSubsector from "./LeverStepsSubsector.vue";
</script>

<template>
    <div class="levers-sector-container" v-if="content">
        <div class="levers-sector">
            <div class="card" @click="handleShowHideSubsectors"  :class="{active: isActive = !isActive}">
                <SectorName :sectorName="content.name"></SectorName>
                <SectorLogo :sectorLogo="content.img"></SectorLogo>
            </div>
            <LeverStepsSector></LeverStepsSector>
        </div>
        <div class="levers-subsector-container" v-show="showSubsectors">
            <div class="levers-subsectors" v-if="content.subsectors">
                <div class="subsector-container" v-for="(subsector, index) in content.subsectors" :key="index" :content="subsector">
                    <div class="subsector-name">
                        {{ subsector }}
                    </div>
                    <LeverStepsSubsector></LeverStepsSubsector>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
    export default {
    name: "InputsLeversSector",
    props: {
        content: {
            Type: Object,
            default: null
        }
    },
    components: { 
        SectorName,
        SectorLogo,
        LeverStepsSector,
        LeverStepsSubsector
    },
    data() {
        return {
            showSubsectors: false,
            isActive: false
        }
    },
    methods: {
        handleShowHideSubsectors () {
            this.showSubsectors = !this.showSubsectors;
        }
    }
}
</script>