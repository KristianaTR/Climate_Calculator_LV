<template>
    <div class="scenario-dropdown">
        <div class="menu-item" @click="isOpen = !isOpen">
            <a href="#">
                {{ title }}
            </a>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1611 0.996574L7.16113 6.99414L1.16113 0.996575" stroke="#646569" stroke-width="2"/>
            </svg>   
            <transition name="fade" appear="">
                <div class="sub-menu" v-if="isOpen">
                    <div v-for="(item, i) in items" :key="i" class="menu-item">
                        <a :href="item.link">{{ item.title }}</a>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropdownInputs',
    props: ['title', 'items'],
    data () {
        return {
            isOpen: false
        }
    }
}
</script>

