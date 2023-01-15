<script setup>
    import InputsLeversSector from "./InputsLeversSector.vue";
</script>

<template>
    <div class="calculator-inputs">
        <div class="inputs-navigation">
            
        </div>
        <div class="levers-container">
            <div class="levers-header">
                <p>Sekcijas</p>
                <p>Ambīciju līmenis</p>
            </div>
            <div class="levers-table">
                <div class="levers">
                    <InputsLeversSector v-for="(leversSector, index) in leversSectors" :key="index" :content="leversSector"></InputsLeversSector>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import IconTransport from './icons/IconTransport.svg';
    import IconBuildings from './icons/IconBuildings.svg';
    import IconIndustry from './icons/IconIndustry.svg';
    import IconBioenergy from './icons/IconBioenergy.svg';
    import IconElectricity from './icons/IconElectricity.svg';
    
    export default {
        name: "CalculatorInputs",
        data () {
            return {
                leversSectors: [
                    {
                        img: IconTransport,
                        name: 'Transports'
                    },
                    {
                        img: IconBuildings,
                        name: 'Mājsaimniecība'
                    },
                    {
                        img: IconIndustry,
                        name: 'Komercdarbība'
                    },
                    {
                        img: IconBioenergy,
                        name: 'Bioenerģijas apgāde'
                    },
                    {
                        img: IconElectricity,
                        name: 'Enerģijas ražošana'
                    }
                ]
            }
        }
    }
</script>

