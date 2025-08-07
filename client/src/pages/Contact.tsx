
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      details: 'support@learner.com',
      cta: 'Send us an email',
      link: 'mailto:support@learner.com',
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      cta: 'Give us a call',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Office',
      details: '123 Learning Lane, Education City, CA 94043',
      cta: 'Get directions',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <PageLayout
      title="Contact Us"
      description="Have questions or feedback? We'd love to hear from you."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Whether you have a question about our platform, pricing, courses, or anything else, our team is ready to answer all your questions.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-muted-foreground mb-1">{item.details}</p>
                  <a 
                    href={item.link} 
                    className="text-primary hover:underline text-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Monday - Friday</td>
                  <td className="py-2 text-right">9:00 AM - 6:00 PM EST</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Saturday</td>
                  <td className="py-2 text-right">10:00 AM - 4:00 PM EST</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Sunday</td>
                  <td className="py-2 text-right">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What is this regarding?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
