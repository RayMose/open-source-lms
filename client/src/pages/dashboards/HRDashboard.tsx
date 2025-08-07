import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/store/authStore';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Award,
  TrendingUp,
  FileText,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const HRDashboard = () => {
  const { user } = useAuthStore();

  const staffMetrics = [
    { title: "Total Diplomats", value: 342, change: "+8", period: "this month" },
    { title: "In Training", value: 89, change: "+15", period: "this month" },
    { title: "Certified Officers", value: 253, change: "+12", period: "this month" },
    { title: "Pending Certifications", value: 34, change: "-3", period: "this week" }
  ];

  const recentHires = [
    {
      name: "Peter Kamau",
      position: "Third Secretary Cadet",
      department: "Foreign Service",
      startDate: "Jan 15, 2025",
      trainingStatus: "In Progress",
      completedModules: 2
    },
    {
      name: "Mary Njeri",
      position: "Second Secretary", 
      department: "Economic Affairs",
      startDate: "Jan 10, 2025",
      trainingStatus: "Completed",
      completedModules: 5
    },
    {
      name: "John Ochieng",
      position: "Third Secretary Cadet",
      department: "Consular Affairs", 
      startDate: "Dec 20, 2024",
      trainingStatus: "In Progress",
      completedModules: 4
    }
  ];

  const trainingProgress = [
    {
      program: "Environmental Diplomacy",
      enrolled: 45,
      completed: 38,
      inProgress: 7,
      completionRate: 84
    },
    {
      program: "Peacebuilding & Conflict Resolution",
      enrolled: 52,
      completed: 41,
      inProgress: 11,
      completionRate: 79
    },
    {
      program: "Economic & Regional Integration",
      enrolled: 38,
      completed: 29,
      inProgress: 9,
      completionRate: 76
    }
  ];

  const upcomingEvents = [
    {
      title: "New Diplomat Orientation",
      date: "Jan 20, 2025",
      time: "9:00 AM",
      attendees: 12,
      type: "Orientation"
    },
    {
      title: "Mid-Year Performance Reviews",
      date: "Jan 25-30, 2025", 
      time: "All Day",
      attendees: 156,
      type: "Review"
    },
    {
      title: "FSA Annual Training Summit",
      date: "Feb 15, 2025",
      time: "8:00 AM",
      attendees: 300,
      type: "Conference"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          <Badge variant="outline" className="mt-1">{user?.department}</Badge>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-primary-foreground">
            <UserPlus className="w-4 h-4 mr-2" />
            Add New Officer
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Staff Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {staffMetrics.map((metric, index) => (
          <Card key={index} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.change} {metric.period}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Hires */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              Recent Hires
            </CardTitle>
            <CardDescription>New diplomatic officers and their training progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentHires.map((hire, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{hire.name}</h4>
                      <p className="text-sm text-muted-foreground">{hire.position}</p>
                      <p className="text-sm text-muted-foreground">{hire.department}</p>
                      <p className="text-xs text-muted-foreground mt-1">Started: {hire.startDate}</p>
                    </div>
                    <div className="text-right">
                      {hire.trainingStatus === 'Completed' ? (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                          <Clock className="w-3 h-3 mr-1" />
                          In Progress
                        </Badge>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {hire.completedModules}/5 modules
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming HR Events
            </CardTitle>
            <CardDescription>Scheduled orientations, reviews, and conferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">{event.type}</Badge>
                        <span className="text-sm text-muted-foreground">{event.attendees} attendees</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Progress Overview */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Training Program Progress
          </CardTitle>
          <CardDescription>Overview of all FSA training programs and completion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {trainingProgress.map((program, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{program.program}</h3>
                  <Badge className="bg-primary text-primary-foreground">
                    {program.completionRate}% completion
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-primary">{program.enrolled}</p>
                    <p className="text-muted-foreground">Enrolled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-green-600">{program.completed}</p>
                    <p className="text-muted-foreground">Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-yellow-600">{program.inProgress}</p>
                    <p className="text-muted-foreground">In Progress</p>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${program.completionRate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Send Notifications
            </CardTitle>
            <CardDescription>
              Send training reminders and updates to diplomatic staff
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance Analytics
            </CardTitle>
            <CardDescription>
              View detailed performance metrics and training effectiveness
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-card cursor-pointer hover:bg-accent transition-colors">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Compliance Reports
            </CardTitle>
            <CardDescription>
              Generate training compliance and certification reports
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default HRDashboard;