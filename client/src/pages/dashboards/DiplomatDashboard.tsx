import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuthStore } from '@/store/authStore';
import { useCourseStore } from '@/store/courseStore';
import { useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  PlayCircle,
  CheckCircle2,
  Star,
  Globe,
  Target,
  FileText,
  Video
} from 'lucide-react';

const DiplomatDashboard = () => {
  const { user } = useAuthStore();
  const { courses, fetchCourses, isLoading } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const learningStats = {
    coursesEnrolled: 3,
    coursesCompleted: 1,
    totalHours: 45,
    certificationsEarned: 1,
    currentStreak: 7,
    overallProgress: 67
  };

  const currentCourses = [
    {
      id: 1,
      title: "Sustainable Development & Environmental Diplomacy",
      description: "Master Kenya's environmental leadership in global climate negotiations",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      estimatedTimeRemaining: "3 hours",
      nextDeadline: "Jan 25, 2025",
      instructor: "Ambassador Dr. Maria Wanjiku",
      rating: 4.9
    },
    {
      id: 2,
      title: "Peacebuilding & Conflict Resolution",
      description: "Advanced diplomatic strategies for regional peace initiatives",
      progress: 45,
      totalLessons: 10,
      completedLessons: 5,
      estimatedTimeRemaining: "8 hours",
      nextDeadline: "Feb 15, 2025",
      instructor: "Ambassador John Kimani",
      rating: 4.8
    },
    {
      id: 3,
      title: "Economic & Regional Integration Diplomacy",
      description: "Trade negotiations and economic partnership agreements",
      progress: 20,
      totalLessons: 15,
      completedLessons: 3,
      estimatedTimeRemaining: "15 hours",
      nextDeadline: "Mar 10, 2025",
      instructor: "Ambassador Sarah Ochieng",
      rating: 4.7
    }
  ];

  const upcomingDeadlines = [
    {
      course: "Environmental Diplomacy",
      assignment: "Climate Policy Analysis",
      dueDate: "Jan 20, 2025",
      type: "Research Paper",
      priority: "high"
    },
    {
      course: "Peacebuilding Module",
      assignment: "Case Study Presentation",
      dueDate: "Jan 28, 2025",
      type: "Presentation",
      priority: "medium"
    }
  ];

  const achievements = [
    {
      title: "Environmental Diplomacy Certificate",
      description: "Completed foundational training in climate negotiations",
      date: "Dec 15, 2024",
      icon: Award,
      color: "text-green-600"
    },
    {
      title: "7-Day Learning Streak",
      description: "Consistent daily progress in training modules",
      date: "Ongoing",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Video Module Champion",
      description: "Completed 20+ hours of video-based learning",
      date: "Jan 10, 2025",
      icon: PlayCircle,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Training Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{user?.level}</Badge>
            <Badge variant="outline" className="text-primary border-primary">{user?.department}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-primary-foreground">
            <Video className="w-4 h-4 mr-2" />
            Continue Learning
          </Button>
        </div>
      </div>

      {/* Learning Stats */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningStats.overallProgress}%</div>
            <Progress value={learningStats.overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningStats.coursesEnrolled}</div>
            <p className="text-xs text-muted-foreground">
              {learningStats.coursesCompleted} completed
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningStats.totalHours}</div>
            <p className="text-xs text-muted-foreground">
              Total training time
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningStats.certificationsEarned}</div>
            <p className="text-xs text-muted-foreground">
              Professional certifications
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningStats.currentStreak}</div>
            <p className="text-xs text-muted-foreground">
              Days in a row
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#12</div>
            <p className="text-xs text-muted-foreground">
              In your cohort
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Current Courses */}
        <Card className="bg-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Current Training Modules
            </CardTitle>
            <CardDescription>Your active diplomatic training programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentCourses.map((course) => (
                <div key={course.id} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Instructor: {course.instructor}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-600">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <p>~{course.estimatedTimeRemaining} remaining</p>
                      <p>Due: {course.nextDeadline}</p>
                    </div>
                    <Button size="sm">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines & Achievements */}
        <div className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Deadlines
              </CardTitle>
              <CardDescription>Assignments and assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{deadline.assignment}</h4>
                      <Badge variant={
                        deadline.priority === 'high' ? 'destructive' : 
                        deadline.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {deadline.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{deadline.course}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline">{deadline.type}</Badge>
                      <span className="text-xs text-muted-foreground">{deadline.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Your accomplishments and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`p-2 rounded-full bg-secondary ${achievement.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader className="text-center">
            <FileText className="w-8 h-8 mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">View Assignments</CardTitle>
            <CardDescription className="text-sm">
              Check pending submissions and feedback
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader className="text-center">
            <Award className="w-8 h-8 mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">Certificates</CardTitle>
            <CardDescription className="text-sm">
              Download your earned certifications
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader className="text-center">
            <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">Schedule</CardTitle>
            <CardDescription className="text-sm">
              View upcoming sessions and events
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader className="text-center">
            <Globe className="w-8 h-8 mx-auto text-primary mb-2" />
            <CardTitle className="text-lg">Resources</CardTitle>
            <CardDescription className="text-sm">
              Access diplomatic resources and tools
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default DiplomatDashboard;