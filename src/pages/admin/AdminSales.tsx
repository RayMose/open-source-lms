
import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import DashboardHeader from '@/components/admin/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SalesTable from '@/components/admin/SalesTable';
import DateRangePicker from '@/components/admin/DateRangePicker';

const AdminSales = () => {
  const [dateRange, setDateRange] = useState<'24h' | '7d' | '30d' | '90d'>('30d');
  
  // Mock summary data
  const salesSummary = [
    {
      title: 'Total Revenue',
      value: '$42,890',
      change: '+12.5%',
      positive: true,
    },
    {
      title: 'Avg. Order Value',
      value: '$129',
      change: '+5.3%',
      positive: true,
    },
    {
      title: 'Conversion Rate',
      value: '4.2%',
      change: '+0.8%',
      positive: true,
    },
    {
      title: 'Refund Rate',
      value: '0.8%',
      change: '-0.2%',
      positive: true,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        
        <main className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h1 className="text-3xl font-bold">Sales & Revenue</h1>
            <div className="flex gap-2">
              <DateRangePicker value={dateRange} onChange={(value) => setDateRange(value as any)} />
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {salesSummary.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.positive ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
                    {stat.positive ? '↑' : '↓'} {stat.change} from previous period
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Transactions Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>Detailed view of course purchases</CardDescription>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search transactions..."
                      className="pl-8 w-full sm:w-[250px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
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

export default AdminSales;
