
import React, { useMemo } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueChartProps {
  dateRange: '24h' | '7d' | '30d' | '90d';
}

const RevenueChart: React.FC<RevenueChartProps> = ({ dateRange }) => {
  const { theme } = useTheme();
  
  // Generate data based on the selected date range
  const data = useMemo(() => {
    const numberOfPoints = dateRange === '24h' ? 24 : 
                          dateRange === '7d' ? 7 : 
                          dateRange === '30d' ? 30 : 90;
    
    return Array.from({ length: numberOfPoints }).map((_, i) => {
      // Generate random but realistic-looking data
      const base = 1000 + Math.random() * 4000;
      const weekdayEffect = dateRange !== '24h' ? (i % 7 < 5 ? 1 : 0.7) : 1;
      const trendEffect = 1 + (i / numberOfPoints) * 0.3; // Increasing trend
      
      return {
        name: dateRange === '24h' ? `${i}h` : 
              dateRange === '7d' ? `Day ${i+1}` : 
              `Day ${i+1}`,
        value: Math.round(base * weekdayEffect * trendEffect),
      };
    });
  }, [dateRange]);

  // Determine colors based on theme
  const colors = {
    stroke: theme === 'dark' ? '#3b82f6' : '#2563eb',
    fill: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.1)',
    grid: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    text: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.3} />
            <stop offset="95%" stopColor={colors.stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
        <XAxis 
          dataKey="name" 
          tick={{ fill: colors.text, fontSize: 12 }}
          tickLine={{ stroke: colors.grid }}
          axisLine={{ stroke: colors.grid }}
        />
        <YAxis 
          tickFormatter={(value) => `$${value}`}
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
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke={colors.stroke} 
          strokeWidth={2}
          fill="url(#colorRevenue)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
