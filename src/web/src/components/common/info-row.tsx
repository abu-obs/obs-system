import { cn } from '@/lib/utils';

export interface InfoRowProps {
  /** Sol tarafta gösterilecek ikon */
  icon: React.ReactNode;
  /** Bilgi metni */
  children: React.ReactNode;
  /** Ek CSS sınıfları */
  className?: string;
}

/**
 * InfoRow — İkon + metin bilgi satırı.
 *
 * Kaynak: Dashboard danışman kartındaki iletişim satırları
 * (email, telefon, oda, görüşme saatleri).
 *
 * Kullanım:
 * ```tsx
 * <InfoRow icon={<Mail className="h-4 w-4" />}>
 *   ahmet.yilmaz@university.edu
 * </InfoRow>
 * ```
 */
export function InfoRow({ icon, children, className }: InfoRowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-sm text-muted-foreground',
        className,
      )}
    >
      <span className="shrink-0 text-muted-foreground">{icon}</span>
      <span className="min-w-0 truncate">{children}</span>
    </div>
  );
}
