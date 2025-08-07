
import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardHeader from '@/components/admin/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const studentsData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    enrollmentDate: '2023-03-15',
    coursesEnrolled: 4,
    completionRate: 75,
    lastActive: '2023-06-28',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    enrollmentDate: '2023-02-10',
    coursesEnrolled: 3,
    completionRate: 92,
    lastActive: '2023-06-30',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    enrollmentDate: '2023-04-05',
    coursesEnrolled: 2,
    completionRate: 50,
    lastActive: '2023-06-15',
  },
  {
    id: 4,
    name: 'Emily Williams',
    email: 'emily.williams@example.com',
    enrollmentDate: '2023-01-20',
    coursesEnrolled: 5,
    completionRate: 88,
    lastActive: '2023-06-29',
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    enrollmentDate: '2023-05-12',
    coursesEnrolled: 1,
    completionRate: 30,
    lastActive: '2023-06-10',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    enrollmentDate: '2023-03-28',
    coursesEnrolled: 3,
    completionRate: 65,
    lastActive: '2023-06-25',
  },
];

const AdminStudents = () => {
  // Helper function for progress bar color
  const getCompletionColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Students Management</h1>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>All Students</CardTitle>
                  <CardDescription>View and manage student accounts</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search students..."
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
                      <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Enrollment Date</th>
                      <th className="h-12 px-4 text-center align-middle font-medium">Courses</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Completion</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Active</th>
                      <th className="h-12 px-4 text-right align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsData.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-muted/50">
                        <td className="p-4 align-middle font-medium">{student.name}</td>
                        <td className="p-4 align-middle">{student.email}</td>
                        <td className="p-4 align-middle">{new Date(student.enrollmentDate).toLocaleDateString()}</td>
                        <td className="p-4 align-middle text-center">{student.coursesEnrolled}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center">
                            <div className="w-full bg-muted rounded-full h-2 mr-2">
                              <div 
                                className={`h-2 rounded-full ${getCompletionColor(student.completionRate)}`} 
                                style={{ width: `${student.completionRate}%` }}
                              ></div>
                            </div>
                            <span className="text-xs">{student.completionRate}%</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{new Date(student.lastActive).toLocaleDateString()}</td>
                        <td className="p-4 align-middle text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">View</Button>
                            <Button variant="ghost" size="sm">Message</Button>
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

export default AdminStudents;
