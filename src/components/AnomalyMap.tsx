import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceDot } from 'recharts';
import { Card } from '@/components/ui/card';

interface AnomalyPoint {
  id: string;
  x: number;
  y: number;
  type: string;
  color: string;
}

interface AnomalyMapProps {
  anomalies: AnomalyPoint[];
  currentPoint: { x: number; y: number };
  highlightedId: string | null;
}

export const AnomalyMap = ({ anomalies, currentPoint, highlightedId }: AnomalyMapProps) => {
  return (
    <Card className="p-4 bg-card border-border h-full">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Atlas de Anomalías</h3>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" opacity={0.3} />
          <XAxis 
            type="number" 
            dataKey="x" 
            domain={[0.8, 1.7]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            stroke="hsl(var(--border))"
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            domain={[0.8, 1.15]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            stroke="hsl(var(--border))"
          />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              fontSize: '12px'
            }}
          />
          {/* Reference circle for radius */}
          <ReferenceDot 
            x={1.1} 
            y={1.0} 
            r={80} 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeDasharray="5 5"
            strokeWidth={2}
            opacity={0.4}
          />
          {/* Current point (black diamond) */}
          <Scatter 
            name="Actual" 
            data={[currentPoint]} 
            fill="hsl(var(--chart-current))"
            shape="diamond"
            legendType="diamond"
          >
            <Cell fill="hsl(var(--foreground))" />
          </Scatter>
          {/* Anomaly points */}
          <Scatter name="Anomalías" data={anomalies}>
            {anomalies.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                opacity={highlightedId === entry.id ? 1 : 0.7}
                stroke={highlightedId === entry.id ? 'hsl(var(--foreground))' : 'none'}
                strokeWidth={highlightedId === entry.id ? 2 : 0}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </Card>
  );
};
