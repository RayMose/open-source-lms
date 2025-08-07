
import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardHeader from '@/components/admin/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const courseData = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Sarah Johnson',
    students: 1243,
    rating: 4.8,
    status: 'Published',
    lastUpdated: '2023-05-15',
  },
  {
    id: 2,
    title: 'Data Science and Machine Learning',
    instructor: 'Prof. Michael Chen',
    students: 956,
    rating: 4.7,
    status: 'Published',
    lastUpdated: '2023-06-22',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Emily Rodriguez',
    students: 782,
    rating: 4.9,
    status: 'Published',
    lastUpdated: '2023-04-10',
  },
  {
    id: 4,
    title: 'JavaScript: The Advanced Concepts',
    instructor: 'David Wilson',
    students: 645,
    rating: 4.6,
    status: 'Draft',
    lastUpdated: '2023-07-05',
  },
  {
    id: 5,
    title: 'Digital Marketing Strategy',
    instructor: 'Jennifer Lopez',
    students: 534,
    rating: 4.5,
    status: 'Published',
    lastUpdated: '2023-03-30',
  },
];

const AdminCourses = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Courses Management</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>All Courses</CardTitle>
                  <CardDescription>Manage your course catalog</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search courses..."
                      className="pl-8 w-[250px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Instructor</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Students</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Rating</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Updated</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseData.map((course) => (
                      <tr key={course.id} className="border-b hover:bg-muted/50">
                        <td className="p-4 align-middle font-medium">{course.title}</td>
                        <td className="p-4 align-middle">{course.instructor}</td>
                        <td className="p-4 align-middle text-right">{course.students}</td>
                        <td className="p-4 align-middle text-right">
                          <div className="flex items-center justify-end">
                            <span className="mr-1">{course.rating}</span>
                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            course.status === 'Published' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>
                            {course.status}
                          </span>
                        </td>
                        <td className="p-4 align-middle">{new Date(course.lastUpdated).toLocaleDateString()}</td>
                        <td className="p-4 align-middle text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminCourses;
