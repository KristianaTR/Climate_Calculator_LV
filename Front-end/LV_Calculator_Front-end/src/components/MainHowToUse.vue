<template>
    <div class="block-wrapper">
        <div class="block-container">
            <div class="tab-container">
                <nav class="tab-links">
                    <router-link class="tab-link-item" to="/ka-lietot">Kopsavilkums</router-link>
                    <router-link class="tab-link-item" to="/ka-lietot/kalkulatora-uzbuve">Kalkulatora uzbūve</router-link>
                    <router-link class="tab-link-item" to="/ka-lietot/scenariju-izveide">Sava scenārija izveide</router-link>
                </nav>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

