<script setup>
    import InputsLeversSector from "./InputsLeversSector.vue";
    import DropdownInputs from "./DropdownInputs.vue";
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ButtonInfo from "./ButtonInfo.vue";
    import ButtonReset from "./ButtonReset.vue";
    import ButtonResults from "./ButtonResults.vue";
    import ModalSections from "./ModalSections.vue";
</script>

<template>
    <div class="modal-calculator-inputs-mask">
        <div class="modal-calculator-inputs-wrapper">
            <div class="modal-calculator-inputs-block">
                <ModalSections v-show="showModalSections" @closeModal="showModalSections = false"></ModalSections>
                <div class="inputs-navigation">
                    <ButtonInfo @click="showModalSections = true"></ButtonInfo>
                    <DropdownInputs title="Scenāriju piemēri" :items="scenarious"></DropdownInputs>
                    <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                </div>
                <div class="levers-container">
                    <div class="levers-header">
                        <div class="levers-column__sectors">
                            <ButtonInfo></ButtonInfo>
                            <p>Sadaļas</p>
                        </div>
                        <div class="levers-column__steps">
                            <ButtonInfo></ButtonInfo>
                            <p>Ambīciju līmenis:</p>
                        </div>
                    </div>
                    <div class="levers-table">
                        <div class="levers">
                            <InputsLeversSector v-for="(leversSector, index) in leversSectors" :key="index" :content="leversSector"></InputsLeversSector>
                        </div>
                    </div>
                </div>
                <div class="action-buttons-container">
                    <ButtonReset></ButtonReset>
                    <ButtonResults @closeModal="$emit('closeModal')"></ButtonResults>
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
            InputsLeversSector,
            ButtonCloseModal,
            ButtonInfo,
            ButtonReset,
            ButtonResults,
            DropdownInputs,
            ModalSections
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
                ],
                showModalSections: false,
            }
        },
        methods: {
            openModalSections() {
                this.showModalSections = true;
            }
        }
    }
</script>