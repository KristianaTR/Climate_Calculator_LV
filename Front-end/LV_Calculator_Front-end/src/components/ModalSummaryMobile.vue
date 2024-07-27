<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ContentSummary from "./ContentSummary.vue";
    import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask summary">
        <div class="modal-wrapper-summary">
            <div class="modal-block-summary">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Kopsavilkums</h3>
                <ContentSummary></ContentSummary>
                <ButtonScroll></ButtonScroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalSummaryMobile',
    components: {
        ButtonCloseModal,
        ContentSummary,
        ButtonScroll
    }
}
</script>