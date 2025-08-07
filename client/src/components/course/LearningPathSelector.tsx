import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'cadet' | 'officer' | 'senior';
  duration: string;
  participants: string;
  certification: string;
  modules: string[];
  color: string;
}

interface LearningPathSelectorProps {
  onPathSelect: (pathId: string) => void;
}

const LearningPathSelector: React.FC<LearningPathSelectorProps> = ({ onPathSelect }) => {
  const learningPaths: LearningPath[] = [
    {
      id: 'third-secretary-cadets',
      title: 'Third Secretary Cadets Program',
      description: 'Comprehensive 3-month foundational diplomatic training for new foreign service officers entering Kenya\'s diplomatic corps.',
      level: 'cadet',
      duration: '3 months intensive',
      participants: 'Entry-level diplomats',
      certification: 'Diplomatic Service Certificate',
      modules: [
        'Diplomatic Protocol & Etiquette',
        'International Law Foundations',
        'Consular Services Training',
        'Cultural Diplomacy Basics',
        'Economic Diplomacy Introduction'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'pre-departure-officers',
      title: 'Pre-Departure Officers Training',
      description: 'Specialized 2-week intensive preparation for diplomatic postings abroad, focusing on country-specific challenges and opportunities.',
      level: 'officer',
      duration: '2 weeks intensive',
      participants: 'Officers preparing for posting',
      certification: 'Pre-Deployment Readiness Certificate',
      modules: [
        'Country-Specific Briefings',
        'Advanced Negotiation Skills',
        'Crisis Management Protocols',
        'Digital Diplomacy Tools',
        'Security & Safety Protocols'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'ambassadors-consuls',
      title: 'Ambassadors & Consuls-General Program',
      description: 'Executive-level 2-week strategic leadership program for senior diplomatic appointments and mission heads.',
      level: 'senior',
      duration: '2 weeks executive',
      participants: 'Senior diplomatic leadership',
      certification: 'Strategic Leadership Certificate',
      modules: [
        'Strategic Vision & Planning',
        'High-Level Negotiations',
        'Mission Management',
        'Stakeholder Engagement',
        'Policy Implementation'
      ],
      color: 'bg-purple-500'
    }
  ];

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'cadet': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'officer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'senior': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Choose Your Learning Path</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          FSA's three-tier training structure aligns with Kenya's foreign service career progression, 
          ensuring comprehensive preparation at every level of diplomatic service.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {learningPaths.map((path) => (
          <Card key={path.id} className="relative group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <div className={`absolute top-0 left-0 right-0 h-1 ${path.color}`} />
            
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge className={getLevelBadgeColor(path.level)}>
                  {path.level === 'cadet' && 'Entry Level'}
                  {path.level === 'officer' && 'Mid-Career'}
                  {path.level === 'senior' && 'Executive'}
                </Badge>
              </div>
              
              <CardTitle className="text-xl leading-tight">{path.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {path.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{path.participants}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{path.certification}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Modules:</h4>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {path.modules.slice(0, 3).map((module, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {module}
                    </li>
                  ))}
                  {path.modules.length > 3 && (
                    <li className="text-xs text-primary">
                      +{path.modules.length - 3} more modules
                    </li>
                  )}
                </ul>
              </div>

              <Button 
                onClick={() => onPathSelect(path.id)}
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                variant="outline"
              >
                Begin Training Path
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-card border rounded-lg p-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-semibold">Flexible Video-Based Learning</h3>
          <p className="text-muted-foreground">
            All FSA training modules feature extensive video content designed for diplomatic professionals. 
            Learn at your own pace with interactive exercises, real-world simulations, and collaborative 
            discussion forums. Perfect for officers stationed abroad or those with demanding schedules.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">13+</div>
              <div className="text-sm text-muted-foreground">Hours per module</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Access anywhere</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Interactive modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Self-paced</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathSelector;