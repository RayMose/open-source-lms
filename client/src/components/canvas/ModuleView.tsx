import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronDown, 
  ChevronRight, 
  PlayCircle, 
  FileText, 
  CheckCircle2, 
  Clock,
  Lock,
  Video,
  BookOpen,
  Award,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleItem {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'assignment' | 'quiz' | 'discussion';
  duration?: string;
  points?: number;
  dueDate?: string;
  completed: boolean;
  locked: boolean;
  description?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  items: ModuleItem[];
  unlockDate?: string;
  isExpanded: boolean;
  progress: number;
}

const ModuleView = () => {
  const [modules, setModules] = useState<Module[]>([
    {
      id: '1',
      title: 'Module 1: Introduction to Environmental Diplomacy',
      description: 'Fundamentals of environmental policy and international climate negotiations',
      progress: 85,
      isExpanded: true,
      items: [
        {
          id: '1-1',
          title: 'Welcome to Environmental Diplomacy',
          type: 'video',
          duration: '15 min',
          completed: true,
          locked: false,
          description: 'Introduction to Kenya\'s role in global environmental leadership'
        },
        {
          id: '1-2',
          title: 'Climate Change & Diplomatic Strategy',
          type: 'video',
          duration: '32 min',
          completed: true,
          locked: false,
          description: 'Understanding climate negotiations and Kenya\'s climate commitments'
        },
        {
          id: '1-3',
          title: 'Reading: Paris Agreement Analysis',
          type: 'reading',
          duration: '20 min',
          completed: true,
          locked: false,
          description: 'Critical analysis of the Paris Climate Agreement'
        },
        {
          id: '1-4',
          title: 'Policy Brief: Kenya\'s Climate Commitments',
          type: 'assignment',
          points: 100,
          dueDate: 'Jan 25, 2025',
          completed: false,
          locked: false,
          description: 'Analyze Kenya\'s Nationally Determined Contributions (NDCs)'
        },
        {
          id: '1-5',
          title: 'Module 1 Assessment',
          type: 'quiz',
          points: 50,
          dueDate: 'Jan 30, 2025',
          completed: false,
          locked: false,
          description: 'Comprehensive assessment of environmental diplomacy concepts'
        }
      ]
    },
    {
      id: '2',
      title: 'Module 2: Sustainable Development Goals & Diplomacy',
      description: 'Kenya\'s leadership in SDG implementation and advocacy',
      progress: 45,
      isExpanded: false,
      items: [
        {
          id: '2-1',
          title: 'SDG Framework Overview',
          type: 'video',
          duration: '25 min',
          completed: true,
          locked: false,
          description: 'Understanding the 17 Sustainable Development Goals'
        },
        {
          id: '2-2',
          title: 'Kenya\'s SDG Progress Report',
          type: 'reading',
          duration: '30 min',
          completed: true,
          locked: false,
          description: 'Review of Kenya\'s SDG implementation progress'
        },
        {
          id: '2-3',
          title: 'Multilateral SDG Negotiations',
          type: 'video',
          duration: '40 min',
          completed: false,
          locked: false,
          description: 'Diplomatic strategies for SDG advocacy'
        },
        {
          id: '2-4',
          title: 'Discussion: SDG Partnerships',
          type: 'discussion',
          completed: false,
          locked: false,
          description: 'Collaborative approaches to SDG achievement'
        },
        {
          id: '2-5',
          title: 'Case Study: Green Economy Initiatives',
          type: 'assignment',
          points: 75,
          dueDate: 'Feb 15, 2025',
          completed: false,
          locked: false,
          description: 'Analysis of Kenya\'s green economy transformation'
        }
      ]
    },
    {
      id: '3',
      title: 'Module 3: Climate Finance & Technology Transfer',
      description: 'Advanced topics in climate financing and technology diplomacy',
      progress: 0,
      isExpanded: false,
      unlockDate: 'Feb 1, 2025',
      items: [
        {
          id: '3-1',
          title: 'Climate Finance Mechanisms',
          type: 'video',
          duration: '35 min',
          completed: false,
          locked: true,
          description: 'Understanding international climate finance structures'
        },
        {
          id: '3-2',
          title: 'Technology Transfer Agreements',
          type: 'reading',
          duration: '25 min',
          completed: false,
          locked: true,
          description: 'Legal frameworks for technology transfer'
        },
        {
          id: '3-3',
          title: 'Negotiation Simulation: COP30 Prep',
          type: 'assignment',
          points: 150,
          dueDate: 'Mar 10, 2025',
          completed: false,
          locked: true,
          description: 'Prepare for climate negotiations as Kenya\'s delegation'
        }
      ]
    }
  ]);

  const toggleModule = (moduleId: string) => {
    setModules(modules.map(module => 
      module.id === moduleId 
        ? { ...module, isExpanded: !module.isExpanded }
        : module
    ));
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'reading': return BookOpen;
      case 'assignment': return FileText;
      case 'quiz': return Award;
      case 'discussion': return MessageSquare;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-4">
      {/* Course Header */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Sustainable Development & Environmental Diplomacy</h1>
            <p className="text-muted-foreground">Instructor: Ambassador Dr. Maria Wanjiku</p>
          </div>
          <Badge className="bg-primary text-primary-foreground">Active</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Overall Progress</p>
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-bold">43%</span>
                <span className="text-sm text-muted-foreground">7/16 items</span>
              </div>
              <Progress value={43} className="h-2" />
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-muted-foreground">Next Due</p>
            <div className="mt-2">
              <p className="font-medium">Policy Brief Assignment</p>
              <p className="text-sm text-muted-foreground">Due Jan 25, 2025</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-muted-foreground">Course Points</p>
            <div className="mt-2">
              <p className="text-2xl font-bold">275/500</p>
              <p className="text-sm text-muted-foreground">Current Grade: 55%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modules */}
      {modules.map((module) => (
        <Card key={module.id} className="bg-card">
          <CardHeader 
            className="cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => toggleModule(module.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {module.isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
                <div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {module.unlockDate && (
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Unlocks</p>
                    <p className="text-sm font-medium">{module.unlockDate}</p>
                  </div>
                )}
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-sm font-medium">{module.progress}%</p>
                </div>
              </div>
            </div>
            
            {module.isExpanded && (
              <div className="mt-4">
                <Progress value={module.progress} className="h-2" />
              </div>
            )}
          </CardHeader>

          {module.isExpanded && (
            <CardContent className="pt-0">
              <div className="space-y-2">
                {module.items.map((item) => {
                  const ItemIcon = getItemIcon(item.type);
                  
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg border transition-colors",
                        item.completed 
                          ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" 
                          : item.locked
                          ? "bg-muted/50 border-muted"
                          : "bg-background hover:bg-accent/50 border-border cursor-pointer"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {item.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : item.locked ? (
                          <Lock className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ItemIcon className="w-5 h-5 text-primary" />
                        )}
                        
                        <div className="flex-1">
                          <h4 className={cn(
                            "font-medium",
                            item.locked && "text-muted-foreground"
                          )}>
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {item.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.duration}
                          </div>
                        )}
                        
                        {item.points && (
                          <div className="font-medium">
                            {item.points} pts
                          </div>
                        )}
                        
                        {item.dueDate && (
                          <div className="text-red-600 font-medium">
                            Due: {item.dueDate}
                          </div>
                        )}
                      </div>

                      {!item.locked && !item.completed && (
                        <Button size="sm">
                          {item.type === 'video' ? (
                            <>
                              <PlayCircle className="w-4 h-4 mr-2" />
                              Watch
                            </>
                          ) : (
                            'Start'
                          )}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ModuleView;