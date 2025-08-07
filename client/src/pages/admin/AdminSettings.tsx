import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardHeader from '@/components/admin/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Globe, 
  Mail, 
  CreditCard, 
  Bell, 
  UserCog, 
  ShieldCheck, 
  Database,
  Code
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();
  const [headCode, setHeadCode] = useState<string>('<!-- Add code for <head> section here -->\n<!-- Example: Google Analytics, Meta tags, etc. -->');
  const [bodyStartCode, setBodyStartCode] = useState<string>('<!-- Add code for start of <body> section here -->');
  const [bodyEndCode, setBodyEndCode] = useState<string>('<!-- Add code for end of <body> section here -->\n<!-- Example: Chat widgets, tracking scripts, etc. -->');

  const handleSaveEmbedCode = () => {
    // In a real implementation, this would save to a database
    toast({
      title: "Embed Code Saved",
      description: "Your custom code snippets have been saved successfully."
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>
          
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-8 w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="notifications" className="hidden md:inline-flex">Notifications</TabsTrigger>
              <TabsTrigger value="users" className="hidden md:inline-flex">Users</TabsTrigger>
              <TabsTrigger value="security" className="hidden md:inline-flex">Security</TabsTrigger>
              <TabsTrigger value="integrations" className="hidden md:inline-flex">Integrations</TabsTrigger>
              <TabsTrigger value="embed" className="hidden md:inline-flex">Embed Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Platform Settings
                  </CardTitle>
                  <CardDescription>
                    Configure general platform settings and appearance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="Learner" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="platform-url">Platform URL</Label>
                    <Input id="platform-url" defaultValue="https://learner.edu" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="platform-description">Platform Description</Label>
                    <Input id="platform-description" defaultValue="An online learning platform for everyone" />
                  </div>
                  
                  <div className="pt-4">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure email settings, templates, and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-server">SMTP Server</Label>
                    <Input id="smtp-server" defaultValue="smtp.example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input id="smtp-port" defaultValue="587" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="smtp-username">SMTP Username</Label>
                    <Input id="smtp-username" defaultValue="notifications@learner.edu" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="smtp-password">SMTP Password</Label>
                    <Input id="smtp-password" type="password" defaultValue="********" />
                  </div>
                  
                  <div className="pt-4">
                    <Button>Save Email Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Payment Gateway
                  </CardTitle>
                  <CardDescription>
                    Configure payment processors and transaction settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="stripe-key">Stripe API Key</Label>
                    <Input id="stripe-key" defaultValue="sk_test_****************************************" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="stripe-webhook">Stripe Webhook Secret</Label>
                    <Input id="stripe-webhook" defaultValue="whsec_****************************************" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Input id="currency" defaultValue="USD" />
                  </div>
                  
                  <div className="pt-4">
                    <Button>Save Payment Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Notification Settings
                  </CardTitle>
                  <CardDescription>
                    Configure email and system notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Configure which events trigger notifications to users and administrators.</p>
                  
                  <div className="space-y-4">
                    {/* Notification settings would go here */}
                    <Button>Save Notification Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCog className="mr-2 h-5 w-5" />
                    User Management
                  </CardTitle>
                  <CardDescription>
                    Configure user roles and permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Manage user roles, permissions, and default settings for new accounts.</p>
                  
                  <div className="space-y-4">
                    {/* User management settings would go here */}
                    <Button>Save User Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Configure security and authentication options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Manage password policies, two-factor authentication, and other security features.</p>
                  
                  <div className="space-y-4">
                    {/* Security settings would go here */}
                    <Button>Save Security Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5" />
                    Integrations
                  </CardTitle>
                  <CardDescription>
                    Connect with third-party services and APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Configure integrations with external services such as Google Analytics, Zoom, etc.</p>
                  
                  <div className="space-y-4">
                    {/* Integration settings would go here */}
                    <Button>Save Integration Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="embed" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    Embed Custom Code
                  </CardTitle>
                  <CardDescription>
                    Add custom HTML, JavaScript, or CSS code to your site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="head-code" className="text-base font-medium">
                        Head Section Code
                      </Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Code added here will be placed in the <code>&lt;head&gt;</code> section of all pages.
                        Perfect for meta tags, analytics, or CSS.
                      </p>
                      <Textarea 
                        id="head-code" 
                        value={headCode}
                        onChange={(e) => setHeadCode(e.target.value)}
                        className="font-mono text-xs h-32"
                      />
                    </div>

                    <div>
                      <Label htmlFor="body-start-code" className="text-base font-medium">
                        Body Start Code
                      </Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Code added here will be placed immediately after the opening <code>&lt;body&gt;</code> tag.
                      </p>
                      <Textarea 
                        id="body-start-code" 
                        value={bodyStartCode}
                        onChange={(e) => setBodyStartCode(e.target.value)}
                        className="font-mono text-xs h-32"
                      />
                    </div>

                    <div>
                      <Label htmlFor="body-end-code" className="text-base font-medium">
                        Body End Code
                      </Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Code added here will be placed just before the closing <code>&lt;/body&gt;</code> tag.
                        Ideal for chat widgets, tracking scripts, etc.
                      </p>
                      <Textarea 
                        id="body-end-code" 
                        value={bodyEndCode}
                        onChange={(e) => setBodyEndCode(e.target.value)}
                        className="font-mono text-xs h-32"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button onClick={handleSaveEmbedCode}>Save Custom Code</Button>
                    <p className="text-sm text-muted-foreground">
                      Changes will be applied to all pages of your site.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
