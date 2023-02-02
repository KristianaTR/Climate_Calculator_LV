<script setup>
    import ButtonScenarious from "./ButtonScenarious.vue";
    import CalculatorInputs from "./CalculatorInputs.vue";
    import CalculatorOutputs from "./CalculatorOutputs.vue";
    import ModalCalculatorInputs from "./ModalCalculatorInputs.vue";
</script>


<template>
    <div class="calculator-wrapper">
        <div class="calculator-blocks">
            <ModalCalculatorInputs v-show="showModalCalculatorInputs" @closeModal="showModalCalculatorInputs = false"></ModalCalculatorInputs>
            <ButtonScenarious @openModalCalculatorInputs="showModalCalculatorInputs = true"></ButtonScenarious>
            <CalculatorInputs></CalculatorInputs>
            <CalculatorOutputs></CalculatorOutputs>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainCalculatorBody',
    components: {
        ModalCalculatorInputs,
    },
    data () {
        return {
            showModalCalculatorInputs: false,
        }
    },
    methods: {
        openModalCalculatorInputs() {
            this.showModalCalculatorInputs = true;
        }
    }
}
</script>