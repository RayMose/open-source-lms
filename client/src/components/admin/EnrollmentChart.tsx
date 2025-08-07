
import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const EnrollmentChart = () => {
  const { theme } = useTheme();
  
  const data = [
    { name: 'Web Development', value: 340, color: '#3b82f6' },
    { name: 'Data Science', value: 230, color: '#10b981' },
    { name: 'Design', value: 190, color: '#f59e0b' },
    { name: 'Marketing', value: 140, color: '#8b5cf6' },
    { name: 'Business', value: 120, color: '#ef4444' },
  ];

  // Adjust colors based on theme
  const getColor = (color: string) => {
    if (theme === 'dark') {
      // Brighten colors slightly for dark mode
      return color;
    }
    return color;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.color)} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ 
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
            borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
            color: theme === 'dark' ? '#f3f4f6' : '#111827',
          }}
          formatter={(value: number) => [`${value} enrollments`, 'Enrollment']}
        />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right"
          wrapperStyle={{
            paddingLeft: '10px',
            fontSize: '12px',
            color: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EnrollmentChart;
