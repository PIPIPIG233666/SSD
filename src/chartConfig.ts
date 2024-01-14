// convert raw scores to scaled scores (divide by 100)
function scaledScore(rawScore: number): number {
  return rawScore / 1;
}

import csv from '@/assets/ssd.csv';

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
export const names: Array<string> = csv.map((row) => row["Name"]);

// create an array of separate scores from the csv file
// const pcm: Array<number> = csv.map((row) => row["PCMARK 10 FULL STORAGE  ZERO"]);
// const pcm75: Array<number> = csv.map((row) => row["PCMARK 10 FULL STORAGE 75%"]);
// const dm: Array<number> = csv.map((row) => row["3DMARK STORAGE ZERO"]);
// const dm75: Array<number> = csv.map((row) => row["3DMARK STORAGE 75%"]);
// const spec: Array<number> = csv.map((row) => row["SPEC Workstation 3.1 Storage zero"]);
// const spec75: Array<number> = csv.map((row) => row["SPEC Workstation 3.1 Storage 75%"]);
// create an array of arrays of scores
// const scores: Array<Array<number>> = [pcm, pcm75, dm, dm75, spec, spec75];

// create an array of labels from the csv file
// export const labels: Array<string> = Object.keys(csv[0]);
// create an array of labels and corresponding pcm zero and additional 75 scores from the csv file
const pcm: Array<{label: string, scoreZero: number, scoreSF: number}> = csv.map((row) => ({label: row["Name"], scoreZero: row["PCMARK 10 FULL STORAGE  ZERO"], scoreSF: row["PCMARK 10 FULL STORAGE 75%"]}));
// sort the pcm array by scoreZero descending
pcm.sort((a, b) => b.scoreZero - a.scoreZero);
export const Data = () => ({
  labels: pcm.map((row) => row.label),
  datasets: [
    {
      label: 'PCMark 10 Full Storage Zero ',
      backgroundColor: '#f87979',
      data: pcm.map((row) => scaledScore(row.scoreZero)),
      borderRadius: 5,
    },
    {
      label: 'PCMark 10 Full Storage 75% ',
      backgroundColor: '#5C0404',
      data: pcm.map((row) => scaledScore(row.scoreSF)),
      borderRadius: 5,
    },
    // {
      // label: '3DMARK STORAGE ZERO ',
      // backgroundColor: '#FFA500',
      // data: scores[2].map(scaledScore),
      // borderRadius: 5,
    // },
    // {
      // label: '3DMARK STORAGE 75% ',
      // backgroundColor: '#72451E',
      // data: scores[3].map(scaledScore),
      // borderRadius: 5,
    // },
    // {
      // label: 'SPEC Workstation 3.1 Storage zero',
      // data: scores[4],
      // backgroundColor: '#64C6DA',
      // borderRadius: 5,
    // },
    // {
      // label: 'SPEC Workstation 3.1 Storage 75%',
      // data: scores[5],
      // backgroundColor: '#035161',
      // borderRadius: 5,
    // },
  ],
});

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px
  // wide
  elements: {
    bar: {
      borderWidth: 0.5,
    },
  },
  /*x: {
    min: 0,
    max: 20000,
    ticks: {
      // forces step size to be 50 units
      stepSize: 10,
    },
  },*/
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: false,
      text: 'HOMO Lab SSD Benchmark',
    },
  },
  // scales: {
    // x: {
      // stacked: true,
    // },
    // y: {
      // stacked: true,
    // },
  // },
};
