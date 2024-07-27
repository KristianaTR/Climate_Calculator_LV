<script setup>
    import ContentSummary from '../components/ContentSummary.vue';
</script>


<template>
    <div class="view-wrapper">
        <ContentSummary></ContentSummary>
    </div>
</template>

<script>
export default {
    name: 'Summary',
    components: {
        ContentSummary,
    }
}
</script>