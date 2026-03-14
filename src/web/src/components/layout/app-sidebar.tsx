import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Settings,
  Users,
  BookOpen,
  FileText,
  User,
  GraduationCap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  SidebarNavItem,
  SidebarNavSubItem,
} from '@/components/layout/sidebar-nav-item';

interface NavItemConfig {
  title: string;
  href?: string;
  icon: React.ReactNode;
  children?: { title: string; href: string }[];
}

const navItems: NavItemConfig[] = [
  {
    title: 'Ana Sayfa',
    href: '/dashboard',
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: 'Genel İşlemler',
    icon: <Settings className="h-5 w-5" />,
    children: [
      { title: 'Profil Bilgileri', href: '/dashboard/profile' },
      { title: 'Şifre Değiştir', href: '/dashboard/change-password' },
    ],
  },
  {
    title: 'Akademik Kadro',
    icon: <Users className="h-5 w-5" />,
    children: [
      { title: 'Öğretim Üyeleri', href: '/dashboard/academics' },
      { title: 'Danışman Bilgileri', href: '/dashboard/advisor' },
    ],
  },
  {
    title: 'Ders ve Dönem İşlemleri',
    icon: <BookOpen className="h-5 w-5" />,
    children: [
      { title: 'Ders Kaydı', href: '/dashboard/enrollment' },
      { title: 'Ders Programı', href: '/dashboard/schedule' },
      { title: 'Not Görüntüleme', href: '/dashboard/grades' },
      { title: 'Transkript', href: '/dashboard/transcript' },
    ],
  },
  {
    title: 'Başvuru İşlemleri',
    icon: <FileText className="h-5 w-5" />,
    children: [
      { title: 'Belge Talepleri', href: '/dashboard/documents' },
      { title: 'Dilekçeler', href: '/dashboard/petitions' },
    ],
  },
  {
    title: 'Kullanıcı İşlemleri',
    icon: <User className="h-5 w-5" />,
    children: [
      { title: 'Hesap Ayarları', href: '/dashboard/settings' },
    ],
  },
];

export interface AppSidebarProps {
  /** Sidebar açık mı? (mobil için) */
  isOpen: boolean;
  /** Kapatma callback */
  onClose: () => void;
}

/**
 * AppSidebar — Sidebar layout container.
 *
 * SidebarNavItem ve SidebarNavSubItem bileşenlerini kullanarak
 * navigasyon menüsünü oluşturur. Sayfa değil, layout bileşenidir.
 *
 * Kaynak: Figma dashboard sol paneli.
 */
export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title],
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-full w-[260px] flex-col bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:translate-x-0 lg:z-30',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 px-6 py-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-white">Ankara Bilim Üniversitesi</p>
            <p className="text-xs text-white/60">Öğrenci Bilgi Sistemi</p>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Navigation — SidebarNavItem bileşenlerinden oluşuyor */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.href
                ? location.pathname === item.href
                : item.children?.some((c) => location.pathname === c.href);
              const isExpanded = expandedItems.includes(item.title);

              return (
                <div key={item.title}>
                  {item.href ? (
                    <Link to={item.href} onClick={onClose} className="block">
                      <SidebarNavItem
                        icon={item.icon}
                        label={item.title}
                        isActive={!!isActive}
                      />
                    </Link>
                  ) : (
                    <>
                      <SidebarNavItem
                        icon={item.icon}
                        label={item.title}
                        isActive={!!isActive}
                        hasChildren
                        isExpanded={isExpanded}
                        onClick={() => toggleExpand(item.title)}
                      />
                      {isExpanded && item.children && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={onClose}
                              className="block"
                            >
                              <SidebarNavSubItem
                                label={child.title}
                                isActive={location.pathname === child.href}
                              />
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
