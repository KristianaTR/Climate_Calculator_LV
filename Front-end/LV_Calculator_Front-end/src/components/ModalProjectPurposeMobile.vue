<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ContentProjectPurpose from "./ContentProjectPurpose.vue";
    import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask project-purpose">
        <div class="modal-wrapper-project-purpose">
            <div class="modal-block-project-purpose">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Projekta mērķi</h3>
                <ContentProjectPurpose></ContentProjectPurpose>
                <ButtonScroll></ButtonScroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalProjectPurposeMobile',
    components: {
        ButtonCloseModal,
        ContentProjectPurpose,
        ButtonScroll
    }
}
</script>