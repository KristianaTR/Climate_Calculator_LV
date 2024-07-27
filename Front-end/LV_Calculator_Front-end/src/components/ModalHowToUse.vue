<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
</script>


<template>
    <div class="modal-how-to-use-mask">
        <div class="modal-how-to-use-wrapper">
            <div class="modal-how-to-use-block">
                <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                <div class="how-to-use-tab-container">
                    <nav>
                        <a href="#">Kopsavilkums</a>
                        <a href="#">Kalkulatora uzbūve</a>
                        <a href="#">Sava scenārija izveide</a>
                    </nav>
                </div>
                <div class="how-to-use-content-container">
                    <div class="how-to-use-img-container">
                        <img src="" alt="image">
                    </div>
                    <div class="how-to-use-text-container">
                        <h2>This is heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam quasi voluptas dolore soluta, nulla quis eos illum aliquid, dignissimos laudantium consequuntur quaerat provident cupiditate ipsum beatae itaque quibusdam deserunt!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalHowToUse',
    components: ButtonCloseModal
}
</script>