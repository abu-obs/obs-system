import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SidebarNavItemProps {
  /** Sol ikon */
  icon: React.ReactNode;
  /** Menü kalemi metni */
  label: string;
  /** Aktif (seçili) durumu */
  isActive?: boolean;
  /** Alt menüsü olan öğeler için: açık/kapalı */
  isExpanded?: boolean;
  /** Alt menüsü var mı? (chevron göster) */
  hasChildren?: boolean;
  /** Tıklama handler */
  onClick?: () => void;
  /** Ek CSS sınıfları */
  className?: string;
}

/**
 * SidebarNavItem — Tekil sidebar navigasyon kalemi.
 *
 * Kaynak: Dashboard sol paneldeki menü kalemleri
 * (Ana Sayfa, Genel İşlemler, Akademik Kadro, vb.)
 *
 * Aktif, pasif, açık/kapalı (collapsible) durumlarını destekler.
 * Doğrudan <a>, <Link> veya <button> olarak kullanılabilir.
 *
 * Kullanım:
 * ```tsx
 * <SidebarNavItem
 *   icon={<Home className="h-5 w-5" />}
 *   label="Ana Sayfa"
 *   isActive={true}
 *   onClick={() => navigate('/dashboard')}
 * />
 *
 * <SidebarNavItem
 *   icon={<Settings className="h-5 w-5" />}
 *   label="Genel İşlemler"
 *   hasChildren
 *   isExpanded={expanded}
 *   onClick={() => setExpanded(!expanded)}
 * />
 * ```
 */
export function SidebarNavItem({
  icon,
  label,
  isActive = false,
  isExpanded = false,
  hasChildren = false,
  onClick,
  className,
}: SidebarNavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
        isActive
          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
          : 'text-white/70 hover:bg-sidebar-accent/50 hover:text-white',
        className,
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1 text-left truncate">{label}</span>
      {hasChildren &&
        (isExpanded ? (
          <ChevronDown className="h-4 w-4 shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0" />
        ))}
    </button>
  );
}

/* -------------------------------------------------- */

export interface SidebarNavSubItemProps {
  /** Alt menü metin */
  label: string;
  /** Aktif (seçili) durumu */
  isActive?: boolean;
  /** Tıklama handler */
  onClick?: () => void;
  /** Ek CSS sınıfları */
  className?: string;
}

/**
 * SidebarNavSubItem — Açılır alt menü kalemi.
 *
 * Kaynak: Dashboard "Ders ve Dönem İşlemleri" altındaki
 * "Ders Kaydı", "Ders Programı", "Not Görüntüleme", "Transkript" gibi alt kalemler.
 */
export function SidebarNavSubItem({
  label,
  isActive = false,
  onClick,
  className,
}: SidebarNavSubItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
        isActive
          ? 'text-white font-medium'
          : 'text-white/50 hover:text-white/80',
        className,
      )}
    >
      {label}
    </button>
  );
}
