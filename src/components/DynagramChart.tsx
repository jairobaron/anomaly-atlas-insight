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
  const dataPoint: Record<string, number> = { position }; // <-- Punto 1
  series.forEach((s) => {
    if (s.isVisible) {
      dataPoint[s.id] = s.data[index]; // <-- Punto 2
    }
  });
  return dataPoint;
});

const primerPuntoDeDatos = chartData[0];
  if (primerPuntoDeDatos) {
    // 💡 Asegurar que el punto final tenga el último índice + 1
    const lastIndex = chartData.length;
    chartData.push({ 
        ...primerPuntoDeDatos, 
        index: lastIndex // <-- CLAVE: Asignar un índice secuencial único
  }); 
}

  const visibleSeries = series.filter((s) => s.isVisible);

  return (
    <Card className="p-4 bg-card border-border h-full">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">
        Diagnóstico Dinagrama de Fondo
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" opacity={0.3} />
          <XAxis
            dataKey="position"
            type="number"
            domain={['dataMin', 'dataMax']}
            ticks={[0, 0.25, 0.50, 0.75, 1]}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            stroke="hsl(var(--border))"
            label={{ value: 'Posición', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <YAxis
            domain={['dataMin', 'dataMax']}
            ticks={[0, 0.25, 0.50, 0.75, 1]}
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
              type="linear"
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
