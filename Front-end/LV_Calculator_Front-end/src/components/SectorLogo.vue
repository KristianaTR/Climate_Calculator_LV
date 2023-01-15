<template>
    <div class="sector-logo"> 
        <img :src="sectorLogo" alt="sector logo">
    </div>
</template>

<script>
    export default {
        name: "SectorLogo",
        props: {
            sectorLogo: {
                type: String,
                default: null
            }
        }
    }
</script>
