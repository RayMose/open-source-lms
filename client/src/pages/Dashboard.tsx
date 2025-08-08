
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Clock, BarChart2, Award } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useCourseStore, type Course } from '@/store/courseStore';
import CourseCard from '@/components/ui/CourseCard';
import ProgressBar from '@/components/ui/ProgressBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LecturerDashboard from '@/pages/dashboards/LecturerDashboard';
import ManagementDashboard from '@/pages/dashboards/ManagementDashboard';
import DiplomatDashboard from '@/pages/dashboards/DiplomatDashboard';

const Dashboard = () => {
  const { user, isAuthenticated, isLecturer, isHR, isManagement, isAdmin } = useAuthStore();
  const { courses, progress, fetchCourses, isLoading } = useCourseStore();
  const [inProgressCourses, setInProgressCourses] = useState<Course[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Route to role-specific dashboards
  if (user?.role === 'diplomat') {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow pt-20 pb-12">
          <div className="container mx-auto px-4 md:px-6 animate-fade-in">
            <DiplomatDashboard />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLecturer()) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow pt-20 pb-12">
          <div className="container mx-auto px-4 md:px-6 animate-fade-in">
            <LecturerDashboard />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isHR() || isManagement() || isAdmin()) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow pt-20 pb-12">
          <div className="container mx-auto px-4 md:px-6 animate-fade-in">
            <ManagementDashboard />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);
  
  useEffect(() => {
    if (courses.length > 0) {
      // Filter courses that have progress
      const coursesWithProgress = courses.filter(course => typeof course.progress === 'number');
      setInProgressCourses(coursesWithProgress);
    }
  }, [courses]);
  
  // Calculate overall stats
  const totalCoursesEnrolled = inProgressCourses.length;
  const coursesCompleted = inProgressCourses.filter(course => (course.progress ?? 0) === 100).length;
  const averageProgress = totalCoursesEnrolled > 0
    ? inProgressCourses.reduce((sum, course) => sum + (course.progress ?? 0), 0) / totalCoursesEnrolled
    : 0;
  
  // Sort courses by last accessed
  const sortedCourses = [...inProgressCourses].sort((a, b) => {
    const aProgress = progress.find(p => p.courseId === a.id);
    const bProgress = progress.find(p => p.courseId === b.id);
    
    if (!aProgress?.lastAccessed) return 1;
    if (!bProgress?.lastAccessed) return -1;
    
    return new Date(bProgress.lastAccessed).getTime() - new Date(aProgress.lastAccessed).getTime();
  });
  
  // Get recommended courses (those without progress)
  const recommendedCourses = courses.filter(course => typeof course.progress !== 'number').slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6 animate-fade-in">
          {/* Dashboard Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2 text-foreground">
              Welcome back, {user?.name}
            </h1>
            <p className="text-muted-foreground">
              Continue your diplomatic training and track your progress through FSA's specialized programs.
            </p>
            {user?.department && (
              <p className="text-sm text-primary mt-2">{user.department} • {user.level}</p>
            )}
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Enrolled Courses</p>
                  <h3 className="text-2xl font-semibold text-foreground">{totalCoursesEnrolled}</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Book className="w-5 h-5 text-primary" />
                </div>
              </div>
              <ProgressBar progress={totalCoursesEnrolled > 0 ? 100 : 0} />
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed</p>
                  <h3 className="text-2xl font-semibold text-foreground">{coursesCompleted}</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </div>
              <ProgressBar 
                progress={totalCoursesEnrolled > 0 ? (coursesCompleted / totalCoursesEnrolled) * 100 : 0} 
              />
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Progress</p>
                  <h3 className="text-2xl font-semibold text-foreground">{Math.round(averageProgress)}%</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BarChart2 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <ProgressBar progress={averageProgress} />
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Learning Time</p>
                  <h3 className="text-2xl font-semibold text-foreground">12h 30m</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
              </div>
              <ProgressBar progress={70} />
            </div>
          </div>
          
          {/* In Progress Courses */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Continue Learning</h2>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : inProgressCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedCourses.slice(0, 3).map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="text-lg font-medium mb-2 text-foreground">No courses in progress</h3>
                <p className="text-muted-foreground mb-6">Start your learning journey by enrolling in a course.</p>
                
                <button
                  onClick={() => navigate('/courses')}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Browse courses
                </button>
              </div>
            )}
          </div>
          
          {/* Recommended Courses */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Recommended for You</h2>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : recommendedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="text-lg font-medium text-foreground">No recommendations yet</h3>
                <p className="text-muted-foreground">Check back later for personalized course recommendations.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
