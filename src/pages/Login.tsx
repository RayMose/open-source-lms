
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
              <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
              <p className="text-muted-foreground mt-2">Log in to your Learner account</p>
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
            
            <div className="mt-4 text-center border-t border-border pt-4">
              <p className="text-xs text-muted-foreground mb-1">Demo credentials:</p>
              <p className="text-xs text-muted-foreground">User: user@example.com / password</p>
              <p className="text-xs text-muted-foreground">Admin: admin@example.com / admin123</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
