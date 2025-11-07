import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from '@/components/ui/card';

interface DynagramSeries {
  id: string;
  name: string;
  color: string;
  data: number[];
  isVisible: boolean;
}

interface DynagramChartProps {
  series: DynagramSeries[];
  positions: number[];
}

export const DynagramChart = ({ series, positions }: DynagramChartProps) => {
  // Combine all series data into a single dataset
  const chartData = positions.map((position, index) => {
    const dataPoint: any = { position };
    series.forEach((s) => {
      if (s.isVisible) {
        dataPoint[s.id] = s.data[index];
      }
    });
    return dataPoint;
  });

  const visibleSeries = series.filter((s) => s.isVisible);

  return (
    <Card className="p-4 bg-card border-border h-full">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">
        Transición de Dinagrama a Golpe de Fluido Normalizado
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" opacity={0.3} />
          <XAxis 
            dataKey="position" 
            domain={[0, 100]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            stroke="hsl(var(--border))"
            label={{ value: 'Posición', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <YAxis 
            domain={[-0.5, 3]}
            ticks={[-0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            stroke="hsl(var(--border))"
            label={{ value: 'Carga', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              fontSize: '12px'
            }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '11px' }}
            iconType="line"
          />
          {visibleSeries.map((s) => (
            <Line
              key={s.id}
              type="monotone"
              dataKey={s.id}
              name={s.name}
              stroke={s.color}
              strokeWidth={s.id === 'current' ? 3 : 2}
              dot={false}
              opacity={s.id === 'current' ? 1 : 0.85}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
