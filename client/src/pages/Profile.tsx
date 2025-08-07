
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Mail, User } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [isAuthenticated, navigate, user]);

  const handleSaveProfile = () => {
    // In a real application, you would make an API call here
    if (user) {
      // Mock update for demo purposes
      useAuthStore.setState({
        user: {
          ...user,
          name,
          email,
        }
      });
      
      toast.success('Profile updated successfully');
      setIsEditMode(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    toast.success('Logged out successfully');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-foreground">My Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="md:col-span-1">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsEditMode(!isEditMode)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
            
            {/* Profile Details */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>
                  {isEditMode ? 'Edit Profile Information' : 'Profile Information'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-muted-foreground" />
                      <h3 className="text-sm font-medium text-foreground">Name</h3>
                    </div>
                    {isEditMode ? (
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded-md bg-background text-foreground border-input"
                      />
                    ) : (
                      <p className="text-foreground">{user.name}</p>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <h3 className="text-sm font-medium text-foreground">Email</h3>
                    </div>
                    {isEditMode ? (
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-md bg-background text-foreground border-input"
                      />
                    ) : (
                      <p className="text-foreground">{user.email}</p>
                    )}
                  </div>
                  
                  {isEditMode && (
                    <div className="flex justify-end gap-2 mt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setIsEditMode(false);
                          if (user) {
                            setName(user.name);
                            setEmail(user.email);
                          }
                        }}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile}>
                        Save Changes
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
