
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, DollarSign, Layers } from 'lucide-react';

const StatCards = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$42,890',
      change: '+12.5%',
      icon: DollarSign,
      positive: true,
    },
    {
      title: 'Active Students',
      value: '2,845',
      change: '+8.2%',
      icon: Users,
      positive: true,
    },
    {
      title: 'Course Enrollments',
      value: '4,721',
      change: '+15.3%',
      icon: BookOpen,
      positive: true,
    },
    {
      title: 'Completion Rate',
      value: '68%',
      change: '-2.4%',
      icon: Layers,
      positive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.positive ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
              {stat.positive ? '↑' : '↓'} {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;
