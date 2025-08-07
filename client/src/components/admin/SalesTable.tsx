
import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Separator } from '@/components/ui/separator';

const SalesTable = () => {
  const { theme } = useTheme();
  
  const sales = [
    {
      id: '8382',
      course: 'Advanced Web Development Bootcamp',
      customer: 'Sophia Martinez',
      date: '2023-06-12',
      amount: 199.99,
      status: 'Completed',
    },
    {
      id: '8381',
      course: 'Data Science Fundamentals',
      customer: 'Michael Johnson',
      date: '2023-06-12',
      amount: 149.99,
      status: 'Completed',
    },
    {
      id: '8380',
      course: 'UX/UI Design Masterclass',
      customer: 'Emma Wilson',
      date: '2023-06-11',
      amount: 129.99,
      status: 'Completed',
    },
    {
      id: '8379',
      course: 'Full Stack JavaScript Course',
      customer: 'Daniel Brown',
      date: '2023-06-11',
      amount: 179.99,
      status: 'Refunded',
    },
    {
      id: '8378',
      course: 'Digital Marketing Essentials',
      customer: 'Olivia Davis',
      date: '2023-06-10',
      amount: 89.99,
      status: 'Completed',
    },
    {
      id: '8377',
      course: 'Python for Data Analysis',
      customer: 'William Taylor',
      date: '2023-06-10',
      amount: 119.99,
      status: 'Pending',
    },
  ];

  // Helper function for status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Refunded':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted/50">
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Course</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr 
              key={sale.id} 
              className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
            >
              <td className="py-3 px-4 text-sm">#{sale.id}</td>
              <td className="py-3 px-4 text-sm font-medium">{sale.course}</td>
              <td className="py-3 px-4 text-sm">{sale.customer}</td>
              <td className="py-3 px-4 text-sm">{new Date(sale.date).toLocaleDateString()}</td>
              <td className="py-3 px-4 text-sm">${sale.amount.toFixed(2)}</td>
              <td className="py-3 px-4 text-sm">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                  {sale.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
