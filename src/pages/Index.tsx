import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1280px] mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Panel de Análisis de Dinagramas
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Transición de dinagrama a golpe de fluido normalizado
          </p>
        </header>

        <div className="grid grid-cols-2 gap-6 mb-6" style={{ height: '450px' }}>
          {/* Left: Dynagrams */}
          <div className="space-y-3 overflow-y-auto">
            <DynagramChart
              data={currentData}
              color="hsl(var(--chart-current))"
              title="Dinagrama Actual"
              isVisible={true}
            />
            {closestAnomalies.map((anomaly, index) => (
              <DynagramChart
                key={anomaly.id}
                data={generateDynagramData(index + 1)}
                color={anomaly.color}
                title={anomaly.type}
                isVisible={visibleAnomalies.has(anomaly.id)}
              />
            ))}
          </div>

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
