import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import fsaLogo from '@/assets/fsa-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img src={fsaLogo} alt="FSA Logo" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-foreground leading-tight">Foreign Services Academy</span>
                <span className="text-xs text-primary font-medium">Kenya</span>
              </div>
            </Link>
            
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Strengthening Kenya's diplomatic capabilities through comprehensive professional training and development since 2006.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Training Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Diplomatic Modules
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Training Dashboard
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Certification Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Video Learning
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Academy</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About FSA
                  </Link>
                </li>
                <li>
                  <a href="https://www.fsa.go.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Official Website
                  </a>
                </li>
                <li>
                  <a href="https://mfa.go.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Ministry of Foreign Affairs
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@fsa.go.ke" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="tel:+254-20-2221221" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact FSA
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Training Guidelines
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Foreign Services Academy Kenya. All rights reserved.</p>
            <p className="mt-1">Ministry of Foreign and Diaspora Affairs | Government of Kenya</p>
          </div>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
