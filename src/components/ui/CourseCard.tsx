
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { type Course } from '@/store/courseStore';
import { Clock, BookOpen, BarChart } from 'lucide-react';

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
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
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Link 
      to={`/course/${course.id}`}
      className="block group"
    >
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:translate-y-[-4px]">
        {/* Course image */}
        <div className="aspect-[16/9] relative w-full overflow-hidden bg-gray-100">
          <img
            src={course.thumbnail}
            alt={course.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'blur-0' : 'blur-sm'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Level badge */}
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getLevelColor(course.level)}`}>
              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
            </span>
          </div>
        </div>
        
        {/* Course details */}
        <div className="p-5">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors mb-2">
            {course.title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {course.description}
          </p>
          
          {/* Course meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock size={14} className="text-gray-400" />
                <span>{formatDuration(course.duration)}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <BookOpen size={14} className="text-gray-400" />
                <span>{course.lessons.length} lessons</span>
              </div>
            </div>
            
            {/* Progress */}
            {typeof course.progress === 'number' && (
              <div className="flex items-center gap-1.5">
                <BarChart size={14} className="text-primary" />
                <span className="text-sm font-medium text-primary">{course.progress}%</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
