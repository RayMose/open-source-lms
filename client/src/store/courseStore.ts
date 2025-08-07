
import { create } from 'zustand';

export type Lesson = {
  id: string;
  title: string;
  content: string;
  duration: number; // in minutes
  order: number;
  completed?: boolean;
};

export type Quiz = {
  id: string;
  title: string;
  questions: {
    id: string;
    text: string;
    options: string[];
    correctOption: number;
  }[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  duration: number; // total duration in minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  quiz?: Quiz;
  progress?: number; // percentage completed
};

export type CourseProgress = {
  courseId: string;
  completedLessons: string[]; // lesson ids
  quizScore?: number;
  lastAccessed: Date;
};

type CourseState = {
  courses: Course[];
  progress: CourseProgress[];
  isLoading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  markLessonComplete: (courseId: string, lessonId: string) => void;
  saveQuizResult: (courseId: string, score: number) => void;
};

// Sample data
const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Design Principles',
    description: 'Learn the fundamental principles of design thinking and application.',
    thumbnail: '/placeholder.svg',
    instructor: 'Sarah Johnson',
    duration: 120,
    level: 'beginner',
    lessons: [
      {
        id: '1-1',
        title: 'What is Design Thinking?',
        content: 'Introduction to the design thinking process and its importance.',
        duration: 15,
        order: 1,
      },
      {
        id: '1-2',
        title: 'Key Design Principles',
        content: 'Exploring fundamental design principles that guide effective design.',
        duration: 20,
        order: 2,
      },
      {
        id: '1-3',
        title: 'Design in Practice',
        content: 'Real-world applications of design thinking in various industries.',
        duration: 25,
        order: 3,
      },
    ],
    quiz: {
      id: '1-quiz',
      title: 'Design Principles Quiz',
      questions: [
        {
          id: 'q1',
          text: 'What is the first step in the design thinking process?',
          options: ['Prototype', 'Empathize', 'Define', 'Ideate'],
          correctOption: 1,
        },
        {
          id: 'q2',
          text: 'Which principle relates to the alignment of elements?',
          options: ['Contrast', 'Repetition', 'Alignment', 'Proximity'],
          correctOption: 2,
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Advanced UI Animation Techniques',
    description: 'Master the art of creating smooth, meaningful UI animations.',
    thumbnail: '/placeholder.svg',
    instructor: 'Alex Chen',
    duration: 180,
    level: 'intermediate',
    lessons: [
      {
        id: '2-1',
        title: 'Animation Fundamentals',
        content: 'Core principles of animation in user interfaces.',
        duration: 20,
        order: 1,
      },
      {
        id: '2-2',
        title: 'Timing and Easing',
        content: 'How to perfect the timing and easing of your animations.',
        duration: 25,
        order: 2,
      },
      {
        id: '2-3',
        title: 'Micro-interactions',
        content: 'Creating subtle animations that enhance user experience.',
        duration: 30,
        order: 3,
      },
      {
        id: '2-4',
        title: 'Performance Optimization',
        content: 'Ensuring your animations run smoothly on all devices.',
        duration: 35,
        order: 4,
      },
    ],
  },
  {
    id: '3',
    title: 'Product Design Essentials',
    description: 'A comprehensive guide to designing user-centered products.',
    thumbnail: '/placeholder.svg',
    instructor: 'Maya Patel',
    duration: 240,
    level: 'advanced',
    lessons: [
      {
        id: '3-1',
        title: 'Understanding User Needs',
        content: 'Methods for researching and identifying user needs.',
        duration: 30,
        order: 1,
      },
      {
        id: '3-2',
        title: 'Ideation Techniques',
        content: 'Creative approaches to generating product ideas.',
        duration: 35,
        order: 2,
      },
      {
        id: '3-3',
        title: 'Prototyping Methods',
        content: 'Different approaches to prototyping product concepts.',
        duration: 40,
        order: 3,
      },
    ],
  },
];

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  progress: [],
  isLoading: false,
  error: null,
  
  fetchCourses: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo, we'll use the sample data
      set({
        courses: sampleCourses,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: 'Failed to fetch courses',
        isLoading: false,
      });
    }
  },
  
  markLessonComplete: (courseId, lessonId) => {
    // Update progress
    const { progress } = get();
    const courseProgress = progress.find(p => p.courseId === courseId);
    
    let newProgress;
    
    if (courseProgress) {
      // Update existing progress
      if (!courseProgress.completedLessons.includes(lessonId)) {
        newProgress = progress.map(p => 
          p.courseId === courseId 
            ? { 
                ...p, 
                completedLessons: [...p.completedLessons, lessonId],
                lastAccessed: new Date()
              }
            : p
        );
      } else {
        // Lesson already completed, just update the lastAccessed date
        newProgress = progress.map(p => 
          p.courseId === courseId 
            ? { ...p, lastAccessed: new Date() }
            : p
        );
      }
    } else {
      // Create new progress entry
      newProgress = [
        ...progress,
        {
          courseId,
          completedLessons: [lessonId],
          lastAccessed: new Date()
        }
      ];
    }
    
    // Update course objects with progress percentage
    const updatedCourses = get().courses.map(course => {
      if (course.id === courseId) {
        const courseProgress = newProgress.find(p => p.courseId === courseId);
        if (courseProgress) {
          const progressPercentage = Math.round(
            (courseProgress.completedLessons.length / course.lessons.length) * 100
          );
          
          return {
            ...course,
            progress: progressPercentage,
            lessons: course.lessons.map(lesson => ({
              ...lesson,
              completed: courseProgress.completedLessons.includes(lesson.id)
            }))
          };
        }
      }
      return course;
    });
    
    set({ 
      progress: newProgress,
      courses: updatedCourses
    });
  },
  
  saveQuizResult: (courseId, score) => {
    const { progress } = get();
    
    const newProgress = progress.map(p => 
      p.courseId === courseId 
        ? { ...p, quizScore: score, lastAccessed: new Date() }
        : p
    );
    
    set({ progress: newProgress });
  },
}));
