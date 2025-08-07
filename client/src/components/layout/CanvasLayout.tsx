import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  MessageSquare,
  Award,
  Settings,
  BarChart3,
  Video,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';

interface CanvasLayoutProps {
  children: ReactNode;
}

// Navigation items based on user role
const getNavigationItems = (userRole: string | undefined) => {
  const baseItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', id: 'home' },
    { icon: BookOpen, label: 'Courses', path: '/courses', id: 'courses' },
    { icon: Calendar, label: 'Calendar', path: '/calendar', id: 'calendar' },
    { icon: MessageSquare, label: 'Discussions', path: '/discussions', id: 'discussions' },
    { icon: Award, label: 'Grades', path: '/grades', id: 'grades' },
    { icon: FileText, label: 'Files', path: '/files', id: 'files' },
  ];

  // Role-specific items
  const roleItems: Record<string, any[]> = {
    lecturer: [
      { icon: Users, label: 'People', path: '/people', id: 'people' },
      { icon: BarChart3, label: 'Analytics', path: '/analytics', id: 'analytics' },
      { icon: Video, label: 'Live Sessions', path: '/live-sessions', id: 'live-sessions' },
    ],
    hr: [
      { icon: Users, label: 'Staff Management', path: '/staff', id: 'staff' },
      { icon: BarChart3, label: 'Reports', path: '/reports', id: 'reports' },
    ],
    management: [
      { icon: BarChart3, label: 'Analytics', path: '/analytics', id: 'analytics' },
      { icon: Users, label: 'Staff Overview', path: '/staff-overview', id: 'staff-overview' },
    ],
    admin: [
      { icon: Users, label: 'User Management', path: '/admin/users', id: 'admin-users' },
      { icon: Settings, label: 'System Settings', path: '/admin/settings', id: 'admin-settings' },
      { icon: BarChart3, label: 'System Analytics', path: '/admin/analytics', id: 'admin-analytics' },
    ],
  };

  const additionalItems = roleItems[userRole || 'diplomat'] || [];
  
  return [
    ...baseItems,
    ...additionalItems,
    { icon: Settings, label: 'Settings', path: '/settings', id: 'settings' },
  ];
};

const CanvasLayout = ({ children }: CanvasLayoutProps) => {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = getNavigationItems(user?.role);

  const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
    const isActive = location.pathname === item.path || 
      (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
    
    return (
      <Link 
        to={item.path}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground hover:bg-accent",
          sidebarCollapsed && !isMobile && "justify-center px-2"
        )}
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        <item.icon className="w-5 h-5 flex-shrink-0" />
        {(!sidebarCollapsed || isMobile) && <span>{item.label}</span>}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Canvas-style Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            {/* FSA Logo and Title */}
            <div className="flex items-center gap-3">
              <img src="/src/assets/fsa-logo.png" alt="FSA" className="w-8 h-8" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold">FSA Learning Portal</h1>
                <p className="text-xs text-muted-foreground">Foreign Services Academy Kenya</p>
              </div>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* User Info */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs">{user?.role}</Badge>
                  {user?.department && (
                    <Badge variant="outline" className="text-xs">{user.department}</Badge>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-muted-foreground hover:text-foreground"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Canvas-style Sidebar Navigation */}
        <aside className={cn(
          "hidden md:flex flex-col bg-card border-r border-border transition-all duration-300",
          sidebarCollapsed ? "w-16" : "w-64"
        )}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <div>
                  <h2 className="font-semibold text-sm">Course Navigation</h2>
                  <p className="text-xs text-muted-foreground">FSA Training Platform</p>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-1"
              >
                {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-1">
            {navigationItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </nav>

          {/* Sidebar Footer */}
          {!sidebarCollapsed && (
            <div className="p-4 border-t border-border">
              <div className="text-xs text-muted-foreground space-y-1">
                <p>© 2025 Foreign Services Academy</p>
                <p>Ministry of Foreign & Diaspora Affairs</p>
              </div>
            </div>
          )}
        </aside>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <aside className="fixed left-0 top-14 bottom-0 w-72 bg-card border-r border-border">
              {/* Mobile Navigation */}
              <nav className="p-4 space-y-1">
                {navigationItems.map((item) => (
                  <NavItem key={item.id} item={item} isMobile />
                ))}
              </nav>
              
              {/* Mobile Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>© 2025 Foreign Services Academy</p>
                  <p>Ministry of Foreign & Diaspora Affairs</p>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CanvasLayout;