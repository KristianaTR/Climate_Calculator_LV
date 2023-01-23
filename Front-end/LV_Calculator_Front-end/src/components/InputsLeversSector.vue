<script setup>
    import SectorLogo from "./SectorLogo.vue";
    import SectorName from "./SectorName.vue";
    import InputsLeversStepsSector from "./InputsLeversStepsSector.vue";
</script>

<template>
    <div class="levers-sector">
        <div class="card">
            <SectorName></SectorName>
            <SectorLogo></SectorLogo>
        </div>
        <InputsLeversStepsSector></InputsLeversStepsSector>
    </div>
</template>