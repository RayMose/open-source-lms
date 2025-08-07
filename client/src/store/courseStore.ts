
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

// FSA Diplomatic Training Courses
const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Sustainable Development & Environmental Diplomacy',
    description: 'Master climate negotiations, green diplomacy principles, and environmental conflict resolution for sustainable development goals implementation.',
    thumbnail: '/placeholder.svg',
    instructor: 'Ambassador Dr. Maria Wanjiku',
    duration: 180,
    level: 'intermediate',
    lessons: [
      {
        id: '1-1',
        title: 'Introduction to Climate Diplomacy',
        content: 'Understanding the fundamentals of environmental diplomacy and Kenya\'s role in global climate negotiations.',
        duration: 30,
        order: 1,
      },
      {
        id: '1-2',
        title: 'UNFCCC and Paris Agreement Framework',
        content: 'Comprehensive overview of international climate governance structures and negotiation processes.',
        duration: 45,
        order: 2,
      },
      {
        id: '1-3',
        title: 'Green Diplomacy in Practice',
        content: 'Case studies of successful environmental diplomatic initiatives and Kenya\'s leadership in regional sustainability efforts.',
        duration: 40,
        order: 3,
      },
      {
        id: '1-4',
        title: 'Environmental Conflict Resolution',
        content: 'Diplomatic approaches to resolving resource-based conflicts and promoting regional environmental cooperation.',
        duration: 35,
        order: 4,
      },
      {
        id: '1-5',
        title: 'SDG Implementation Strategies',
        content: 'Practical approaches to implementing and monitoring Sustainable Development Goals through diplomatic channels.',
        duration: 30,
        order: 5,
      },
    ],
    quiz: {
      id: '1-quiz',
      title: 'Environmental Diplomacy Assessment',
      questions: [
        {
          id: 'q1',
          text: 'What is the primary objective of the Paris Agreement?',
          options: ['Economic development', 'Limiting global temperature rise', 'Trade facilitation', 'Cultural exchange'],
          correctOption: 1,
        },
        {
          id: 'q2',
          text: 'Which UN body is the primary forum for climate negotiations?',
          options: ['General Assembly', 'Security Council', 'UNFCCC COP', 'Economic and Social Council'],
          correctOption: 2,
        },
        {
          id: 'q3',
          text: 'Kenya\'s Vision 2030 emphasizes which environmental pillar?',
          options: ['Industrial growth', 'Green economy', 'Urban development', 'Agricultural expansion'],
          correctOption: 1,
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Peacebuilding & Conflict Resolution',
    description: 'Advanced diplomatic strategies for conflict prevention, mediation, and post-conflict reconstruction in regional and international contexts.',
    thumbnail: '/placeholder.svg',
    instructor: 'Ambassador Prof. James Macharia',
    duration: 240,
    level: 'advanced',
    lessons: [
      {
        id: '2-1',
        title: 'Foundations of Diplomatic Mediation',
        content: 'Core principles of conflict analysis and diplomatic intervention strategies.',
        duration: 35,
        order: 1,
      },
      {
        id: '2-2',
        title: 'Regional Peace Frameworks',
        content: 'Understanding IGAD, AU, and UN peacebuilding mechanisms and Kenya\'s leadership role.',
        duration: 40,
        order: 2,
      },
      {
        id: '2-3',
        title: 'Post-Conflict Reconstruction',
        content: 'Diplomatic strategies for sustainable peace and development in post-conflict societies.',
        duration: 45,
        order: 3,
      },
      {
        id: '2-4',
        title: 'Preventive Diplomacy Techniques',
        content: 'Early warning systems and diplomatic interventions to prevent conflicts before they escalate.',
        duration: 40,
        order: 4,
      },
      {
        id: '2-5',
        title: 'Women, Peace and Security',
        content: 'Implementing UNSCR 1325 and advancing women\'s participation in peace processes.',
        duration: 35,
        order: 5,
      },
      {
        id: '2-6',
        title: 'Truth and Reconciliation Mechanisms',
        content: 'Designing and implementing truth commissions and reconciliation processes.',
        duration: 45,
        order: 6,
      },
    ],
    quiz: {
      id: '2-quiz',
      title: 'Peacebuilding & Conflict Resolution Assessment',
      questions: [
        {
          id: 'q1',
          text: 'Which regional body does Kenya primarily work with for peace initiatives in East Africa?',
          options: ['ECOWAS', 'IGAD', 'SADC', 'EAC only'],
          correctOption: 1,
        },
        {
          id: 'q2',
          text: 'What is the primary goal of preventive diplomacy?',
          options: ['Economic development', 'Conflict prevention', 'Trade facilitation', 'Cultural exchange'],
          correctOption: 1,
        },
        {
          id: 'q3',
          text: 'UNSCR 1325 primarily addresses which aspect of peace processes?',
          options: ['Economic recovery', 'Women, peace and security', 'Military intervention', 'Infrastructure rebuilding'],
          correctOption: 1,
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Economic & Regional Integration Diplomacy',
    description: 'Master trade negotiations, economic partnerships, and regional cooperation frameworks for Kenya\'s economic diplomacy objectives.',
    thumbnail: '/placeholder.svg',
    instructor: 'Ambassador Dr. Grace Akumu',
    duration: 200,
    level: 'intermediate',
    lessons: [
      {
        id: '3-1',
        title: 'Fundamentals of Economic Diplomacy',
        content: 'Understanding the intersection of economics and diplomacy in Kenya\'s foreign policy.',
        duration: 30,
        order: 1,
      },
      {
        id: '3-2',
        title: 'Trade Negotiations & WTO Framework',
        content: 'Mastering multilateral and bilateral trade negotiations within global trade governance.',
        duration: 40,
        order: 2,
      },
      {
        id: '3-3',
        title: 'East African Community Integration',
        content: 'Advancing regional economic integration and Kenya\'s leadership in EAC development.',
        duration: 35,
        order: 3,
      },
      {
        id: '3-4',
        title: 'Investment Promotion & Diaspora Engagement',
        content: 'Leveraging diplomatic networks for foreign investment and diaspora economic contributions.',
        duration: 40,
        order: 4,
      },
      {
        id: '3-5',
        title: 'Continental Free Trade Area (AfCFTA)',
        content: 'Implementing and maximizing benefits from the African Continental Free Trade Area agreement.',
        duration: 35,
        order: 5,
      },
      {
        id: '3-6',
        title: 'China-Africa & South-South Cooperation',
        content: 'Navigating strategic partnerships with emerging economies and developing nations.',
        duration: 20,
        order: 6,
      },
    ],
    quiz: {
      id: '3-quiz',
      title: 'Economic & Regional Integration Assessment',
      questions: [
        {
          id: 'q1',
          text: 'The African Continental Free Trade Area (AfCFTA) aims to boost intra-African trade by what percentage?',
          options: ['25%', '50%', '75%', '52%'],
          correctOption: 3,
        },
        {
          id: 'q2',
          text: 'Kenya\'s Vision 2030 positions the country as which type of economy?',
          options: ['Agricultural', 'Middle-income industrialized', 'Service-based', 'Resource extraction'],
          correctOption: 1,
        },
        {
          id: 'q3',
          text: 'Which initiative represents Kenya\'s approach to South-South cooperation?',
          options: ['NATO partnership', 'BRICS application', 'Look East Policy', 'Marshall Plan'],
          correctOption: 2,
        },
      ],
    },
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
