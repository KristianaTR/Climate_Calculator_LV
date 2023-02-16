<script setup>
    import ButtonCloseModal from "./ButtonCloseModal.vue";
</script>

<template>
    <div class="modal-mask nav-sidebar">
        <div class="modal-wrapper">
            <div class="modal-block">
                <div class="container__heading">
                    <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                </div>
                <div class="container__tab">
                    <nav class="tab-links">
                        <router-link to="/ka-lietot" class="page-link-item">Kā lietot kalkulatoru?</router-link>
                        <router-link to="/par-projektu" class="page-link-item">Par projektu</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <nav class="navigation-modal-windows">
        <a href="#" v-on:click="openModalHowToUse()">Kā lietot kalkulatoru?</a>
        <a href="#" v-on:click="openModalAbout()">Par projektu</a>
    </nav> -->