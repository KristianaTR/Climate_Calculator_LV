<script setup>
    import InputsLeversSector from "./InputsLeversSector.vue";
    import Dropdown from "./Dropdown.vue";
</script>

<template>
    <div class="calculator-inputs">
        <div class="inputs-navigation">
            <span class="info-button info-button__scenarious">
                <span></span>
            </span>
            <Dropdown title="Scenāriju piemēri" :items="scenarious"></Dropdown>
            <div class="button-reset-conteiner">
                <button class="button-reset">Atiestatīt</button>
            </div>
        </div>
        <div class="levers-container">
            <div class="levers-header">
                <div class="levers-column__sectors">
                    <span class="info-button info-button__sectors">
                        <span></span>
                    </span>
                    <p>Sadaļas</p>
                </div>
                <div class="levers-column__steps">
                    <span class="info-button info-button__steps">
                        <span></span>
                    </span>
                    <p>Ambīciju līmenis:</p>
                </div>
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
        components: {
            Dropdown,
            InputsLeversSector
        },
        data () {
            return {
                scenarious: [
                    {
                        title: 'Visi ambīciju līmeņi 2',
                        link: '#'
                    },
                    {
                        title: 'Visi ambīciju līmeņi 3',
                        link: '#'
                    },
                    {
                        title: 'Sasniegts 0% CO2 līmenis',
                        link: '#'
                    }
                ],
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

