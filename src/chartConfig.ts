function getRandomInt() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}

export const Data = () => ({
  labels: [
    'ADATA  960 2T',        'fanxiang MAP1202  512G',
    'GUDGA IG 512G',        'INTEL 660P 512G',
    'INTEL 670P 1T',        'INTEL 750 400G',
    'Intel 900P 280G',      'Intel DC S3610 200G',
    'Intel P4500 2T',       'Intel P5800X 400G',
    'KIOXIA CM6V 3.2T',     'KIOXIA FL6 800G',
    'kioxia Q200EX. 256G',  'kioxia RC10 1T',
    'memblaze D916 3.2T',   'Netlist 1951 7.68T',
    'P41 PLUS  L01C 2.0',   'PC801 1T',
    'PLEXTOR M6S 128G',     'PM883 480G',
    'PM9A3 1.92T M2',       'PM9A7 960G',
    'Samsung PM9A1 1T',     'SK PE4010 900G',
    'Solidigm P41 PLUS 1T', 'UMIS AM6A1 1T',
    'UMIS AM6B1 1T',        'WD SN550 1T',
    'WD SN580 1T',          'WD SN810 1T',
    'YMTC PC411 2T',        'ZHITAI TI600 1T QLC',
  ],
  datasets: [
    {
      label: 'PCMark 10 Full Storage Zero (/100)',
      backgroundColor: '#f87979',
      data: [
        36.72, 27.12, 18.57, 17.14, 27.02, 13.93, 60.05, 6.21,
        13.89, 88.65, 27.7,  37.9,  8.54,  15.96, 11.98, 13.25,
        34.34, 39.2,  9.1,   11.1,  21.3,  23.01, 30.7,  14.49,
        28.74, 26.77, 41.97, 19.47, 35.09, 34.43, 38.8,  37.63
      ],
      borderRadius: 5,
    },
    {
      label: 'PCMark 10 Full Storage 75% (/100)',
      backgroundColor: '#5C0404',
      data: [
        37.87, 23.72, 15.08, 8.29,  20.18, 13.95, NaN,   NaN,
        13.75, 87.9,  27.44, 37.83, 7.53,  15,    NaN,   NaN,
        25.46, 35.28, NaN,   11.1,  NaN,   NaN,   23.64, 14.37,
        24.66, 24.3,  36.64, 19.19, 34.25, 34.16, 38.04, 25.6
      ],
      borderRadius: 5,
    },
    {
      label: '3DMARK STORAGE ZERO (/100)',
      backgroundColor: '#FFA500',
      data: [
        41.6,  31.29, 25.07, 22.33, 30.98, 13.33, 54.03, 6.53,
        14.6,  79.67, 33.32, 51.96, 9.42,  17.5,  17,    NaN,
        35.63, 43.36, 9.71,  11.84, 32.94, 35.25, 27.92, 16.93,
        25.93, 24.52, 34.4,  24.4,  40.16, 41.54, 39.15, 41.52
      ],
      borderRadius: 5,
    },
    {
      label: '3DMARK STORAGE 75% (/100)',
      backgroundColor: '#72451E',
      data: [
        41.61, 31.25, 24.49, 14.72, 30.35, 13.21, NaN,   NaN,
        14.74, 89.55, 33.21, 51.97, 9.41,  17.38, NaN,   NaN,
        30.89, 42.71, NaN,   12.88, NaN,   NaN,   23.93, 16.94,
        25.62, 24.49, 33.37, 24.49, 38.97, 41.78, 37.26, 27.38
      ],
      borderRadius: 5,
    },
    {
      label: 'SPEC Workstation 3.1 Storage zero',
      data: [
        36.91, 15.35, NaN,   12.5,  21.61, NaN,   40.12, NaN,
        NaN,   64.03, 36.76, 41.83, 7.45,  16.01, 18.33, 21.35,
        21.18, 35,    NaN,   9.57,  26.88, 29.55, 36.43, 14.29,
        24.36, 16.87, 26.1,  16.28, 31.17, 28.02, 18.5,  20.04
      ],
      backgroundColor: '#64C6DA',
      borderRadius: 5,
    },
    {
      label: 'SPEC Workstation 3.1 Storage 75%',
      data: [
        36.27, 16.93, ,      11.59, 19.68, NaN,   NaN,   NaN,
        NaN,   63.84, 36.02, 42.09, 7.71,  15.71, NaN,   NaN,
        21.07, 35.4,  NaN,   9.32,  NaN,   NaN,   28.7,  14.95,
        23.35, 16.14, 24.78, 16.93, 29.97, 27.69, 18.06, 19.3
      ],
      backgroundColor: '#035161',
      borderRadius: 5,
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
      borderWidth: 2,
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
      display: true,
      text: 'HOMO Lab',
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
