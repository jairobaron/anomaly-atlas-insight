// Generate normalized dynagram data
export const generateDynagramData = (seed: number) => {
  const data = [];
  for (let i = 0; i <= 100; i++) {
    const position = i / 100;
    let load = 0;
    
    // Different curve patterns based on seed
    if (seed === 0) {
      // Current - smooth S-curve
      load = 1 / (1 + Math.exp(-12 * (position - 0.5)));
    } else if (seed === 1) {
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
