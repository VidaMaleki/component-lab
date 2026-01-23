type ChartDataPoint = {
  lineData: { name: string; users: number; revenue: number }[];
  barData: { name: string; sales: number }[];
  pieData: { name: string; value: number }[];
  areaData: { month: string; desktop: number; mobile: number }[];
};

export const chartData: ChartDataPoint = {
  lineData: [
    { name: "Jan", users: 400, revenue: 2400 },
    { name: "Feb", users: 300, revenue: 1398 },
    { name: "Mar", users: 600, revenue: 9800 },
    { name: "Apr", users: 800, revenue: 3908 },
    { name: "May", users: 900, revenue: 4800 },
    { name: "Jun", users: 1200, revenue: 3800 },
  ],
  barData: [
    { name: "Mon", sales: 120 },
    { name: "Tue", sales: 190 },
    { name: "Wed", sales: 300 },
    { name: "Thu", sales: 250 },
    { name: "Fri", sales: 420 },
    { name: "Sat", sales: 380 },
    { name: "Sun", sales: 290 },
  ],
  pieData: [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 200 },
    { name: "Product D", value: 100 },
  ],
  areaData: [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 273, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "Jun", desktop: 314, mobile: 240 },
  ],
};
