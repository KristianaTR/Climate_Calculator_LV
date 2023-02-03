<template>
    <div class="lever-steps-container">
        <div class="lever-step active" >1</div>
        <div class="lever-step" @click="e => e.target.classList.toggle('active')">2</div>
        <div class="lever-step" @click="e => e.target.classList.toggle('active')">3</div>
        <div class="lever-step" @click="e => e.target.classList.toggle('active')">4</div>
    </div>
</template>

<script>
export default {
    name: 'LeverStepsSector'
}
</script>