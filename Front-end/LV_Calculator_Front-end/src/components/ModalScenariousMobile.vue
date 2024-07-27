<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ContentScenarious from "./ContentScenarious.vue";
    import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask scenarious">
        <div class="modal-wrapper-scenarious">
            <div class="modal-block-scenarious">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Sava scenārija izveide</h3>
                <ContentScenarious></ContentScenarious>
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
        ContentScenarious,
        ButtonScroll
    }
}
</script>