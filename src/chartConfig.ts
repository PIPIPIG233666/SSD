import csv from '@/assets/ssdNew.csv';

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
// create an array of labels from the csv file
const tests: Array<string> = Object.keys(csv[0]);
// create an array of labels and corresponding scores from the csv file
const scores: Array<{
  label: string,
  scoreZero: number,
  scoreSF: number,
  dm: number,
  dmSF: number,
  spec: number,
  spec75: number}> = csv.map((row) => ({
    label: row["Name"],
    scoreZero: row["PCMARK 10 FULL STORAGE  ZERO"],
    scoreSF: row["PCMARK 10 FULL STORAGE 75%"],
    dm: row["3DMARK STORAGE ZERO"],
    dmSF: row["3DMARK STORAGE 75%"],
    spec: row["SPEC Workstation 3.1 Storage zero"],
    spec75: row["SPEC Workstation 3.1 Storage 75%"]}));
// sort the scores array by scoreZero descending
scores.sort((a, b) => b.scoreZero - a.scoreZero);
export const Data = () => ({
  labels: scores.map((row) => row.label),
  datasets: [
    {
      label: tests[1],
      data: scores.map((row) => row.scoreZero),
      backgroundColor: '#f87979',
      borderRadius: 5,
    },
    {
      label: tests[2],
      data: scores.map((row) => row.scoreSF),
      backgroundColor: '#5C0404',
      borderRadius: 5,
    },
    {
      label: tests[3],
      data: scores.map((row) => row.dm),
      backgroundColor: '#FFA500',
      borderRadius: 5,
      // hide this dataset initially
      hidden: true,
    },
    {
      label: tests[4],
      data: scores.map((row) => row.dmSF),
      backgroundColor: '#72451E',
      borderRadius: 5,
      // hide this dataset initially
      hidden: true,
    },
    {
      label: tests[5],
      data: scores.map((row) => row.spec),
      backgroundColor: '#64C6DA',
      borderRadius: 5,
      // hide this dataset initially
      hidden: true,
    },
    {
      label: tests[6],
      data: scores.map((row) => row.spec75),
      backgroundColor: '#035161',
      borderRadius: 5,
      // hide this dataset initially
      hidden: true,
    },
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
