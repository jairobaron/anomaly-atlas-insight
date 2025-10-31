import { useState, useMemo } from 'react';
import { DynagramChart } from '@/components/DynagramChart';
import { AnomalyMap } from '@/components/AnomalyMap';
import { AnomalyList } from '@/components/AnomalyList';
import { generateDynagramData, anomalyTypes, currentPoint, closestAnomalies } from '@/data/mockData';

const Index = () => {
  const [visibleAnomalies, setVisibleAnomalies] = useState<Set<string>>(
    new Set(['A7', 'A8', 'A3']) // Show closest 3 by default
  );
  const [highlightedAnomaly, setHighlightedAnomaly] = useState<string | null>(null);

  const currentData = generateDynagramData(0);
  const positions = currentData.map((d) => d.position);

  const toggleAnomaly = (id: string) => {
    const newVisible = new Set(visibleAnomalies);
    if (newVisible.has(id)) {
      newVisible.delete(id);
      setHighlightedAnomaly(null);
    } else {
      newVisible.add(id);
      setHighlightedAnomaly(id);
    }
    setVisibleAnomalies(newVisible);
  };

  const anomalyListData = closestAnomalies.map((anomaly) => ({
    ...anomaly,
    isVisible: visibleAnomalies.has(anomaly.id),
  }));

  // Prepare series data for the combined chart
  const chartSeries = useMemo(() => {
    const series = [
      {
        id: 'current',
        name: 'Actual',
        color: 'hsl(var(--chart-current))',
        data: currentData.map((d) => d.load),
        isVisible: true, // Always visible
      },
      ...closestAnomalies.map((anomaly, index) => {
        const data = generateDynagramData(index + 1);
        return {
          id: anomaly.id,
          name: anomaly.type,
          color: anomaly.color,
          data: data.map((d) => d.load),
          isVisible: visibleAnomalies.has(anomaly.id),
        };
      }),
    ];
    return series;
  }, [visibleAnomalies, currentData]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1280px] mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Panel de Análisis de Dinagramas
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Comparación de dinagramas normalizados
          </p>
        </header>

        <div className="grid grid-cols-2 gap-6 mb-6" style={{ height: '450px' }}>
          {/* Left: Combined Dynagram Chart */}
          <DynagramChart series={chartSeries} positions={positions} />

          {/* Right: Anomaly Map */}
          <AnomalyMap
            anomalies={anomalyTypes}
            currentPoint={currentPoint}
            highlightedId={highlightedAnomaly}
          />
        </div>

        {/* Bottom: Anomaly List */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            3 Anomalías Más Cercanas
          </h2>
          <AnomalyList
            anomalies={anomalyListData}
            onToggle={toggleAnomaly}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
