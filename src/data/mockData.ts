// Real current dynagram data
const realCurrentData = [
  { position: 0, load: 0.295894 }, { position: 0.046836, load: 0.391887 }, { position: 0.28227, load: 0.405442 },
  { position: 0.588655, load: 0.598934 }, { position: 0.993968, load: 0.663023 }, { position: 1.421863, load: 0.992139 },
  { position: 1.87849, load: 1.143802 }, { position: 2.413153, load: 1.448913 }, { position: 2.975248, load: 1.524915 },
  { position: 3.637459, load: 1.66432 }, { position: 4.389342, load: 1.919785 }, { position: 5.139076, load: 2.054948 },
  { position: 5.890949, load: 2.082031 }, { position: 6.673648, load: 2.20167 }, { position: 7.482843, load: 2.295534 },
  { position: 8.404287, load: 2.452399 }, { position: 9.486096, load: 2.55741 }, { position: 10.741275, load: 2.634668 },
  { position: 12.220763, load: 2.597465 }, { position: 13.937057, load: 2.604853 }, { position: 15.867846, load: 2.609819 },
  { position: 17.979701, load: 2.625911 }, { position: 20.236626, load: 2.659579 }, { position: 22.624179, load: 2.618046 },
  { position: 25.167048, load: 2.6174 }, { position: 27.85192, load: 2.687407 }, { position: 30.644899, load: 2.689746 },
  { position: 33.495878, load: 2.6987 }, { position: 36.33839, load: 2.607645 }, { position: 39.127823, load: 2.63261 },
  { position: 41.825558, load: 2.595627 }, { position: 44.38243, load: 2.607821 }, { position: 46.781508, load: 2.65649 },
  { position: 49.072444, load: 2.653887 }, { position: 51.311307, load: 2.637749 }, { position: 53.497264, load: 2.68584 },
  { position: 55.578059, load: 2.702268 }, { position: 57.54404, load: 2.61765 }, { position: 59.421812, load: 2.576158 },
  { position: 61.213603, load: 2.650444 }, { position: 62.939292, load: 2.657238 }, { position: 64.66429, load: 2.682944 },
  { position: 66.44925, load: 2.755052 }, { position: 68.294696, load: 2.723772 }, { position: 70.20302, load: 2.658943 },
  { position: 72.187034, load: 2.682351 }, { position: 74.192489, load: 2.753071 }, { position: 76.16821, load: 2.71615 },
  { position: 78.110123, load: 2.622873 }, { position: 80.029159, load: 2.692295 }, { position: 81.937034, load: 2.766675 },
  { position: 83.817542, load: 2.748032 }, { position: 85.628219, load: 2.680967 }, { position: 87.338328, load: 2.693461 },
  { position: 88.896992, load: 2.724438 }, { position: 90.237778, load: 2.616849 }, { position: 91.358066, load: 2.648597 },
  { position: 92.265746, load: 2.767535 }, { position: 92.946798, load: 2.748065 }, { position: 93.441982, load: 2.670168 },
  { position: 93.808822, load: 2.679553 }, { position: 94.048776, load: 2.76698 }, { position: 94.13526, load: 2.615923 },
  { position: 94.095945, load: 2.543749 }, { position: 93.955499, load: 2.542676 }, { position: 93.724288, load: 2.586587 },
  { position: 93.442035, load: 2.598472 }, { position: 93.147638, load: 2.572568 }, { position: 92.884043, load: 2.609514 },
  { position: 92.671662, load: 2.579038 }, { position: 92.50677, load: 2.515077 }, { position: 92.357099, load: 2.537714 },
  { position: 92.176071, load: 2.531631 }, { position: 91.915066, load: 2.476186 }, { position: 91.591976, load: 2.332598 },
  { position: 91.255668, load: 2.41589 }, { position: 90.887494, load: 2.457641 }, { position: 90.448453, load: 2.3801 },
  { position: 89.936968, load: 2.312415 }, { position: 89.340196, load: 2.348897 }, { position: 88.58446, load: 2.342797 },
  { position: 87.658001, load: 2.24022 }, { position: 86.608327, load: 2.268172 }, { position: 85.428679, load: 2.350694 },
  { position: 84.128174, load: 2.233557 }, { position: 82.782251, load: 2.151066 }, { position: 81.425784, load: 2.211041 },
  { position: 80.026336, load: 2.216575 }, { position: 78.585088, load: 2.041885 }, { position: 77.147571, load: 1.94513 },
  { position: 75.741495, load: 1.992912 }, { position: 74.379668, load: 1.919814 }, { position: 73.101995, load: 1.75443 },
  { position: 71.944421, load: 1.701362 }, { position: 70.888671, load: 1.643284 }, { position: 69.915327, load: 1.490096 },
  { position: 69.003864, load: 1.323374 }, { position: 68.105747, load: 1.312295 }, { position: 67.196242, load: 1.221637 },
  { position: 66.276592, load: 1.01234 }, { position: 65.339671, load: 0.851989 }, { position: 64.397349, load: 0.803022 },
  { position: 63.418291, load: 0.672975 }, { position: 62.321672, load: 0.474452 }, { position: 61.061757, load: 0.358502 },
  { position: 59.608462, load: 0.428745 }, { position: 57.924199, load: 0.411057 }, { position: 56.003521, load: 0.320215 },
  { position: 53.921196, load: 0.283246 }, { position: 51.742057, load: 0.316388 }, { position: 49.46797, load: 0.261005 },
  { position: 47.074574, load: 0.132694 }, { position: 44.561932, load: 0.104038 }, { position: 41.935952, load: 0.124295 },
  { position: 39.208592, load: 0 }, { position: 36.47889, load: 0.028887 }, { position: 33.85334, load: 0.14037 },
  { position: 31.348128, load: 0.147737 }, { position: 28.972698, load: 0.027269 }, { position: 26.767789, load: 0.037687 },
  { position: 24.697304, load: 0.05819 }, { position: 22.704857, load: -0.023169 }, { position: 20.800652, load: 0.032275 },
  { position: 18.969165, load: 0.058821 }, { position: 17.208724, load: -0.014002 }, { position: 15.590462, load: 0.022088 },
  { position: 14.117818, load: 0.070966 }, { position: 12.730273, load: 0.008949 }, { position: 11.425397, load: -0.048011 },
  { position: 10.161914, load: -0.025554 }, { position: 8.882445, load: -0.072263 }, { position: 7.628208, load: -0.068578 },
  { position: 6.422579, load: 0.039941 }, { position: 5.255963, load: 0.015389 }, { position: 4.190937, load: 0.069194 },
  { position: 3.214385, load: 0.013634 }, { position: 2.354391, load: 0.197325 }, { position: 1.609112, load: 0.043652 },
  { position: 0.965416, load: 0.073819 }, { position: 0.511445, load: 0.076522 }, { position: 0.189752, load: 0.110172 }
];

