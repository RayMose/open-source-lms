import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Bell,
  MessageSquare,
  Award,
  TrendingUp
} from 'lucide-react';

const RightSidebar = () => {
  const upcomingAssignments = [
    {
      title: 'Policy Brief: Kenya\'s Climate Commitments',
      course: 'Environmental Diplomacy',
      dueDate: 'Jan 25, 2025',
      priority: 'high',
      points: 100
    },
    {
      title: 'Discussion: SDG Partnerships',
      course: 'Sustainable Development',
      dueDate: 'Jan 28, 2025',
      priority: 'medium',
      points: 25
    },
    {
      title: 'Module 2 Assessment',
      course: 'Environmental Diplomacy',
      dueDate: 'Jan 30, 2025',
      priority: 'medium',
      points: 50
    }
  ];

  const recentFeedback = [
    {
      assignment: 'Climate Change Analysis',
      course: 'Environmental Diplomacy',
      grade: 'A-',
      feedback: 'Excellent analysis of Kenya\'s climate policy framework.',
      date: '3 days ago'
    },
    {
      assignment: 'Diplomacy Case Study',
      course: 'Conflict Resolution',
      grade: 'B+',
      feedback: 'Good understanding of peacekeeping strategies.',
      date: '1 week ago'
    }
  ];

  const announcements = [
    {
      title: 'New Climate Diplomacy Resources Available',
      course: 'Environmental Diplomacy',
      date: '2 days ago',
      preview: 'Access the latest UNEP climate negotiation guidelines...'
    },
    {
      title: 'Guest Lecture: Ambassador John Kamau',
      course: 'All Courses',
      date: '5 days ago',
      preview: 'Join us for a special session on regional integration...'
    }
  ];

  const learningStreak = {
    currentStreak: 7,
    longestStreak: 12,
    weeklyGoal: 5,
    completedThisWeek: 4
  };

  return (
    <div className="w-80 bg-background border-l border-border p-4 space-y-6 overflow-y-auto">
      {/* To Do List */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="w-5 h-5" />
            To Do
          </CardTitle>
          <CardDescription>Upcoming assignments and deadlines</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingAssignments.map((assignment, index) => (
            <div key={index} className="p-3 border border-border rounded-lg space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-sm leading-tight">{assignment.title}</h4>
                <Badge 
                  variant={assignment.priority === 'high' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {assignment.priority}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{assignment.course}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Due: {assignment.dueDate}</span>
                <span className="font-medium">{assignment.points} pts</span>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full">
            <Calendar className="w-4 h-4 mr-2" />
            View All Assignments
          </Button>
        </CardContent>
      </Card>

      {/* Recent Feedback */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Recent Feedback
          </CardTitle>
          <CardDescription>Instructor comments and grades</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentFeedback.map((feedback, index) => (
            <div key={index} className="p-3 border border-border rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{feedback.assignment}</h4>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  {feedback.grade}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{feedback.course}</p>
              <p className="text-xs text-foreground">{feedback.feedback}</p>
              <p className="text-xs text-muted-foreground">{feedback.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Learning Progress */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Learning Streak
          </CardTitle>
          <CardDescription>Your learning consistency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{learningStreak.currentStreak}</p>
              <p className="text-xs text-muted-foreground">Current Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-muted-foreground">{learningStreak.longestStreak}</p>
              <p className="text-xs text-muted-foreground">Best Streak</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Weekly Goal</span>
              <span>{learningStreak.completedThisWeek}/{learningStreak.weeklyGoal} days</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(learningStreak.completedThisWeek / learningStreak.weeklyGoal) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Announcements */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Recent Announcements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {announcements.map((announcement, index) => (
            <div key={index} className="p-3 border border-border rounded-lg space-y-2">
              <h4 className="font-medium text-sm">{announcement.title}</h4>
              <p className="text-xs text-muted-foreground">{announcement.course}</p>
              <p className="text-xs text-foreground">{announcement.preview}</p>
              <p className="text-xs text-muted-foreground">{announcement.date}</p>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full">
            View All Announcements
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <MessageSquare className="w-4 h-4 mr-2" />
            Start Discussion
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Award className="w-4 h-4 mr-2" />
            View Certificates
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Study Time
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;