import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

export function StatCard({ icon, label, value, className }: StatCardProps) {
  return (
    <Card className={cn('flex items-center gap-4 p-5', className)}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-lg font-bold text-foreground truncate">{value}</p>
      </div>
    </Card>
  );
}
