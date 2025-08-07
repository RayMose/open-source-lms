
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCourseStore, type Course, type Lesson } from '@/store/courseStore';
import { ArrowLeft, Clock, BookOpen, Award, CheckCircle, Play, ChevronRight, Users, Save } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { toast } from '@/hooks/use-toast';

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { courses, fetchCourses, isLoading, markLessonComplete } = useCourseStore();
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  
  useEffect(() => {
    if (courses.length === 0) {
      fetchCourses();
    }
  }, [courses.length, fetchCourses]);
  
  const course = courses.find(c => c.id === courseId);
  
  useEffect(() => {
    if (course && course.lessons.length > 0 && !activeLesson) {
      setActiveLesson(course.lessons[0]);
    }
  }, [course, activeLesson]);
  
  const handleLessonClick = (lesson: Lesson) => {
    setActiveLesson(lesson);
  };
  
  const handleMarkComplete = () => {
    if (courseId && activeLesson) {
      markLessonComplete(courseId, activeLesson.id);
      toast({
        title: "Lesson Completed",
        description: `You've completed "${activeLesson.title}"`,
      });
      
      if (course) {
        const currentIndex = course.lessons.findIndex(l => l.id === activeLesson.id);
        const nextLesson = course.lessons[currentIndex + 1];
        if (nextLesson) {
          setActiveLesson(nextLesson);
        }
      }
    }
  };
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) {
      return `${mins} min`;
    } else if (mins === 0) {
      return `${hours} hr`;
    } else {
      return `${hours} hr ${mins} min`;
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/courses" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Courses
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      {/* Course Header */}
      <div className="bg-muted border-b border-border pt-20">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{course?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center space-x-6">
              {/* Course icon/logo */}
              <div className="hidden md:block h-24 w-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl flex-shrink-0 p-1 border border-primary/30">
                <div className="w-full h-full rounded-lg flex items-center justify-center bg-background/80">
                  <BookOpen size={32} className="text-primary" />
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{course.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-muted-foreground" />
                    <span>Instructor: {course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-muted-foreground" />
                    <span>{formatDuration(course.duration)}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} className="text-muted-foreground" />
                    <span>{course.lessons.length} lessons</span>
                  </div>
                  
                  <div className="px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-blue-500/10 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400">
                    {course.level}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Save button */}
            <Button variant="outline" className="border-border hover:bg-muted text-foreground">
              <Save size={16} className="mr-2" />
              Save
            </Button>
          </div>
          
          {/* Progress Bar */}
          {course.progress !== undefined && (
            <div className="mt-6 max-w-md">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-muted-foreground">Course Progress</p>
                <span className="text-sm font-medium text-primary">{Math.round(course.progress)}% complete</span>
              </div>
              <ProgressBar progress={course.progress} height={6} className="w-full" />
            </div>
          )}
        </div>
      </div>
      
      <main className="flex-grow pt-6 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Content - Lesson List */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Content Outline</h2>
                  <span className="text-xs text-primary">{course.lessons.length} lessons</span>
                </div>
                
                <div className="divide-y divide-border">
                  {course.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson)}
                      className={`w-full text-left p-4 transition-colors hover:bg-muted flex items-start gap-3 ${
                        activeLesson?.id === lesson.id ? 'bg-muted' : ''
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                        lesson.completed 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-muted-foreground/30 text-muted-foreground'
                      }`}>
                        {lesson.completed ? (
                          <CheckCircle size={16} className="text-primary" />
                        ) : (
                          <span className="text-xs">{lesson.order}</span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className={`font-medium ${activeLesson?.id === lesson.id ? 'text-primary' : 'text-card-foreground'}`}>{lesson.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            <Clock size={12} className="inline mr-1" />
                            {lesson.duration} min
                          </span>
                          {lesson.completed && (
                            <span className="text-xs text-primary">Completed</span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Lesson Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {activeLesson && (
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  {/* Video Section */}
                  <div className="aspect-video bg-black relative group">
                    {/* Placeholder for video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full h-16 w-16 bg-primary/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:bg-primary/40 transition-all">
                        <Play size={24} className="text-primary ml-1" />
                      </div>
                    </div>
                    
                    {/* Video placeholder text */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="bg-black/40 backdrop-blur-sm p-3 rounded-lg inline-block">
                        <p className="text-sm">{activeLesson.title}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lesson Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{activeLesson.title}</h2>
                    
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <p>{activeLesson.content}</p>
                      
                      {/* Placeholder for actual lesson content */}
                      <div className="my-8 p-6 bg-muted rounded-lg border border-border">
                        <p className="text-muted-foreground">
                          This is a placeholder for the lesson content. In a real application, this would contain
                          rich multimedia content including videos, interactive exercises, and more detailed explanations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        <Clock size={16} className="inline mr-1" />
                        {activeLesson.duration} min
                      </div>
                      
                      <Button 
                        onClick={handleMarkComplete}
                        disabled={activeLesson.completed}
                        className={`inline-flex items-center gap-2 ${activeLesson.completed ? 'bg-primary/30 hover:bg-primary/30' : ''}`}
                      >
                        {activeLesson.completed ? (
                          <>
                            <CheckCircle size={16} />
                            Completed
                          </>
                        ) : (
                          <>
                            <CheckCircle size={16} />
                            Mark as Complete
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
