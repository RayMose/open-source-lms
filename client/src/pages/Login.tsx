
import { Link } from 'react-router-dom';
import { LoginForm } from '@/components/auth/AuthForms';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-sm border border-border p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground">FSA Learning Portal</h1>
              <p className="text-muted-foreground mt-2">Access your Foreign Services Academy training modules</p>
            </div>
            
            <LoginForm />
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:text-primary/80 transition-colors">
                  Register
                </Link>
              </p>
            </div>
            
            <div className="mt-4 text-center border-t border-border pt-4 space-y-1">
              <p className="text-xs text-muted-foreground mb-2 font-medium">FSA Demo Access:</p>
              <p className="text-xs text-muted-foreground">Diplomat: diplomat@fsa.go.ke / diplomat123</p>
              <p className="text-xs text-muted-foreground">Lecturer: lecturer@fsa.go.ke / lecturer123</p>
              <p className="text-xs text-muted-foreground">HR: hr@fsa.go.ke / hr123</p>
              <p className="text-xs text-muted-foreground">Management: management@fsa.go.ke / management123</p>
              <p className="text-xs text-muted-foreground">Admin: admin@fsa.go.ke / admin123</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
