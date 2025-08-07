
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { toast } from 'sonner';
import fsaLogo from '@/assets/fsa-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, isAdmin, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
    toast.success('Logged out successfully');
  };

  // Different navigation links for admin vs regular users
  const navigationLinks = [
    { name: 'Home', href: '/' },
    ...(isAuthenticated && !isAdmin() 
      ? [
          { name: 'Courses', href: '/courses' },
          { name: 'Dashboard', href: '/dashboard' },
        ] 
      : []),
    // Admin-specific links - redirected to admin dashboard to access other admin sections
    ...(isAdmin() 
      ? [
          { name: 'Admin Dashboard', href: '/admin' }
        ] 
      : []),
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={fsaLogo} alt="FSA Logo" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-tight">
                Foreign Services Academy
              </span>
              <span className="text-xs text-primary font-medium">
                Kenya
              </span>
            </div>
            {isAdmin() && <Shield className="h-4 w-4 ml-1 text-primary" />}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      location.pathname === link.href
                        ? 'text-primary font-medium'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="ml-4">
              <ThemeToggle />
            </div>

            {!isAuthenticated ? (
              <div className="flex items-center space-x-2 ml-4">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/register">Sign up</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center ml-4">
                {isAdmin() ? (
                  <Button asChild variant="outline" size="sm" className="mr-2">
                    <Link to="/admin">Admin Dashboard</Link>
                  </Button>
                ) : (
                  <Button asChild variant="ghost" size="sm" className="mr-2">
                    <Link to="/profile">My Profile</Link>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="mr-2">
              <ThemeToggle />
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`block px-3 py-2 rounded-md ${
                      location.pathname === link.href
                        ? 'bg-gray-100 dark:bg-gray-800 text-primary font-medium'
                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {!isAuthenticated ? (
                <div className="pt-2 space-y-1">
                  <Button asChild variant="outline" className="w-full justify-start" size="sm">
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button asChild className="w-full justify-start" size="sm">
                    <Link to="/register">Sign up</Link>
                  </Button>
                </div>
              ) : (
                <div className="pt-2 space-y-1">
                  {isAdmin() ? (
                    <Button asChild variant="outline" className="w-full justify-start" size="sm">
                      <Link to="/admin">Admin Dashboard</Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full justify-start" size="sm">
                      <Link to="/profile">My Profile</Link>
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
