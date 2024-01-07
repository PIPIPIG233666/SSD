// convert raw scores to scaled scores (divide by 100)
function scaledScore(rawScore: number): number {
  return rawScore / 100;
}

const names: Array<string> = [
  'ADATA  960 2T',        'FANXIANG MAP1202  512G',
  'GUDGA IG 512G',        'INTEL 660P 512G',
  'INTEL 670P 1T',        'INTEL 750 400G',
  'INTEL 900P 280G',      'INTEL DC S3610 200G',
  'INTEL P4500 2T',       'INTEL P5800X 400G',
  'KIOXIA CM6V 3.2T',     'KIOXIA FL6 800G',
  'KIOXIA Q200EX. 256G',  'KIOXIA RC10 1T',
  'MemBlaze D916 3.2T',   'Netlist 1951 7.68T',
  'Solidigm P41 PLUS  L01C 2.0',   'SK Hynix PC801 1T',
  'PLEXTOR M6S 128G',     'PM883 480G',
  'PM9A3 1.92T M2',       'PM9A7 960G',
  'Samsung PM9A1 1T',     'SK Hynix PE4010 900G',
  'Solidigm P41 PLUS 1T', 'UMIS AM6A1 1T',
  'UMIS AM6B1 1T',        'WD SN550 1T',
  'WD SN580 1T',          'WD SN810 1T',
  'YMTC PC411 2T',        'ZHITAI TI600 1T QLC',
];
const scores: Array<number[]> = [
 [ // PCMark 10 Full Storage Zero
    3672, 2712, 1857, 1714, 2702, 1393, 6005, 621,  1389, 8865, 2770,
    3790, 854,  1596, 1198, 1325, 3434, 3920, 910,  1110, 2130, 2301,
    3070, 1449, 2874, 2677, 4197, 1947, 3509, 3443, 3880, 3763
  ],
  [ // PCMark 10 Full Storage 75%
    3787, 2372, 1508, 829,  2018, 1395, NaN,  NaN,  1375, 8790, 2744,
    3783, 753,  1500, NaN,  NaN,  2546, 3528, NaN,  1110, NaN,  NaN,
    2364, 1437, 2466, 2430, 3664, 1919, 3425, 3416, 3804, 2560
  ],
  [ // 3DMARK STORAGE Zero
    4160, 3129, 2507, 2233, 3098, 1333, 5403, 653,  1460, 7967, 3332,
    5196, 942,  1750, 1700, NaN,  3563, 4336, 971,  1184, 3294, 3525,
    2792, 1693, 2593, 2452, 3440, 2440, 4016, 4154, 3915, 4152
  ],
  [ // 3DMARK STORAGE 75%
    4161, 3125, 2449, 1472, 3035, 1321, NaN,  NaN,  1474, 8955, 3321,
    5197, 941,  1738, NaN,  NaN,  3089, 4271, NaN,  1288, NaN,  NaN,
    2393, 1694, 2562, 2449, 3337, 2449, 3897, 4178, 3726, 2738
  ],
  [ // SPEC Workstation 3.1 Storage zero
    36.91, 15.35, NaN,   12.5,  21.61, NaN,   40.12, NaN,   NaN,  64.03, 36.76,
    41.83, 7.45,  16.01, 18.33, 21.35, 21.18, 35,    NaN,   9.57, 26.88, 29.55,
    36.43, 14.29, 24.36, 16.87, 26.1,  16.28, 31.17, 28.02, 18.5, 20.04
  ],
  [ // SPEC Workstation 3.1 Storage 75%
    36.27, 16.93, ,      11.59, 19.68, NaN,   NaN,   NaN,   NaN,   63.84, 36.02,
    42.09, 7.71,  15.71, NaN,   NaN,   21.07, 35.4,  NaN,   9.32,  NaN,   NaN,
    28.7,  14.95, 23.35, 16.14, 24.78, 16.93, 29.97, 27.69, 18.06, 19.3
  ],
];
export const Data = () => ({
  labels: names,
   datasets: [
    {
      label: 'PCMark 10 Full Storage Zero (/100)',
      backgroundColor: '#f87979',
      data: scores[0].map(scaledScore),
      borderRadius: 5,
    },
    {
      label: 'PCMark 10 Full Storage 75% (/100)',
      backgroundColor: '#5C0404',
      data: scores[1].map(scaledScore),
      borderRadius: 5,
    },
    {
      label: '3DMARK STORAGE ZERO (/100)',
      backgroundColor: '#FFA500',
      data: scores[2].map(scaledScore),
      borderRadius: 5,
    },
    {
      label: '3DMARK STORAGE 75% (/100)',
      backgroundColor: '#72451E',
      data: scores[3].map(scaledScore),
      borderRadius: 5,
    },
    {
      label: 'SPEC Workstation 3.1 Storage zero',
      data: scores[4],
      backgroundColor: '#64C6DA',
      borderRadius: 5,
    },
    {
      label: 'SPEC Workstation 3.1 Storage 75%',
      data: scores[5],
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
