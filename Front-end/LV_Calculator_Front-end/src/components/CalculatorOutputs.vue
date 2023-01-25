<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<template>
    <div class="calculator-outputs">
        <div class="output-tabs-container">
            <nav>
                <a href="#overview">Kopsavilkums</a>
                <a href="#transport">Transports</a>
                <a href="#buildings">Mājsaimniecība/ēkas</a>
                <a href="#industry">Komercdarbība</a>
                <a href="#bioenergy">Bioenerģijas apgāde</a>
                <a href="#electricity">Enerģijas ražošana</a>
            </nav>
            <span class="snap-indicator"></span>
        </div>
        <div class="subtab-menu"></div>
        <div class="output-charts-container">
            <div id="overview" class="chart-container">
                <Bar
                    id="my-chart-id"
                    :options="chartOptions"
                    :data="chartData"
                />
        
            </div>
            <!-- <div id="transport" class="chart-container">
                
            </div>
            <div id="buildings" class="chart-container">
                
            </div>
            <div id="industry" class="chart-container">
                
            </div>
            <div id="bioenergy" class="chart-container">
                
            </div>
            <div id="electricity" class="chart-container">
                
            </div> -->
        </div>
    </div>
</template>
