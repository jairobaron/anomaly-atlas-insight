import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Anomaly {
  id: string;
  type: string;
  distance: number;
  color: string;
  isVisible: boolean;
}

interface AnomalyListProps {
  anomalies: Anomaly[];
  onToggle: (id: string) => void;
}

export const AnomalyList = ({ anomalies, onToggle }: AnomalyListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {anomalies.map((anomaly) => (
        <Card 
          key={anomaly.id}
          className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
            anomaly.isVisible 
              ? 'border-primary border-2 bg-primary/5' 
              : 'border-border hover:border-primary/50'
          }`}
          onClick={() => onToggle(anomaly.id)}
        >
          <div className="flex items-center justify-between mb-2">
            <Badge 
              className="text-xs font-medium"
              style={{ 
                backgroundColor: anomaly.color,
                color: 'white'
              }}
            >
              {anomaly.type}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {anomaly.distance.toFixed(3)}
            </span>
          </div>
          <p className="text-sm text-foreground font-medium">
            {anomaly.isVisible ? 'Ocultar' : 'Mostrar'} diagrama
          </p>
        </Card>
      ))}
    </div>
  );
};
