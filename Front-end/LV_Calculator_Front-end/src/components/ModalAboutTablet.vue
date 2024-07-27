<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import MainAbout from "./MainAbout.vue";
</script>

<template>
    <div class="modal-tablet-mask">
        <div class="modal-tablet-wrapper">
            <div class="modal-tablet-block">
                <ButtonCloseModal @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <MainAbout></MainAbout>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalAboutTablet',
    components: {
        ButtonCloseModal,
        MainAbout
    }
}
</script>