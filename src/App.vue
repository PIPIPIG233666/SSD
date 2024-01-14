<template>
  <Bar :data="data" :options="options" />
  <div>
    <center><button @click="toggleDiv" class="toggle-button">Raw Scores</button></center>
    <div v-show="isDivVisible" class="content-div" v-for="(name, index) in names" :key="index">
      {{ name }}: PCMARK: {{ pcm[index] }}, {{ pcm75[index] }} 3DMARK: {{ dm[index] }}, {{ dm75[index] }} SPEC2017: {{ spec[index] }}, {{ spec75[index] }}.
    </div>
  </div>
 </template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData,
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import * as chartConfig from './chartConfig.js';

import csv from '@/assets/raw.csv';
/* csv file headers
 * Name,
 * PCMARK 10 FULL STORAGE  ZERO,
 * PCMARK 10 FULL STORAGE 75%,
 * "3DMARK STORAGE ZERO",
 * "3DMARK STORAGE 75%",
 * SPEC Workstation 3.1 Storage zero,
 * SPEC Workstation 3.1 Storage 75%
 */
// create an array of names from the csv file
const names = chartConfig.names;
const labels: Array<string> = Object.keys(csv[0]);

// create an array of separate scores from the csv file
const pcm: Array<number> = csv.map((row) => row["PCMARK 10 FULL STORAGE  ZERO"]);
const pcm75: Array<number> = csv.map((row) => row["PCMARK 10 FULL STORAGE 75%"]);
const dm: Array<number> = csv.map((row) => row["3DMARK STORAGE ZERO"]);
const dm75: Array<number> = csv.map((row) => row["3DMARK STORAGE 75%"]);
const spec: Array<number> = csv.map((row) => row["SPEC Workstation 3.1 Storage zero"]);
const spec75: Array<number> = csv.map((row) => row["SPEC Workstation 3.1 Storage 75%"]);
// create an array of arrays of scores
const scores: Array<Array<number>> = [pcm, pcm75, dm, dm75, spec, spec75];

const isDivVisible = ref(false);

const toggleDiv = () => {
  isDivVisible.value = !isDivVisible.value;
};

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const options = chartConfig.options;
const data = ref<ChartData<'bar'>>({
  datasets: [],
});

onMounted(() => {
  setInterval(() => {
    data.value = chartConfig.Data();
  }, 3000);
});
</script>


<style scoped>
/* Add your custom styles here */
.toggle-button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.content-div {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #3498db;
  border-radius: 5px;
  background-color: #ecf0f1;
}
</style>
