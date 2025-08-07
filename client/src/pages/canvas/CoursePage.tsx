import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModuleView from '@/components/canvas/ModuleView';
import RightSidebar from '@/components/canvas/RightSidebar';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  MessageSquare,
  Award,
  Settings,
  Video,
  Star,
  Clock,
  Target
} from 'lucide-react';

const CoursePage = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('home');

  // Mock course data - would come from API
  const course = {
    id: courseId,
    title: 'Sustainable Development & Environmental Diplomacy',
    description: 'Master Kenya\'s environmental leadership in global climate negotiations and sustainable development initiatives.',
    instructor: 'Ambassador Dr. Maria Wanjiku',
    instructorTitle: 'Senior Environmental Diplomat, Ministry of Foreign Affairs',
    rating: 4.9,
    enrolledStudents: 156,
    estimatedHours: 25,
    difficulty: 'Intermediate',
    category: 'Environmental Policy',
    startDate: 'January 15, 2025',
    endDate: 'March 30, 2025',
    progress: 75,
    totalModules: 5,
    completedModules: 4
  };

  const syllabusItems = [
    {
      week: 'Week 1-2',
      title: 'Introduction to Environmental Diplomacy',
      topics: [
        'Kenya\'s environmental leadership role',
        'Climate change and diplomatic strategy',
        'International environmental agreements'
      ],
      assignments: ['Policy Brief: Kenya\'s Climate Commitments']
    },
    {
      week: 'Week 3-4',
      title: 'Sustainable Development Goals & Implementation',
      topics: [
        'SDG framework and Kenya\'s progress',
        'Green economy transformation',
        'Multilateral SDG negotiations'
      ],
      assignments: ['Case Study: Green Economy Initiatives']
    },
    {
      week: 'Week 5-6',
      title: 'Climate Finance & Technology Transfer',
      topics: [
        'International climate finance mechanisms',
        'Technology transfer agreements',
        'Capacity building for climate action'
      ],
      assignments: ['Negotiation Simulation: COP30 Preparation']
    }
  ];

  const announcements = [
    {
      title: 'New Climate Diplomacy Resources Available',
      date: 'January 18, 2025',
      content: 'I\'ve uploaded the latest UNEP climate negotiation guidelines and Kenya\'s updated NDC documents to the Files section. Please review these before our next module.',
      author: 'Ambassador Dr. Maria Wanjiku'
    },
    {
      title: 'Guest Lecture: Regional Climate Initiatives',
      date: 'January 15, 2025',
      content: 'Join us for a special session with Ambassador John Kamau on East African climate cooperation. Session will be recorded for those who cannot attend live.',
      author: 'Ambassador Dr. Maria Wanjiku'
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.estimatedHours} hours</span>
                  </div>
                  <Badge variant="outline">{course.difficulty}</Badge>
                </div>
              </div>
              
              <div className="text-right">
                <div className="mb-2">
                  <span className="text-2xl font-bold text-primary">{course.progress}%</span>
                  <p className="text-sm text-muted-foreground">Complete</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {course.completedModules}/{course.totalModules} modules
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Navigation Tabs */}
        <div className="border-b border-border">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="home" 
                className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Home
              </TabsTrigger>
              <TabsTrigger 
                value="modules" 
                className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <Target className="w-4 h-4 mr-2" />
                Modules
              </TabsTrigger>
              <TabsTrigger 
                value="assignments" 
                className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <FileText className="w-4 h-4 mr-2" />
                Assignments
              </TabsTrigger>
              <TabsTrigger 
                value="discussions" 
                className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Discussions
              </TabsTrigger>
              <TabsTrigger 
                value="grades" 
                className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <Award className="w-4 h-4 mr-2" />
                Grades
              </TabsTrigger>
              <TabsTrigger 
                value="syllabus" 
                className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Syllabus
              </TabsTrigger>
            </TabsList>

            <div className="p-6">
              <TabsContent value="home" className="mt-0 space-y-6">
                {/* Course Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Course Overview</CardTitle>
                    <CardDescription>About this course and learning objectives</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground">
                      This comprehensive course prepares Kenya's diplomatic corps for leadership in global environmental negotiations. 
                      You'll master the skills needed to represent Kenya's interests in climate talks, sustainable development forums, 
                      and environmental treaty negotiations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Learning Objectives</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Master Kenya's climate policy framework</li>
                          <li>• Develop negotiation skills for environmental treaties</li>
                          <li>• Understand sustainable development diplomacy</li>
                          <li>• Practice multilateral environmental negotiations</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Course Details</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Start Date: {course.startDate}</p>
                          <p>End Date: {course.endDate}</p>
                          <p>Instructor: {course.instructorTitle}</p>
                          <p>Students Enrolled: {course.enrolledStudents}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Announcements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Announcements</CardTitle>
                    <CardDescription>Latest updates from your instructor</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{announcement.title}</h4>
                          <span className="text-sm text-muted-foreground">{announcement.date}</span>
                        </div>
                        <p className="text-sm text-foreground mb-2">{announcement.content}</p>
                        <p className="text-xs text-muted-foreground">By {announcement.author}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="modules" className="mt-0">
                <ModuleView />
              </TabsContent>

              <TabsContent value="assignments" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Assignments</CardTitle>
                    <CardDescription>Course assignments and submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Assignment management interface would be implemented here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussions" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussions</CardTitle>
                    <CardDescription>Course discussion forums</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Discussion forum interface would be implemented here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grades" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Grades</CardTitle>
                    <CardDescription>Your course performance and feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Gradebook interface would be implemented here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="syllabus" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Syllabus</CardTitle>
                    <CardDescription>Complete course structure and timeline</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {syllabusItems.map((item, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{item.week}</Badge>
                          <h3 className="font-medium">{item.title}</h3>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="font-medium text-muted-foreground mb-1">Topics:</p>
                            <ul className="text-foreground space-y-1">
                              {item.topics.map((topic, topicIndex) => (
                                <li key={topicIndex}>• {topic}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-medium text-muted-foreground mb-1">Assignments:</p>
                            <ul className="text-foreground space-y-1">
                              {item.assignments.map((assignment, assignmentIndex) => (
                                <li key={assignmentIndex}>• {assignment}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default CoursePage;