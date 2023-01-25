
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
                    <span class="nav-hamburger" @click="toggleNav"></span>
                </div>
                <nav>
                    <router-link to="/" class="page-link-item">Kalkulators</router-link>
                    <router-link to="/ka-lietot" class="page-link-item">Kā lietot?</router-link>
                    <router-link to="/par-kalkulatoru" class="page-link-item">Par projektu</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggleNav () {
            document.querySelector('.header-block .page-links').onclick = function () {
                document.querySelector('.header-block .page-links').classList.toggle('open');
            }

        }
        
    }

}
</script>

