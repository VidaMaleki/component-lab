import { ComponentShowcase } from '../ComponentShowcase';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartsSection() {
    const lineData = [
        { name: 'Jan', users: 400, revenue: 2400 },
        { name: 'Feb', users: 300, revenue: 1398 },
        { name: 'Mar', users: 600, revenue: 9800 },
        { name: 'Apr', users: 800, revenue: 3908 },
        { name: 'May', users: 900, revenue: 4800 },
        { name: 'Jun', users: 1200, revenue: 3800 },
    ];

    const barData = [
        { name: 'Mon', sales: 120 },
        { name: 'Tue', sales: 190 },
        { name: 'Wed', sales: 300 },
        { name: 'Thu', sales: 250 },
        { name: 'Fri', sales: 420 },
        { name: 'Sat', sales: 380 },
        { name: 'Sun', sales: 290 },
    ];

    const pieData = [
        { name: 'Product A', value: 400 },
        { name: 'Product B', value: 300 },
        { name: 'Product C', value: 200 },
        { name: 'Product D', value: 100 },
    ];

    const areaData = [
        { month: 'Jan', desktop: 186, mobile: 80 },
        { month: 'Feb', desktop: 305, mobile: 200 },
        { month: 'Mar', desktop: 237, mobile: 120 },
        { month: 'Apr', desktop: 273, mobile: 190 },
        { month: 'May', desktop: 209, mobile: 130 },
        { month: 'Jun', desktop: 314, mobile: 240 },
    ];

    const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Interactive Charts & Graphs</h1>
                <p className="text-slate-600">
                    Data visualization components with hover effects, tooltips, and real-time updates using Recharts.
                </p>
            </div>

            {/* Line Chart */}
            <ComponentShowcase
                title="Line Chart"
                description="Multi-line chart with hover tooltips"
                preview={
                    <div className="w-full bg-white border border-slate-200 rounded-xl p-6">
                        <h3 className="text-slate-900 mb-4">User Growth & Revenue</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="name" stroke="#64748b" />
                                <YAxis stroke="#64748b" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="users"
                                    stroke="#6366f1"
                                    strokeWidth={2}
                                    dot={{ fill: '#6366f1', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#10b981"
                                    strokeWidth={2}
                                    dot={{ fill: '#10b981', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                }
                code={`import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LineChartComponent() {
  const data = [
    { name: 'Jan', users: 400, revenue: 2400 },
    { name: 'Feb', users: 300, revenue: 1398 },
    { name: 'Mar', users: 600, revenue: 9800 },
    { name: 'Apr', users: 800, revenue: 3908 },
    { name: 'May', users: 900, revenue: 4800 },
    { name: 'Jun', users: 1200, revenue: 3800 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#6366f1" />
        <Line type="monotone" dataKey="revenue" stroke="#10b981" />
      </LineChart>
    </ResponsiveContainer>
  );
}`}
            />

            {/* Bar Chart */}
            <ComponentShowcase
                title="Bar Chart"
                description="Interactive bar chart with hover effects"
                preview={
                    <div className="w-full bg-white border border-slate-200 rounded-xl p-6">
                        <h3 className="text-slate-900 mb-4">Weekly Sales</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="name" stroke="#64748b" />
                                <YAxis stroke="#64748b" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                    }}
                                    cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                                />
                                <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                }
                code={`import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function BarChartComponent() {
  const data = [
    { name: 'Mon', sales: 120 },
    { name: 'Tue', sales: 190 },
    { name: 'Wed', sales: 300 },
    { name: 'Thu', sales: 250 },
    { name: 'Fri', sales: 420 },
    { name: 'Sat', sales: 380 },
    { name: 'Sun', sales: 290 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}`}
            />

            {/* Area Chart */}
            <ComponentShowcase
                title="Area Chart"
                description="Stacked area chart for comparing data"
                preview={
                    <div className="w-full bg-white border border-slate-200 rounded-xl p-6">
                        <h3 className="text-slate-900 mb-4">Desktop vs Mobile Traffic</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={areaData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="month" stroke="#64748b" />
                                <YAxis stroke="#64748b" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                    }}
                                />
                                <Legend />
                                <Area
                                    type="monotone"
                                    dataKey="desktop"
                                    stackId="1"
                                    stroke="#6366f1"
                                    fill="#6366f1"
                                    fillOpacity={0.6}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="mobile"
                                    stackId="1"
                                    stroke="#8b5cf6"
                                    fill="#8b5cf6"
                                    fillOpacity={0.6}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                }
                code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AreaChartComponent() {
  const data = [
    { month: 'Jan', desktop: 186, mobile: 80 },
    { month: 'Feb', desktop: 305, mobile: 200 },
    { month: 'Mar', desktop: 237, mobile: 120 },
    { month: 'Apr', desktop: 273, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'Jun', desktop: 314, mobile: 240 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="desktop" stackId="1" stroke="#6366f1" fill="#6366f1" />
        <Area type="monotone" dataKey="mobile" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
      </AreaChart>
    </ResponsiveContainer>
  );
}`}
            />

            {/* Pie Chart */}
            <ComponentShowcase
                title="Pie Chart"
                description="Interactive pie chart with segments"
                preview={
                    <div className="w-full bg-white border border-slate-200 rounded-xl p-6">
                        <h3 className="text-slate-900 mb-4">Product Distribution</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent= 0  }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                }
                code={`import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function PieChartComponent() {
  const data = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 200 },
    { name: 'Product D', value: 100 },
  ];

  const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}`}
            />

            {/* Mini Dashboard */}
            <ComponentShowcase
                title="Mini Dashboard"
                description="Combined charts in a dashboard layout"
                preview={
                    <div className="w-full space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white border border-slate-200 rounded-xl p-6">
                                <div className="text-sm text-slate-600 mb-1">Total Revenue</div>
                                <div className="text-3xl text-slate-900 mb-2">$45,231</div>
                                <div className="text-sm text-green-600">+20.1% from last month</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6">
                                <div className="text-sm text-slate-600 mb-1">Active Users</div>
                                <div className="text-3xl text-slate-900 mb-2">2,350</div>
                                <div className="text-sm text-green-600">+15.3% from last month</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6">
                                <div className="text-sm text-slate-600 mb-1">Conversion Rate</div>
                                <div className="text-3xl text-slate-900 mb-2">3.24%</div>
                                <div className="text-sm text-red-600">-2.4% from last month</div>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            <ResponsiveContainer width="100%" height={250}>
                                <AreaChart data={lineData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis dataKey="name" stroke="#64748b" />
                                    <YAxis stroke="#64748b" />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#6366f1"
                                        fillOpacity={1}
                                        fill="url(#colorRevenue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                }
                code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const data = [/* chart data */];

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white border rounded-xl p-6">
          <div className="text-sm text-slate-600">Total Revenue</div>
          <div className="text-3xl">$45,231</div>
          <div className="text-sm text-green-600">+20.1%</div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="#6366f1" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}`}
            />
        </div>
    );
}
