
import React from 'react';
import { Users, BookOpen, Award, Heart } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const About = () => {
  const stats = [
    { value: '10k+', label: 'Students' },
    { value: '500+', label: 'Courses' },
    { value: '100+', label: 'Instructors' },
    { value: '15+', label: 'Countries' },
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Community First',
      description: 'We believe in the power of community and collaboration to drive innovation and growth.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: 'Quality Education',
      description: 'We are committed to providing high-quality educational content that is accessible to everyone.',
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our platform to our courses and customer service.',
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Passion',
      description: 'We are passionate about education and helping our students achieve their goals and dreams.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Education',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Daniel Kim',
      role: 'Product Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <PageLayout 
      title="About Learner" 
      description="Our mission is to provide accessible, high-quality education to everyone, everywhere."
    >
      {/* Story Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Founded in 2020, Learner was born out of a simple idea: that quality education should be accessible to everyone, regardless of their background or location.
          </p>
          <p>
            Our founders, Sarah and Michael, met at a technology conference where they discovered their shared passion for education and technology. They realized that despite the digital revolution, education remained inaccessible to many around the world.
          </p>
          <p>
            With this in mind, they set out to create a platform that would break down the barriers to education. Starting with just a handful of courses and a small team, Learner has grown into a global community of learners and educators committed to transforming lives through education.
          </p>
          <p>
            Today, Learner offers hundreds of courses across various disciplines, from programming and design to business and personal development. Our platform is used by students from over 15 countries, and we're just getting started.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-card border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
