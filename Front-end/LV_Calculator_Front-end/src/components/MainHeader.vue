<script setup>
import ModalNavigationSidebar from "./ModalNavigationSidebar.vue";
</script>

<template>
    <div class="header-wrapper">
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
        ModalNavigationSidebar
    },
    data() {
        return {
        showModalNavigationSidebar: false,
        }
    },
    methods: {
        openModalNavigationSidebar() {
            this.showModalNavigationSidebar = true;
        }
    }
}
</script>

