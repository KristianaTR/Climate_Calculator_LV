<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ContentCalcStructure from "./ContentCalcStructure.vue";
    import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask summary">
        <div class="modal-wrapper-summary">
            <div class="modal-block-summary">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Kalkulatora uzbūve</h3>
                <ContentCalcStructure></ContentCalcStructure>
                <ButtonScroll></ButtonScroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalCalcStructureMobile',
    components: {
        ButtonCloseModal,
        ContentCalcStructure,
        ButtonScroll
    }
}
</script>