<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ContentAboutProject from "./ContentAboutProject.vue";
    import ButtonScroll from "./ButtonScroll.vue";
</script>

<template>
    <div class="modal-mask scenarious">
        <div class="modal-wrapper-scenarious">
            <div class="modal-block-scenarious">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <h3>Projekts</h3>
                <ContentAboutProject></ContentAboutProject>
                <ButtonScroll></ButtonScroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalAboutProjectMobile',
    components: {
        ButtonCloseModal,
        ContentAboutProject,
        ButtonScroll
    }
}
</script>