
<template>
    <div class="block-wrapper">
        <div class="block-container">
            <div class="tab-container">
                <nav class="tab-links">
                    <router-link class="tab-link-item" to="/par-projektu" exact>Projekts</router-link>
                    <router-link class="tab-link-item" to="/par-projektu/projekta-merki">Projekta mērķi</router-link>
                </nav>
            </div> 
            <router-view></router-view>           
        </div>
    </div>
</template>