
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Lightbulb, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support.',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Flexible Work',
      description: 'Remote-friendly environment with flexible hours and unlimited PTO.',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: 'Professional Growth',
      description: 'Learning stipend, mentorship programs, and career development opportunities.',
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: 'Competitive Compensation',
      description: 'Competitive salary, equity options, and 401(k) matching.',
    },
  ];

  const positions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote (US)',
      type: 'Full-time',
    },
    {
      title: 'Content Marketing Specialist',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote (Global)',
      type: 'Full-time',
    },
    {
      title: 'Customer Success Manager',
      department: 'Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
    {
      title: 'Curriculum Developer (Part-time)',
      department: 'Education',
      location: 'Remote (US)',
      type: 'Part-time',
    },
  ];

  return (
    <PageLayout
      title="Join Our Team"
      description="We're on a mission to transform education. Come build the future of learning with us."
    >
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-muted-foreground mb-8">
          At Learner, we're passionate about creating an inclusive, innovative environment where people can do their best work. We value creativity, collaboration, and the impact our platform has on learners around the world.
        </p>
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Learner team collaborating" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Life at Learner</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-card border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="my-16">
        <h2 className="text-2xl font-bold mb-2 text-center">Open Positions</h2>
        <p className="text-muted-foreground text-center mb-8">
          Join our team and make an impact on the future of education.
        </p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{position.title}</CardTitle>
                    <CardDescription className="mt-1">{position.department} • {position.location} • {position.type}</CardDescription>
                  </div>
                  <Button asChild size="sm">
                    <Link to="#" className="whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-6">
            Don't see a role that fits your skills? We're always looking for talented people to join our team.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>

      {/* Values Section */}
      <div className="my-16 bg-card border rounded-lg p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Students First</h3>
              <p className="text-muted-foreground">We prioritize the needs of our learners in everything we do, constantly seeking ways to improve their educational experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Embrace Growth</h3>
              <p className="text-muted-foreground">We believe in continuous learning and improvement, both for our platform and ourselves. We're never done growing.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
              <p className="text-muted-foreground">We're committed to creating meaningful change in education and empowering people to achieve their goals through learning.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Diverse Perspectives</h3>
              <p className="text-muted-foreground">We value diverse backgrounds, experiences, and ideas, knowing that our differences make us stronger and more innovative.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
