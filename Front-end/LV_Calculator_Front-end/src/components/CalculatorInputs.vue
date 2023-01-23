<template>
    <div class="calculator-inputs">
        <div class="inputs-navigation"></div>
        <div class="levers-container">
            <div class="levers-header">
                <p>Sekcijas</p>
                <p>Ambīciju līmenis</p>
            </div>
            <div class="levers-table">
                <div class="levers">
                    <InputsLevers v-for="(Sector, index) in Sectors" :key="index" :content="Sector"></InputsLevers>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InputsLevers from "./InputsLevers.vue";
    import IconTransport from './icons/IconTransport.svg';
    import IconBuildings from './icons/IconBuildings.svg';
    import IconIndustry from './icons/IconIndustry.svg';
    import IconBioenergy from './icons/IconBioenergy.svg';
    import IconElectricity from './icons/IconElectricity.svg';
    import { computed } from "vue";

    export default {
        components: { InputsLevers },
        data () {
            return {
                Sectors: [
                    {
                        img: IconTransport,
                        name: 'Transports',
                        subsectors: 
                        [
                            'Pasažieru transports', 
                            'Pārslēgšanās uz nulles emisiju transporta veidiem',
                            'Nulles emisiju transporta veida izvēle',
                            'Kravu pārvadājumi',
                            'Starptautiskā aviācija',
                            'Starptautiskā navigācija'
                        ]
                    },
                    {
                        img: IconBuildings,
                        name: 'Mājsaimniecība',
                        subsectors: [
                            'Pasažieru transports', 
                            'Pārslēgšanās uz nulles emisiju transporta veidiem',
                            'Nulles emisiju transporta veida izvēle',
                            'Kravu pārvadājumi',
                            'Starptautiskā aviācija',
                            'Starptautiskā navigācija']
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
        },
        computed: {
            img () {
                console.log(this.Sectors.img);
                return this.Sectors.img
            },
            name () {
                return this.Sectors.name
            },
            subsectors () {
                return this.Sectors.subsectors
            }
        },
        provide () {
            return {
                sectorsData: computed(()=>this.Sectors),
                imgData: computed(()=>this.img),
                nameData: computed(()=>this.name),
                subsectorsData: computed(()=>this.subsectors)
            }
        },
    }

</script>
<!-- <script>
    
    
// //     export default {
// //         data () {
// //             return {
                
// //             }
// //         },
//         // return {
//             //     sectors: this.Sectors,
//             //     img: this.img,
//             //     name: this.name,
//             //     subsectors: this.subsectors
//             // }
        
//         // computed: {
//         //     img () {
//         //         return this.Sectors.img
//         //     },
//         //     name () {
//         //         return this.Sectors.name
//         //     },
//         //     subsectors () {
//         //         return this.Sectors.subsectors
//         //     }
//         // },

//         // provide () {
//         //     return {
//         //         img: computed (()=> this.Sectors.img),
//         //         name: computed (()=> this.Sectors.name),
//         //         subsectors: computed (()=> this.Sectors.subsectors)
//         //     }
//         // }
//     }
// </script> -->

