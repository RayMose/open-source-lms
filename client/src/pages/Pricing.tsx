
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      period: 'Free forever',
      description: 'Perfect for getting started with online learning',
      features: [
        'Access to 5 free courses',
        'Course completion certificates',
        'Mobile access',
        'Basic support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'Everything you need for serious skill development',
      features: [
        'Unlimited course access',
        'Downloadable resources',
        'Instructor Q&A access',
        'Priority support',
        'Ad-free experience',
        'Course completion certificates',
      ],
      cta: 'Start 7-day Free Trial',
      popular: true,
    },
    {
      name: 'Team',
      price: '$49',
      period: 'per user/month',
      description: 'Perfect for organizations training their employees',
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Progress reporting',
        'Custom learning paths',
        'API access',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <PageLayout 
      title="Simple, Transparent Pricing" 
      description="Choose the plan that's right for you and start your learning journey today."
    >
      <div className="flex flex-col items-center mb-10">
        <div className="inline-flex items-center rounded-full border p-1 mb-8">
          <Button variant="outline" className="rounded-full">Monthly</Button>
          <Button className="rounded-full">Annual (Save 20%)</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link to="/register">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          <div>
            <h3 className="font-medium text-lg mb-2">Can I cancel my subscription?</h3>
            <p className="text-muted-foreground">Yes, you can cancel your subscription at any time. If you cancel, you'll still have access until the end of your billing period.</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Is there a student discount?</h3>
            <p className="text-muted-foreground">Yes, we offer a 50% discount for verified students. Contact our support team for details.</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Can I switch plans later?</h3>
            <p className="text-muted-foreground">Absolutely! You can upgrade or downgrade your plan at any time from your account settings.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pricing;
