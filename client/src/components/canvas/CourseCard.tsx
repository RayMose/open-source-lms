import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Calendar,
  Star,
  Award,
  PlayCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    instructor: string;
    progress: number;
    totalModules: number;
    completedModules: number;
    nextDeadline?: string;
    rating: number;
    enrolledStudents: number;
    estimatedHours: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
    thumbnail?: string;
    isEnrolled?: boolean;
  };
  variant?: 'enrolled' | 'catalog';
}

const CourseCard = ({ course, variant = 'enrolled' }: CourseCardProps) => {
  return (
    <Card className="bg-card hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        {/* Course thumbnail placeholder */}
        <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2">{course.title}</CardTitle>
            <CardDescription className="text-sm">{course.description}</CardDescription>
          </div>
          <Badge variant="outline" className="ml-2">
            {course.difficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Instructor */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{course.instructor}</span>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{course.estimatedHours}h</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{course.enrolledStudents} students</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>{course.rating}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-muted-foreground" />
            <span>{course.category}</span>
          </div>
        </div>

        {/* Progress for enrolled courses */}
        {variant === 'enrolled' && course.isEnrolled && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{course.completedModules}/{course.totalModules} modules</span>
            </div>
            <Progress value={course.progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{course.progress}% complete</span>
              {course.nextDeadline && (
                <span>Next due: {course.nextDeadline}</span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {variant === 'enrolled' && course.isEnrolled ? (
            <>
              <Link to={`/courses/${course.id}`}>
                <Button className="flex-1">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </Link>
              <Link to={`/courses/${course.id}/modules`}>
                <Button variant="outline" size="sm">
                  View Modules
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to={`/courses/${course.id}`}>
                <Button className="flex-1">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Course
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Enroll
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;