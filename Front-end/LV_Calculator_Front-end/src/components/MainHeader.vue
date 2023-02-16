<script setup>
import ModalHowToUse from './ModalHowToUse.vue';
import ModalAbout from './ModalAbout.vue';
import ModalNavigationSidebar from "./ModalNavigationSidebar.vue";
</script>

<template>
    <div class="header-wrapper">
        <ModalHowToUse v-show="showModalHowToUse" @closeModal="showModalHowToUse = false"></ModalHowToUse>
        <ModalAbout v-show="showModalAbout" @closeModal="showModalAbout = false"></ModalAbout>
        <div class="header-block">
            <div class="logo-block">
                <div class="header-logo">
                    <a href="https://klimatam.lv/" target="_blank" >
                        <img src="../assets/logos/logo_Klimatam.svg" alt="logo">
                    </a>
                </div>
                <div class="header-title">
                    Klimata kalkulators 2050                   
                </div>
            </div>
            <div class="page-links">
                <div class="burger-menu-icon">
                    <span class="nav-hamburger" @click="openModalNavigationSidebar"></span>
                </div>
                <nav class="navigation-desktop">
                    <router-link to="/" class="page-link-item">Kalkulators</router-link>
                    <router-link to="/ka-lietot" class="page-link-item">Kā lietot?</router-link>
                    <router-link to="/par-projektu" class="page-link-item">Par projektu</router-link>
                </nav>
                <ModalNavigationSidebar v-show="showModalNavigationSidebar" @closeModal="showModalNavigationSidebar = false"></ModalNavigationSidebar>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHeader',
    components: {
        ModalHowToUse,
        ModalAbout,
        ModalNavigationSidebar
    },
    data() {
        return {
        showModalHowToUse: false,
        showModalAbout: false,
        showModalNavigationSidebar: false,
        }
    },
    methods: {
        openModalHowToUse() {
            this.showModalHowToUse = true;
        },
        openModalAbout() {
            this.showModalAbout = true;
        },
        openModalNavigationSidebar() {
            this.showModalNavigationSidebar = true;
        }
        // toggleNav() {
        //     document.querySelector(".header-block .page-links").classList.toggle("open");
        //     document.querySelector(".header-block .page-links .navigation-modal-windows").classList.toggle("open");
        // }
    }
}
</script>

