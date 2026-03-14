import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  /** Sol ikon (genellikle Lucide ikon veya Avatar) */
  icon?: React.ReactNode;
  /** Ana başlık */
  title: string;
  /** Üst başlık altındaki alt metin (ör: bölüm adı) */
  subtitle?: string;
  /** Sağ tarafa yerleştirilecek aksiyon (ör: Badge, Button) */
  action?: React.ReactNode;
  /** Ek CSS sınıfları */
  className?: string;
}

/**
 * SectionHeader — İkon + başlık + opsiyonel alt başlık + opsiyonel sağ aksiyon.
 *
 * Kaynak: Dashboard danışman kartı başlığı ("Danışman Bilgileri / BİLGİSAYAR MÜHENDİSLİĞİ")
 * ve harç kartı başlığı ("Harç Bilgileri" + Ödenmedi badge).
 *
 * Kullanım:
 * ```tsx
 * <SectionHeader
 *   icon={<Users className="h-5 w-5" />}
 *   title="Danışman Bilgileri"
 *   subtitle="BİLGİSAYAR MÜHENDİSLİĞİ"
 *   action={<Badge variant="destructive">Ödenmedi</Badge>}
 * />
 * ```
 */
export function SectionHeader({
  icon,
  title,
  subtitle,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-sm font-bold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
