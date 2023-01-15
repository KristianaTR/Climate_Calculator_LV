<template>
    <div class="sector-name">
        {{sectorName}}
    </div>
</template>

<script>
export default {
    name: "SectorName",
        props: {
            sectorName: {
                type: String,
                default: null
            }
        }
    }
</script>