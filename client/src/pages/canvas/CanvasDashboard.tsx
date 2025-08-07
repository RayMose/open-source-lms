import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';
import CourseCard from '@/components/canvas/CourseCard';
import RightSidebar from '@/components/canvas/RightSidebar';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp,
  Calendar,
  Users,
  PlayCircle,
  Plus
} from 'lucide-react';

const CanvasDashboard = () => {
  const { user } = useAuthStore();
  
  // Mock course data - in real app, this would come from API
  const enrolledCourses = [
    {
      id: '1',
      title: 'Sustainable Development & Environmental Diplomacy',
      description: 'Master Kenya\'s environmental leadership in global climate negotiations',
      instructor: 'Ambassador Dr. Maria Wanjiku',
      progress: 75,
      totalModules: 5,
      completedModules: 4,
      nextDeadline: 'Jan 25, 2025',
      rating: 4.9,
      enrolledStudents: 156,
      estimatedHours: 25,
      difficulty: 'Intermediate' as const,
      category: 'Environmental Policy',
      isEnrolled: true
    },
    {
      id: '2',
      title: 'Peacebuilding & Conflict Resolution',
      description: 'Advanced diplomatic strategies for regional peace initiatives',
      instructor: 'Ambassador John Kimani',
      progress: 45,
      totalModules: 4,
      completedModules: 2,
      nextDeadline: 'Feb 15, 2025',
      rating: 4.8,
      enrolledStudents: 89,
      estimatedHours: 20,
      difficulty: 'Advanced' as const,
      category: 'Peace & Security',
      isEnrolled: true
    },
    {
      id: '3',
      title: 'Economic & Regional Integration Diplomacy',
      description: 'Trade negotiations and economic partnership agreements',
      instructor: 'Ambassador Sarah Ochieng',
      progress: 20,
      totalModules: 6,
      completedModules: 1,
      nextDeadline: 'Mar 10, 2025',
      rating: 4.7,
      enrolledStudents: 67,
      estimatedHours: 30,
      difficulty: 'Beginner' as const,
      category: 'Economic Affairs',
      isEnrolled: true
    }
  ];

  const recentActivity = [
    {
      type: 'assignment_submitted',
      title: 'Policy Brief: Kenya\'s Climate Commitments',
      course: 'Environmental Diplomacy',
      time: '2 hours ago'
    },
    {
      type: 'video_completed',
      title: 'Climate Change & Diplomatic Strategy',
      course: 'Environmental Diplomacy',
      time: '1 day ago'
    },
    {
      type: 'discussion_posted',
      title: 'Discussion: Regional Peace Initiatives',
      course: 'Conflict Resolution',
      time: '2 days ago'
    },
    {
      type: 'grade_received',
      title: 'Module 1 Assessment',
      course: 'Environmental Diplomacy',
      time: '3 days ago'
    }
  ];

  const quickStats = {
    coursesEnrolled: enrolledCourses.length,
    overallProgress: Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length),
    totalHours: enrolledCourses.reduce((acc, course) => acc + course.estimatedHours, 0),
    upcomingDeadlines: 3,
    certificatesEarned: 1
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-muted-foreground">
                Continue your diplomatic training and stay on track with your FSA learning goals.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Badge variant="outline">{user?.level}</Badge>
                <Badge variant="outline" className="text-primary border-primary">{user?.department}</Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{quickStats.overallProgress}%</p>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{quickStats.coursesEnrolled}</p>
              <p className="text-xs text-muted-foreground">Courses Enrolled</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold">{quickStats.overallProgress}%</p>
              <p className="text-xs text-muted-foreground">Avg Progress</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold">{quickStats.totalHours}h</p>
              <p className="text-xs text-muted-foreground">Total Hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-orange-600" />
              <p className="text-2xl font-bold">{quickStats.upcomingDeadlines}</p>
              <p className="text-xs text-muted-foreground">Due Soon</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
              <p className="text-2xl font-bold">{quickStats.certificatesEarned}</p>
              <p className="text-xs text-muted-foreground">Certificates</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Courses */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">My Courses</h2>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Browse All Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard key={course.id} course={course} variant="enrolled" />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest learning activities and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.course}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 text-center">
              <PlayCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Continue Learning</h3>
              <p className="text-xs text-muted-foreground">Resume where you left off</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">View Calendar</h3>
              <p className="text-xs text-muted-foreground">Check upcoming deadlines</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Join Discussion</h3>
              <p className="text-xs text-muted-foreground">Connect with fellow diplomats</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">View Achievements</h3>
              <p className="text-xs text-muted-foreground">See your progress and awards</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default CanvasDashboard;