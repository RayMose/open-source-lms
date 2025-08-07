
import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';

const PopularCoursesTable = () => {
  const { theme } = useTheme();
  
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      enrollments: 1243,
      rating: 4.8,
      completion: 76,
      revenue: 24860
    },
    {
      id: 2,
      title: 'Data Science and Machine Learning',
      enrollments: 956,
      rating: 4.7,
      completion: 68,
      revenue: 19120
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      enrollments: 782,
      rating: 4.9,
      completion: 82,
      revenue: 15640
    },
    {
      id: 4,
      title: 'JavaScript: The Advanced Concepts',
      enrollments: 645,
      rating: 4.6,
      completion: 71,
      revenue: 12900
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      enrollments: 534,
      rating: 4.5,
      completion: 65,
      revenue: 10680
    },
  ];

  // Helper function for progress bar color
  const getCompletionColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted/50 text-left">
            <th className="p-3 text-sm font-medium text-muted-foreground">Course</th>
            <th className="p-3 text-sm font-medium text-muted-foreground text-right">Enrollments</th>
            <th className="p-3 text-sm font-medium text-muted-foreground text-right">Rating</th>
            <th className="p-3 text-sm font-medium text-muted-foreground">Completion</th>
            <th className="p-3 text-sm font-medium text-muted-foreground text-right">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b border-border/50 hover:bg-muted/20">
              <td className="p-3 text-sm font-medium">{course.title}</td>
              <td className="p-3 text-sm text-right">{course.enrollments}</td>
              <td className="p-3 text-sm text-right">
                <div className="flex items-center justify-end">
                  <span className="mr-1">{course.rating}</span>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
              </td>
              <td className="p-3 text-sm">
                <div className="flex items-center">
                  <div className="w-full bg-muted rounded-full h-2 mr-2">
                    <div 
                      className={`h-2 rounded-full ${getCompletionColor(course.completion)}`} 
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                  <span className="text-xs">{course.completion}%</span>
                </div>
              </td>
              <td className="p-3 text-sm text-right">${course.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopularCoursesTable;
