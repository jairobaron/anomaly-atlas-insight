import { mockAchoredTubingDfl } from './mockAchoredTubingDfl';
import { mockActionErraticTv } from './mockActionErraticTv';
import { realCurrentData } from './mockRealCurrentData';

// Normalize data to 0-1 range
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
const normalizedAnchoredTubingDfl = normalizeData(mockAchoredTubingDfl);
const normalizedActionErraticTv = normalizeData(mockActionErraticTv);

// Generate dynagram data in real scale
export const generateDynagramData = (seed: number) => {
  if (seed === 0) {
    // Return real current data
    return normalizedCurrentData;
  }
  if (seed == 1) {
    return normalizedCurrentData;
  }
  if (seed == 2) {
    return normalizedAnchoredTubingDfl;
  }
  if (seed == 3) {
    return normalizedActionErraticTv;
  }
};

export const anomalyTypes = [
  // Distancia corregida al punto (-1.53, -0.13)
  { id: 'A1', type: 'C1: Action Erratic TV', color: 'hsl(var(--chart-1))', x: -1.58, y: 0.81, distance: 0.94 },
  { id: 'A2', type: 'C2: Anchored Tubing DFL', color: 'hsl(var(--chart-2))', x: -1.57, y: 0.37, distance: 0.50 },
  { id: 'A3', type: 'C3: Asphaltenes', color: 'hsl(var(--chart-3))', x: -4.95, y: -1.13, distance: 3.56 }, // Corregido (antes 3.65)
  { id: 'A4', type: 'C4: Average Well', color: 'hsl(var(--chart-4))', x: -1.53, y: -0.13, distance: 0.00 },
  { id: 'A5', type: 'C5: Broken Sucker Rod', color: 'hsl(var(--chart-5))', x: 3.19, y: -2.04, distance: 5.09 }, // Corregido (antes 5.16)
  { id: 'A6', type: 'C6: Deep Well', color: 'hsl(0 75% 55%)', x: -2.01, y: 2.25, distance: 2.43 }, // Corregido (antes 2.38)
  { id: 'A7', type: 'C7: Delayed TV Closure', color: 'hsl(165 75% 45%)', x: 3.13, y: -0.06, distance: 4.66 }, // Corregido (antes 4.67)
  { id: 'A8', type: 'C8: Fluid Pound OU', color: 'hsl(285 75% 55%)', x: -0.42, y: 5.98, distance: 6.21 }, // Corregido (antes 6.07)
  { id: 'A9', type: 'C9: Flumping', color: 'hsl(45 85% 55%)', x: -4.34, y: -3.91, distance: 4.71 }, // Corregido (antes 4.88)
  { id: 'A10', type: 'C10: Gas Interference', color: 'hsl(335 75% 55%)', x: -4.44, y: 0.97, distance: 3.11 }, // Corregido (antes 3.14)
  { id: 'A11', type: 'C11: Gas Lock', color: 'hsl(215 55% 45%)', x: 3.12, y: 0.80, distance: 4.74 }, // Corregido (antes 4.79)
  { id: 'A12', type: 'C12: Gunk In Pump', color: 'hsl(15 75% 55%)', x: -4.89, y: -0.20, distance: 3.36 },
  { id: 'A13', type: 'C13: High Viscosity', color: 'hsl(90 70% 50%)', x: 3.03, y: -0.79, distance: 4.61 },
  { id: 'A14', type: 'C14: Leak Tubing Hole', color: 'hsl(255 70% 60%)', x: -0.20, y: -1.90, distance: 2.22 }, // Corregido (antes 1.97)
  { id: 'A15', type: 'C15: Leaking SV', color: 'hsl(300 65% 55%)', x: -0.39, y: 0.79, distance: 1.47 }, // Corregido (antes 1.40)
  { id: 'A16', type: 'C16: Leaking TV', color: 'hsl(60 80% 50%)', x: -0.39, y: 0.58, distance: 1.35 }, // Corregido (antes 1.25)
  { id: 'A17', type: 'C17: Mild Fluid Pound UT', color: 'hsl(120 70% 45%)', x: 0.91, y: 0.70, distance: 2.58 }, // Corregido (antes 2.65)
  { id: 'A18', type: 'C18: Paraffin Wax', color: 'hsl(195 75% 50%)', x: 3.26, y: -0.04, distance: 4.79 },
  { id: 'A19', type: 'C19: Plunger Fixed Valve Collision', color: 'hsl(30 75% 55%)', x: 3.13, y: -0.04, distance: 4.66 },
  { id: 'A20', type: 'C20: Plunger Guide Ring Collision', color: 'hsl(270 65% 50%)', x: 3.09, y: 0.17, distance: 4.63 }, // Corregido (antes 4.64)
  { id: 'A21', type: 'C21: Plunger Sticking', color: 'hsl(75 70% 50%)', x: 3.08, y: 0.28, distance: 4.63 }, // Corregido (antes 4.64)
  { id: 'A22', type: 'C22: Rod Excessive Vibration', color: 'hsl(345 75% 55%)', x: 3.24, y: -1.58, distance: 4.98 }, // Corregido (antes 5.09)
  { id: 'A23', type: 'C23: Sand Problem', color: 'hsl(150 65% 45%)', x: 3.13, y: -0.52, distance: 4.68 }, // Corregido (antes 4.67)
  { id: 'A24', type: 'C24: Severe Fluid Pound UT', color: 'hsl(240 70% 55%)', x: 0.56, y: 1.19, distance: 2.48 }, // Corregido (antes 2.37)
  { id: 'A25', type: 'C25: Small Plunger', color: 'hsl(10 80% 50%)', x: 3.29, y: -0.61, distance: 4.84 }, // Corregido (antes 4.80)
  { id: 'A26', type: 'C26: Tagging Down Hard', color: 'hsl(175 60% 40%)', x: -2.83, y: 0.20, distance: 1.34 },
  { id: 'A27', type: 'C27: Tagging Fiberglass Rods', color: 'hsl(225 50% 60%)', x: -4.07, y: -0.48, distance: 2.56 }, // Corregido (antes 2.58)
  { id: 'A28', type: 'C28: Trash Stick SV', color: 'hsl(315 70% 50%)', x: -0.82, y: 0.15, distance: 0.76 }, // Corregido (antes 0.81)
  { id: 'A29', type: 'C29: Unanchored Tubing', color: 'hsl(40 90% 50%)', x: -1.75, y: 1.10, distance: 1.25 }, // Corregido (antes 1.14)
];

export const currentPoint = { x: -1.53, y: - 0.13 };

export const closestAnomalies = [
  { id: 'A4', type: 'C4: Average Well', color: 'hsl(var(--chart-4))', x: -1.53, y: -0.13, distance: 0.61 },
  { id: 'A2', type: 'C2: Anchored Tubing DFL', color: 'hsl(var(--chart-2))', x: -1.57, y: 0.37, distance: 0.67 },
  { id: 'A1', type: 'C1: Action Erratic TV', color: 'hsl(var(--chart-1))', x: -1.58, y: 0.81, distance: 0.86 },
];
{/*
export const closestAnomalies = anomalyTypes
  .sort((a, b) => a.distance - b.distance)
  .slice(0, 3);
*/}