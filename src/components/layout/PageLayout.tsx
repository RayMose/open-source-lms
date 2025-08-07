
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  description,
  className = "" 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-16">
        <div className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              {description && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className={`container mx-auto px-4 md:px-6 py-12 ${className}`}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
