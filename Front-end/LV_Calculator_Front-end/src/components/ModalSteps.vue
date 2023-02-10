<script setup>
   import ButtonCloseModal from "./ButtonCloseModal.vue";
</script>

<template>
    <div class="modal-steps-mask">
        <div class="modal-steps-wrapper">
            <div class="modal-steps-block">
                <ButtonCloseModal @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <div class="modal-content">
                    <div class="modal-content__img-container">
                       <img src="../assets/images/example_steps.png" alt="img">
                    </div>
                    <div class="modal-content__text-container">
                        <h2>This is heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam quasi voluptas dolore soluta, nulla quis eos illum aliquid, dignissimos laudantium consequuntur quaerat provident cupiditate ipsum beatae itaque quibusdam deserunt!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam quasi voluptas dolore soluta, nulla quis eos illum aliquid, dignissimos laudantium consequuntur quaerat provident cupiditate ipsum beatae itaque quibusdam deserunt!</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalSteps',
    components: {
            ButtonCloseModal,
        }
}
</script>