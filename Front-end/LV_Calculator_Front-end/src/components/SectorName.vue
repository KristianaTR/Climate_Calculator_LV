<template>
    <div>
        <div class="sector-name" v-for="(sectorName, index) in nameData" :key="index" :content="sectorName">
    
            {{nameData}}
    
        </div>

    </div>
</template>

<script>
export default {
    inject: ['nameData'],
    // mounted () {
    //     console.log(this.nameData);
       
    // },

    // data () {
    //     return {
    //         sectorName: 'this.name',
    //     }
    // }
}
</script>