// Normalize the real data to 0-1 range
const normalizeData = (data: typeof realCurrentData) => {
  const maxPosition = Math.max(...data.map(d => d.position));
  const minPosition = Math.min(...data.map(d => d.position));
  const maxLoad = Math.max(...data.map(d => d.load));
  const minLoad = Math.min(...data.map(d => d.load));
  
  return data.map(d => ({
    position: (d.position - minPosition) / (maxPosition - minPosition),
    load: (d.load - minLoad) / (maxLoad - minLoad)
  }));
};

const normalizedCurrentData = normalizeData(realCurrentData);

// Generate normalized dynagram data
export const generateDynagramData = (seed: number) => {
  if (seed === 0) {
    // Return real current data (normalized)
    return normalizedCurrentData;
  }
  
  // Generate synthetic anomaly patterns
  const data = [];
  for (let i = 0; i <= 100; i++) {
    const position = i / 100;
    let load = 0;
    
    if (seed === 1) {
      // Leak_Up anomaly
      load = 1 / (1 + Math.exp(-10 * (position - 0.7))) - 0.1 * Math.sin(position * 10);
    } else if (seed === 2) {
      // Leak_dw anomaly
      load = 1 / (1 + Math.exp(-8 * (position - 0.4))) + 0.05 * Math.cos(position * 8);
    } else if (seed === 3) {
      // Separation anomaly
      load = position < 0.3 ? 0.05 : (1 / (1 + Math.exp(-15 * (position - 0.6))));
    }
    
    data.push({
      position: parseFloat(position.toFixed(3)),
      load: parseFloat(Math.max(0, Math.min(1, load)).toFixed(3))
    });
  }
  return data;
};

export const anomalyTypes = [
  { id: 'A1', type: 'C1: Leak_Up', color: 'hsl(var(--chart-1))', x: 1.35, y: 1.02, distance: 0.245 },
  { id: 'A2', type: 'C2: Leak_dw', color: 'hsl(var(--chart-2))', x: 1.55, y: 0.92, distance: 0.312 },
  { id: 'A3', type: 'C3: Separation', color: 'hsl(var(--chart-3))', x: 0.98, y: 0.88, distance: 0.189 },
  { id: 'A4', type: 'C4: Tubing_par', color: 'hsl(var(--chart-4))', x: 1.62, y: 0.90, distance: 0.421 },
  { id: 'A5', type: 'C5: Tubing_hol', color: 'hsl(var(--chart-5))', x: 1.48, y: 0.87, distance: 0.356 },
  { id: 'A6', type: 'C6: Dress_well', color: 'hsl(0 75% 55%)', x: 1.15, y: 0.78, distance: 0.289 },
  { id: 'A7', type: 'C7: Flow_line', color: 'hsl(165 75% 45%)', x: 1.05, y: 1.00, distance: 0.134 },
  { id: 'A8', type: 'C8: Average', color: 'hsl(285 75% 55%)', x: 1.25, y: 0.92, distance: 0.198 },
  { id: 'A9', type: 'C9: Leak_TV', color: 'hsl(45 85% 55%)', x: 1.40, y: 0.88, distance: 0.267 },
  { id: 'A10', type: 'C10: Broken_rod', color: 'hsl(335 75% 55%)', x: 1.58, y: 0.78, distance: 0.398 },
  { id: 'A11', type: 'C11: Pumping', color: 'hsl(215 55% 45%)', x: 1.68, y: 0.86, distance: 0.445 },
];

export const currentPoint = { x: 1.1, y: 0.96 };

export const closestAnomalies = anomalyTypes
  .sort((a, b) => a.distance - b.distance)
  .slice(0, 3);
