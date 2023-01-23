<template>
    <div class="sector-logo">
        {{ imgData }}
    </div>
</template>

<script>
    export default {
        inject: ['imgData'],
        data: () => ({
            sectorLogo: null,
        }),
        created () {
            this.sectorLogo = this.imgData;
        }

    }
    
    
</script>
