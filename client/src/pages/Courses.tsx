
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useCourseStore, type Course } from '@/store/courseStore';
import CourseCard from '@/components/ui/CourseCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LearningPathSelector from '@/components/course/LearningPathSelector';

const levelFilters = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const { courses, fetchCourses, isLoading } = useCourseStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [showLearningPaths, setShowLearningPaths] = useState(true);
  
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);
  
  useEffect(() => {
    if (courses.length > 0) {
      let filtered = [...courses];
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(course => 
          course.title.toLowerCase().includes(query) || 
          course.description.toLowerCase().includes(query)
        );
      }
      
      // Filter by level
      if (selectedLevel !== 'All Levels') {
        filtered = filtered.filter(course => 
          course.level.toLowerCase() === selectedLevel.toLowerCase()
        );
      }
      
      setFilteredCourses(filtered);
    }
  }, [courses, searchQuery, selectedLevel]);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6 animate-fade-in">
          {/* Page Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              FSA Diplomatic Training Modules
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional development courses designed for Kenya's foreign service officers across three specialized training levels.
            </p>
          </div>

          {/* Learning Path Selector */}
          {showLearningPaths && (
            <div className="mb-12">
              <LearningPathSelector 
                onPathSelect={(pathId) => {
                  console.log('Selected learning path:', pathId);
                  setShowLearningPaths(false);
                }} 
              />
            </div>
          )}
          
          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses..."
                  className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {levelFilters.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      selectedLevel === level
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-card-foreground border border-input hover:bg-accent'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Course Grid */}
          {isLoading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : filteredCourses.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">Showing {filteredCourses.length} courses</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <h3 className="text-lg font-medium mb-2 text-foreground">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
