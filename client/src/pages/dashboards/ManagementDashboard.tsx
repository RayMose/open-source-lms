import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/store/authStore';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  Globe, 
  Building,
  DollarSign,
  BarChart3,
  Calendar,
  Target,
  CheckCircle2,
  AlertCircle,
  PieChart,
  FileText
} from 'lucide-react';

const ManagementDashboard = () => {
  const { user } = useAuthStore();

  const keyMetrics = [
    { 
      title: "Total Diplomats", 
      value: "342", 
      change: "+12", 
      period: "vs last quarter",
      icon: Users,
      color: "text-blue-600"
    },
    { 
      title: "Training Budget Utilization", 
      value: "78%", 
      change: "+5%", 
      period: "vs planned",
      icon: DollarSign,
      color: "text-green-600"
    },
    { 
      title: "Certification Rate", 
      value: "92%", 
      change: "+8%", 
      period: "vs last year",
      icon: Award,
      color: "text-yellow-600"
    },
    { 
      title: "Training Effectiveness", 
      value: "4.7", 
      change: "+0.3", 
      period: "satisfaction score",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const strategicInitiatives = [
    {
      title: "Digital Diplomacy Training",
      progress: 75,
      status: "On Track",
      dueDate: "Q2 2025",
      budget: "$125,000",
      participants: 89
    },
    {
      title: "Climate Diplomacy Certification",
      progress: 60,
      status: "In Progress", 
      dueDate: "Q3 2025",
      budget: "$98,000",
      participants: 156
    },
    {
      title: "Consular Services Modernization",
      progress: 45,
      status: "Planning",
      dueDate: "Q4 2025", 
      budget: "$200,000",
      participants: 67
    }
  ];

  const departmentPerformance = [
    { name: "Bilateral Relations", officers: 89, completion: 94, satisfaction: 4.8 },
    { name: "Multilateral Affairs", officers: 67, completion: 87, satisfaction: 4.6 },
    { name: "Economic Diplomacy", officers: 78, completion: 91, satisfaction: 4.7 },
    { name: "Consular Services", officers: 56, completion: 89, satisfaction: 4.5 },
    { name: "Public Diplomacy", officers: 52, completion: 92, satisfaction: 4.8 }
  ];

  const recentReports = [
    {
      title: "Q4 2024 Training Effectiveness Report",
      type: "Quarterly Analysis",
      date: "Jan 10, 2025",
      status: "Published"
    },
    {
      title: "Climate Diplomacy Program Assessment",
      type: "Program Evaluation",
      date: "Jan 8, 2025", 
      status: "Under Review"
    },
    {
      title: "Officer Development Pipeline Analysis", 
      type: "Strategic Report",
      date: "Jan 5, 2025",
      status: "Draft"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Executive Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          <Badge variant="outline" className="mt-1">{user?.level}</Badge>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-primary-foreground">
            <BarChart3 className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <IconComponent className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  {metric.change} {metric.period}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Strategic Initiatives */}
        <Card className="bg-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Strategic Initiatives
            </CardTitle>
            <CardDescription>Key training programs and modernization projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {strategicInitiatives.map((initiative, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{initiative.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Due: {initiative.dueDate} • Budget: {initiative.budget} • {initiative.participants} participants
                      </p>
                    </div>
                    <Badge variant={
                      initiative.status === 'On Track' ? 'default' :
                      initiative.status === 'In Progress' ? 'secondary' : 'outline'
                    }>
                      {initiative.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Reports
            </CardTitle>
            <CardDescription>Executive summaries and assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium text-sm">{report.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{report.type}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">{report.date}</p>
                    <Badge variant={
                      report.status === 'Published' ? 'default' :
                      report.status === 'Under Review' ? 'secondary' : 'outline'
                    }>
                      {report.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Department Performance Overview
          </CardTitle>
          <CardDescription>Training completion rates and satisfaction scores by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departmentPerformance.map((dept, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-border rounded-lg">
                <div>
                  <h3 className="font-medium">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.officers} officers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{dept.completion}%</p>
                  <p className="text-xs text-muted-foreground">Completion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">{dept.satisfaction}</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  {dept.completion >= 90 ? (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Excellent
                    </Badge>
                  ) : dept.completion >= 80 ? (
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                      <Clock className="w-3 h-3 mr-1" />
                      Good
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Needs Attention
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Global Impact & Recognition */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Global Impact
            </CardTitle>
            <CardDescription>FSA's international recognition and partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">UN Training Partnership</h4>
                  <p className="text-sm text-muted-foreground">Sustainable Development Goals</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">UNEP Climate Diplomacy</h4>
                  <p className="text-sm text-muted-foreground">Environmental Leadership Program</p>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Expanding</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium">AU Peace & Security</h4>
                  <p className="text-sm text-muted-foreground">Conflict Resolution Training</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">Planning</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Recent Achievements
            </CardTitle>
            <CardDescription>Recognition and milestones achieved</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <h4 className="font-medium">Excellence in Diplomatic Training</h4>
                </div>
                <p className="text-sm text-muted-foreground">African Union recognition for innovative climate diplomacy curriculum</p>
                <p className="text-xs text-muted-foreground mt-1">December 2024</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <h4 className="font-medium">92% Certification Achievement</h4>
                </div>
                <p className="text-sm text-muted-foreground">Highest certification rate in FSA's history across all programs</p>
                <p className="text-xs text-muted-foreground mt-1">Q4 2024</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <h4 className="font-medium">500+ Officers Trained</h4>
                </div>
                <p className="text-sm text-muted-foreground">Milestone reached in comprehensive diplomatic education</p>
                <p className="text-xs text-muted-foreground mt-1">January 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagementDashboard;