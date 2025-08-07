
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  HelpCircle,
  LogOut,
  Shield 
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: BookOpen, label: 'Courses', path: '/admin/courses' },
    { icon: Users, label: 'Students', path: '/admin/students' },
    { icon: ShoppingCart, label: 'Sales', path: '/admin/sales' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border overflow-y-auto flex-shrink-0 hidden md:flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">ED</span>
          </div>
          <span className="text-lg font-bold">Learner</span>
          <Shield className="h-4 w-4 text-primary" />
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className={cn(
                  "flex items-center p-2 rounded-md text-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                  location.pathname === item.path && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex justify-between items-center mb-4">
          <Link to="/help" className="flex items-center text-sm text-foreground/80 hover:text-foreground">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help & Support
          </Link>
          <ThemeToggle />
        </div>
        <Link 
          to="/logout" 
          className="flex w-full items-center p-2 rounded-md text-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Log Out
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
