
import React from 'react';
import { Users, BookOpen, Award, Heart } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const About = () => {
  const stats = [
    { value: '100+', label: 'Diplomats Trained Annually' },
    { value: '3', label: 'Core Training Pillars' },
    { value: '18+', label: 'Years of Excellence' },
    { value: '95%', label: 'Certification Rate' },
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Diplomatic Excellence',
      description: 'We foster professional excellence through comprehensive training that strengthens Kenya\'s diplomatic capabilities.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: '21st Century Diplomacy',
      description: 'Our curriculum addresses contemporary challenges in sustainable development, peacebuilding, and economic integration.',
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Global Leadership',
      description: 'We prepare Kenya\'s diplomats to lead in multilateral forums and advance national interests globally.',
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Service to Nation',
      description: 'We instill values of patriotism and public service in Kenya\'s diplomatic corps.',
    },
  ];

  const team = [
    {
      name: 'Ambassador Paul K. Ndung\'u',
      role: 'Acting Director General',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Ambassador Dr. Maria Wanjiku',
      role: 'Lead Instructor - Environmental Diplomacy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Ambassador Prof. James Macharia',
      role: 'Lead Instructor - Peacebuilding',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Ambassador Dr. Grace Akumu',
      role: 'Lead Instructor - Economic Diplomacy',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <PageLayout 
      title="About Foreign Services Academy Kenya" 
      description="Strengthening Kenya's diplomatic capabilities through comprehensive professional training and development programs."
    >
      {/* Story Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Our History</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Established in 2006 under the Ministry of Foreign and Diaspora Affairs, the Foreign Services Academy (FSA) was created to strengthen Kenya's diplomatic capabilities and prepare foreign service officers for 21st-century challenges.
          </p>
          <p>
            Under the leadership of Acting Director General Ambassador Paul K. Ndung'u, FSA has evolved from a traditional diplomatic training institute to a comprehensive digital learning platform, serving Kenya's growing diplomatic corps and regional training needs.
          </p>
          <p>
            The Academy recently unveiled its transformative curriculum focusing on three critical pillars: Sustainable Development & Environmental Diplomacy, Peacebuilding & Conflict Resolution, and Economic & Regional Integration Diplomacy.
          </p>
          <p>
            Today, FSA trains over 100 officers annually across various specialized programs, from Third Secretary Cadets to Ambassadors and Consuls-General, utilizing innovative digital methodologies including video-based learning and virtual diplomatic simulations.
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
