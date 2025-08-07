
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Award, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: 'Diplomatic Training Modules',
    description: 'Three core training modules: Sustainable Development & Environmental Diplomacy, Peacebuilding & Conflict Resolution, and Economic & Regional Integration.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Expert Diplomatic Faculty',
    description: 'Learn from seasoned diplomats, ambassadors, and foreign service professionals with real-world experience.'
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: 'Professional Certification',
    description: 'Receive official FSA certificates for diplomatic competency and career advancement in Kenya\'s foreign service.'
  }
];

const testimonials = [
  {
    quote: "The FSA online platform has revolutionized my diplomatic training. The video modules and interactive content make complex international relations concepts accessible from anywhere.",
    name: "Ambassador Peter K.",
    title: "Kenyan High Commissioner"
  },
  {
    quote: "As a Third Secretary Cadet, the three core training modules prepared me comprehensively for my posting. The climate diplomacy and conflict resolution segments were particularly valuable.",
    name: "Grace M.",
    title: "Third Secretary Cadet"
  },
  {
    quote: "The flexibility of the online platform allows me to continue professional development while stationed abroad. Essential for career progression in Kenya's foreign service.",
    name: "James O.",
    title: "First Secretary, Embassy of Kenya"
  }
];

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroElement = heroRef.current;
      
      // Parallax effect
      heroElement.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroElement.style.opacity = `${1 - scrollY * 0.002}`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center py-28 md:py-36 overflow-hidden">
          <div 
            ref={heroRef}
            className="absolute inset-0 w-full h-full bg-primary/5 z-0"
          />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div 
                className={`transition-all duration-1000 ${
                  isLoaded 
                    ? 'opacity-100 transform-none' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  Foreign Services Academy Kenya
                </span>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">
                  Professional Diplomatic Training & Development
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Comprehensive online training platform for Kenya's diplomatic corps, offering three core modules in sustainable development, peacebuilding, and economic diplomacy with flexible video-based learning.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/courses"
                    className="px-6 py-3 text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Access Training Modules</span>
                    <ArrowRight size={16} />
                  </Link>
                  
                  <Link
                    to="/register"
                    className="px-6 py-3 text-foreground bg-card border border-input hover:bg-accent rounded-lg transition-colors"
                  >
                    Register as Diplomat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Excellence in Diplomatic Training
                </h2>
                <p className="text-lg text-muted-foreground">
                  FSA's comprehensive learning platform provides professional development for Kenya's foreign service officers at all career levels.
                </p>
              </div>
            </FadeInSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="bg-background p-6 rounded-xl border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:translate-y-[-4px]">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  What our learners say
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thousands of students have transformed their careers with our platform.
                </p>
              </div>
            </FadeInSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl border border-border transition-all duration-300 hover:shadow-md">
                    <svg
                      className="w-8 h-8 text-primary/30 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="ml-0">
                        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-sm border border-border overflow-hidden animate-[hover_4s_ease-in-out_infinite]">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to start learning?</h2>
                  <p className="text-muted-foreground mb-6">
                    Join thousands of learners who have already taken the first step toward mastering new skills.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      'Access to all courses',
                      'Track your progress',
                      'Join a community of learners',
                      'Earn certificates'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={16} className="text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-6 py-3 text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors gap-2"
                  >
                    <span>Get started for free</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
                
                <div className="hidden md:block bg-gradient-to-br from-primary/90 to-primary">
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="text-primary-foreground max-w-xs">
                      <h3 className="text-2xl font-semibold mb-3">Your learning journey starts here</h3>
                      <p className="text-primary-foreground/80">
                        Our platform provides everything you need to succeed, from beginner to advanced levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
