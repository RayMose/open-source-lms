
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardHeader from '@/components/admin/DashboardHeader';
import StatCards from '@/components/admin/StatCards';
import RevenueChart from '@/components/admin/RevenueChart';
import SalesTable from '@/components/admin/SalesTable';
import EnrollmentChart from '@/components/admin/EnrollmentChart';
import AdminSidebar from '@/components/admin/AdminSidebar';
import UserGrowthChart from '@/components/admin/UserGrowthChart';
import PopularCoursesTable from '@/components/admin/PopularCoursesTable';
import DateRangePicker from '@/components/admin/DateRangePicker';

const AdminDashboard = () => {
  const { theme } = useTheme();
  const [dateRange, setDateRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d');

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        
        {/* Dashboard content */}
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

          {/* Sales table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest course purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <SalesTable />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
