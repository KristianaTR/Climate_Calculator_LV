<script setup>
    import InputsLeversSector from "./InputsLeversSector.vue";
    import DropdownInputs from "./DropdownInputs.vue";
    import ButtonCloseModal from "./ButtonCloseModal.vue";
    import ButtonInfo from "./ButtonInfo.vue";
    import ButtonReset from "./ButtonReset.vue";
    import ButtonResults from "./ButtonResults.vue";
    import ModalSections from "./ModalSections.vue";
    import ModalSteps from "./ModalSteps.vue";
</script>

<template>
    <div class="modal-calculator-inputs-mask">
        <div class="modal-calculator-inputs-wrapper">
            <div class="modal-calculator-inputs-block">
                <ModalSections v-show="showModalSections" @closeModal="showModalSections = false"></ModalSections>
                <ModalSteps v-show="showModalSteps" @closeModal="showModalSteps = false"></ModalSteps>
                <div class="inputs-navigation">
                    <DropdownInputs title="Scenāriju piemēri" :items="scenarious"></DropdownInputs>
                    <ButtonCloseModal  @closeModal="$emit('closeModal')"></ButtonCloseModal>
                </div>
                <div class="levers-container">
                    <div class="levers-header">
                        <div class="levers-column__sectors">
                            <ButtonInfo @click="showModalSections = true"></ButtonInfo>
                            <p>Sektori:</p>
                        </div>
                        <div class="levers-column__steps">
                            <ButtonInfo @click="showModalSteps = true"></ButtonInfo>
                            <p>Ambīciju līmenis:</p>
                        </div>
                    </div>
                    <div class="levers-table">
                        <div class="levers">
                            <InputsLeversSector v-for="(leversSector, index) in leversSectors" :key="index" :content="leversSector"></InputsLeversSector>
                        </div>
                    </div>
                    <div class="action-buttons-wrapper">
                        <div class="action-buttons-container">
                            <ButtonReset></ButtonReset>
                            <ButtonResults @closeModal="$emit('closeModal')"></ButtonResults>
                        </div>
                    </div>
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
            ModalSections,
            ModalSteps
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
                        name: 'Transports',
                        subsectors: [
                            'Pasažieru transports', 
                            'Pārslēgšanās uz 0 emisiju transportu', 
                            'Nulles emisiju transporta veida izvēle',
                            'Kravu pārvadājumi',
                            'Starptautiskā aviācija',
                            'Starptautiskā navigācija'
                        ]
                    },
                    {
                        img: IconBuildings,
                        name: 'Mājsaimniecība',
                        subsectors: [
                            'Vidējā temperatūra mājokļos',
                            'Māju renovācija',
                            'Māju apkures elektrifikācija',
                            'Pārējās māju apkures sistēmas',
                            'Apgaismojums un sadzīves tehnika',
                            'Ēdienu gatavošamas tehnikas elektrifikācija'
                        ]
                    },
                    {
                        img: IconIndustry,
                        name: 'Komercdarbība',
                        subsectors: [
                            'Ražošanas izaugsme rūpniecībā',
                            'Energointensitāte rūpniecībā',
                            'Apkure un dzesēšanas patēriņš komercsektorā',
                            'Apkures elektrifikācija komercsektorā',
                            'Pārējās apkures sistēmas komercsektorā',
                            'Apgaismojums un ierīces komercsektorā',
                            'Komerciālā sektora ēdienu gatavošanas iekārtu elektrifikācija'
                        ]
                    },
                    {
                        img: IconBioenergy,
                        name: 'Bioenerģijas apgāde',
                        subsectors: [
                            'Biomasas kurināmā veidi',
                            'Bioenerģijas imports',
                            'Bioenerģijai atvēlētās zemes platības',
                            'Lopkopība',
                            'Atkritumi un to reģenerācija',
                            'Jūras aļģes'
                        ]
                    },
                    {
                        img: IconElectricity,
                        name: 'Enerģijas ražošana',
                        subsectors: [
                            'Biomasa, elektroenerģijas ražošanas stacijas',
                            'Elektrostacijas ar CCS',
                            'Kurināmā izvēle CCS stacijās',
                            'Sauszemes vēja stacijas',
                            'Atkrastes vēja stacijas',
                            'Saules PV elektroenerģijas ražošanai',
                            'Saules paneļi siltumenerģijas ražošanai',
                            'Mazas jaudas vēja stacijas',
                            'Elektroenerģijas imports'
                        ]
                    }
                ],
                showModalSections: false,
                showModalSteps: false
            }
        },
        methods: {
            openModalSections() {
                this.showModalSections = true;
            },
            openModalSteps() {
                this.showModalSteps = true;
            }
        }
    }
</script>