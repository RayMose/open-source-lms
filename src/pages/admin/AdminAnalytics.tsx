
import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardHeader from '@/components/admin/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DateRangePicker from '@/components/admin/DateRangePicker';
import StatCards from '@/components/admin/StatCards';
import RevenueChart from '@/components/admin/RevenueChart';
import EnrollmentChart from '@/components/admin/EnrollmentChart';
import UserGrowthChart from '@/components/admin/UserGrowthChart';
import PopularCoursesTable from '@/components/admin/PopularCoursesTable';

const AdminAnalytics = () => {
  const [dateRange, setDateRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d');

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <DateRangePicker value={dateRange} onChange={(value) => setDateRange(value as any)} />
          </div>

          <StatCards />

          {/* Charts section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Total revenue over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <RevenueChart dateRange={dateRange} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Enrollments</CardTitle>
                <CardDescription>Enrollments by course category</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <EnrollmentChart />
              </CardContent>
            </Card>
          </div>

          {/* Additional charts row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New users over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <UserGrowthChart dateRange={dateRange} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Courses</CardTitle>
                <CardDescription>Most enrolled courses</CardDescription>
              </CardHeader>
              <CardContent className="h-80 overflow-auto">
                <PopularCoursesTable />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminAnalytics;
