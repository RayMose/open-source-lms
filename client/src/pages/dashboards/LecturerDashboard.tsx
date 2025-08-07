import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/store/authStore';
import { 
  Users, 
  BookOpen, 
  Video, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  FileText,
  MessageSquare,
  Award
} from 'lucide-react';

const LecturerDashboard = () => {
  const { user } = useAuthStore();

  const upcomingClasses = [
    {
      id: 1,
      title: "Environmental Diplomacy Fundamentals",
      time: "10:00 AM - 12:00 PM",
      date: "Today",
      students: 24,
      type: "Live Session"
    },
    {
      id: 2,
      title: "Climate Change Negotiations",
      time: "2:00 PM - 4:00 PM", 
      date: "Tomorrow",
      students: 18,
      type: "Workshop"
    }
  ];

  const courseStats = [
    {
      title: "Environmental Diplomacy",
      students: 156,
      completion: 78,
      rating: 4.8,
      status: "Active"
    },
    {
      title: "Sustainable Development Goals",
      students: 89,
      completion: 92,
      rating: 4.9,
      status: "Active"
    }
  ];

  const recentSubmissions = [
    {
      student: "James Mwangi",
      assignment: "Policy Analysis: Kenya's Climate Commitments",
      submitted: "2 hours ago",
      status: "pending"
    },
    {
      student: "Sarah Ochieng",
      assignment: "Case Study: Paris Agreement Implementation",
      submitted: "1 day ago", 
      status: "reviewed"
    },
    {
      student: "David Kiprop",
      assignment: "Diplomatic Brief: COP28 Outcomes",
      submitted: "2 days ago",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Lecturer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          <Badge variant="outline" className="mt-1">{user?.department}</Badge>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-primary-foreground">
            <Video className="w-4 h-4 mr-2" />
            Start Live Session
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Create Assignment
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Environmental Diplomacy Track
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              Assignments awaiting review
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">
              Course satisfaction rating
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Classes */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Classes
            </CardTitle>
            <CardDescription>Your scheduled training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">{class_.title}</h4>
                    <p className="text-sm text-muted-foreground">{class_.date} • {class_.time}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{class_.type}</Badge>
                      <span className="text-sm text-muted-foreground">{class_.students} students</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Join</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Submissions */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Submissions
            </CardTitle>
            <CardDescription>Student assignments for review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSubmissions.map((submission, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">{submission.student}</h4>
                    <p className="text-sm text-muted-foreground">{submission.assignment}</p>
                    <p className="text-xs text-muted-foreground mt-1">{submission.submitted}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {submission.status === 'pending' ? (
                      <Badge variant="outline" className="text-orange-600">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Reviewed
                      </Badge>
                    )}
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Management */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Course Management</CardTitle>
          <CardDescription>Manage your diplomatic training courses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {courseStats.map((course, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{course.title}</h3>
                  <Badge className="bg-primary text-primary-foreground">{course.status}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{course.students}</p>
                    <p className="text-xs text-muted-foreground">Students</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{course.completion}%</p>
                    <p className="text-xs text-muted-foreground">Completion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-600">{course.rating}</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Manage Course
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LecturerDashboard;