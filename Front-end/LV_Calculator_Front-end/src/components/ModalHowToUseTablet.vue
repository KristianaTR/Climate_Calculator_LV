<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import MainHowToUse from "./MainHowToUse.vue";
</script>


<template>
    <div class="modal-tablet-mask">
        <div class="modal-tablet-wrapper">
            <div class="modal-tablet-block">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <MainHowToUse></MainHowToUse>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalHowToUseTablet',
    components: {
        ButtonCloseModal,
        MainHowToUse
    }
}
</script>