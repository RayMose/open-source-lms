
import React, { useMemo } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UserGrowthChartProps {
  dateRange: '24h' | '7d' | '30d' | '90d';
}

const UserGrowthChart: React.FC<UserGrowthChartProps> = ({ dateRange }) => {
  const { theme } = useTheme();
  
  // Generate data based on the selected date range
  const data = useMemo(() => {
    let points: number;
    let labelFormat: (i: number) => string;
    
    switch(dateRange) {
      case '24h':
        points = 24;
        labelFormat = (i) => `${i}h`;
        break;
      case '7d':
        points = 7;
        labelFormat = (i) => `Day ${i+1}`;
        break;
      case '30d':
        points = 10; // Show every 3 days
        labelFormat = (i) => `Day ${i*3+1}`;
        break;
      case '90d':
        points = 12; // Show bi-weekly
        labelFormat = (i) => `Week ${Math.floor(i/2)+1}`;
        break;
      default:
        points = 7;
        labelFormat = (i) => `Day ${i+1}`;
    }
    
    return Array.from({ length: points }).map((_, i) => {
      // Random growth with some pattern
      const base = 10 + Math.random() * 30;
      const weekdayEffect = dateRange === '24h' ? (i > 8 && i < 20 ? 1.5 : 0.7) : 1;
      
      return {
        name: labelFormat(i),
        newUsers: Math.round(base * weekdayEffect),
      };
    });
  }, [dateRange]);

  // Colors based on theme
  const colors = {
    bar: theme === 'dark' ? '#8b5cf6' : '#7c3aed', // Purple
    grid: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    text: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
        <XAxis 
          dataKey="name" 
          tick={{ fill: colors.text, fontSize: 12 }}
          tickLine={{ stroke: colors.grid }}
          axisLine={{ stroke: colors.grid }}
        />
        <YAxis 
          tick={{ fill: colors.text, fontSize: 12 }}
          tickLine={{ stroke: colors.grid }}
          axisLine={{ stroke: colors.grid }}
        />
        <Tooltip
          contentStyle={{ 
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
            borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
            color: theme === 'dark' ? '#f3f4f6' : '#111827',
          }}
          formatter={(value: number) => [`${value} users`, 'New Users']}
        />
        <Bar 
          dataKey="newUsers" 
          fill={colors.bar} 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
