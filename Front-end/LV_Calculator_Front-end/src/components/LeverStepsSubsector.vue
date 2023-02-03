<template>
    <div class="lever-steps-container subsectors">
        <div class="lever-step subsectors active"></div>
        <div class="lever-step subsectors" @click="e => e.target.classList.toggle('active')"></div>
        <div class="lever-step subsectors" @click="e => e.target.classList.toggle('active')"></div>
        <div class="lever-step subsectors" @click="e => e.target.classList.toggle('active')"></div>
    </div>
</template>

<script>
export default {
    name: 'LeverStepsSubsector'
}
</script>