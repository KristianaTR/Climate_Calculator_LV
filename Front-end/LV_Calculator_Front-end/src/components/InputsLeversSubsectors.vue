<script setup>
    import SubsectorName from "./SubsectorName.vue";  
    import InputsLeversStepsSubsector from "./InputsLeversStepsSubsector.vue";
</script>

<template>
    <div class="levers-subsector-container">
        <SubsectorName></SubsectorName>
        <InputsLeversStepsSubsector></InputsLeversStepsSubsector>
    </div>
</template>


<script>
    export default {
        name: "InputsLeversStepsSubsectors",
        props: {
            content: {
                Type: Object,
                default: null
            }
        }
    }
</script>