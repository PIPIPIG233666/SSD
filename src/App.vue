<template>
  <Bar :data="data" :options="options" />
  // display the names and raw scores
  <div v-for="(name, index) in names" :key="index">
    {{ name }}: {{ pcm[index] }} {{ pcm75[index] }} {{ dm[index] }} {{ dm75[index] }} {{ spec[index] }} {{ spec75[index] }}
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
 * SEPC Workstation 3.1 Storage zero,
 * SEPC Workstation 3.1 Storage 75%
 */
// create an array of names from the csv file
const names: Array<string> = csv.map((row) => row["Name"]);

// create an array of separate scores from the csv file
const pcm: Array<number> = csv.map((row) => row["PCMARK 10 FULL STORAGE  ZERO"]);
const pcm75: Array<number> = csv.map((row) => row["PCMARK 10 FULL STORAGE 75%"]);
const dm: Array<number> = csv.map((row) => row["3DMARK STORAGE ZERO"]);
const dm75: Array<number> = csv.map((row) => row["3DMARK STORAGE 75%"]);
const spec: Array<number> = csv.map((row) => row["SEPC Workstation 3.1 Storage zero"]);
const spec75: Array<number> = csv.map((row) => row["SEPC Workstation 3.1 Storage 75%"]);
// create an array of arrays of scores
const scores: Array<Array<number>> = [pcm, pcm75, dm, dm75, spec, spec75];

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
