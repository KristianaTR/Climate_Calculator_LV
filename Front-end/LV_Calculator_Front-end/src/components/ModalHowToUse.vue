<template>
    <div class="modal-how-to-use-mask">
        <div class="modal-how-to-use-wrapper">
            <div class="modal-how-to-use-block">
                <div class="how-to-use-tab-container">
                    <button class="modal-close-icon" @click="$emit('closeHowToUse')" >
                        <span></span>
                    </button>
                    <nav>
                        <a href="#">Sadaļas</a>
                        <a href="#">Ambīciju līmeņi</a>
                        <a href="#">Grafiki</a>
                        <a href="#">Apzīmējumi</a>
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
}
</script>