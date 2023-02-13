<script setup>
    import DropdownOutputs from "./DropdownOutputs.vue";
    import ChartMain from "./ChartMain.vue";
</script>

<template>
    <div class="calculator-outputs">
        <div class="subtab-menu">
          <div class="subtab-menu-charts">
            <span class="active">CO2 emisijas</span>
            <span>Enerģijas ieguve</span>
            <span>Enerģijas patēriņš</span>
          </div>
          <DropdownOutputs title="CO2 emisijas" :items="chartOptions"></DropdownOutputs>
          <div class="subtab-menu-share">
            <span>Dalīties</span>
          </div>
        </div>
        <div class="output-charts-container">
            <div id="overview" class="chart-container">
                <ChartMain></ChartMain>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CalculatorOutputs",
  components: {
    DropdownOutputs,
    ChartMain
  },
  data () {
    return {
      chartOptions: [
        {
          title: 'Enerģijas ieguve',
          link: '#'
        },
        {
          title: 'Enerģijas patēriņš',
          link: '#'
        }
      ]
    }
  }
}
</script>