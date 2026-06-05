"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart as RechartsLineChart, Line as RechartsLine } from "recharts";
import { LineChart, Line } from "@/components/charts/line/line-chart";
import { Grid } from "@/components/charts/shared/grid";
import { ChartTooltip } from "@/components/charts/tooltip/chart-tooltip";
import { XAxis as ChartXAxis } from "@/components/charts/shared/x-axis";

const AnalyticsPage = () => {
  // Sample data for charts
  const lapTimeData = [
    { date: new Date("2024-03-01"), lap: 1, time: 78.5, optimal: 76.2 },
    { date: new Date("2024-03-02"), lap: 2, time: 77.8, optimal: 76.2 },
    { date: new Date("2024-03-03"), lap: 3, time: 76.9, optimal: 76.2 },
    { date: new Date("2024-03-04"), lap: 4, time: 77.2, optimal: 76.2 },
    { date: new Date("2024-03-05"), lap: 5, time: 76.5, optimal: 76.2 },
    { date: new Date("2024-03-06"), lap: 6, time: 76.3, optimal: 76.2 },
    { date: new Date("2024-03-07"), lap: 7, time: 76.8, optimal: 76.2 },
    { date: new Date("2024-03-08"), lap: 8, time: 76.1, optimal: 76.2 },
  ];

  const sectorPerformance = [
    { sector: "Sector 1", current: 28.5, best: 27.8, improvement: 2.5 },
    { sector: "Sector 2", current: 32.1, best: 31.2, improvement: 2.9 },
    { sector: "Sector 3", current: 15.5, best: 17.2, improvement: -9.9 },
  ];

  const performanceDistribution = [
    { name: "Excellent", value: 35, color: "#10b981" },
    { name: "Good", value: 40, color: "#3b82f6" },
    { name: "Average", value: 20, color: "#f59e0b" },
    { name: "Poor", value: 5, color: "#ef4444" },
  ];

  const speedTraceData = [
    { distance: 0, speed: 0, throttle: 0, brake: 100 },
    { distance: 100, speed: 45, throttle: 80, brake: 0 },
    { distance: 200, speed: 85, throttle: 100, brake: 0 },
    { distance: 300, speed: 95, throttle: 100, brake: 0 },
    { distance: 400, speed: 88, throttle: 60, brake: 0 },
    { distance: 500, speed: 65, throttle: 0, brake: 80 },
    { distance: 600, speed: 35, throttle: 0, brake: 100 },
    { distance: 700, speed: 55, throttle: 70, brake: 0 },
    { distance: 800, speed: 92, throttle: 100, brake: 0 },
    { distance: 900, speed: 78, throttle: 40, brake: 20 },
    { distance: 1000, speed: 0, throttle: 0, brake: 100 },
  ];

  return (
    <div className="min-h-screen bg-background p-6 py-32">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track your performance and improve your driving</p>
          </div>
        </div>

        {/* Explanation Section */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">📊 How Your Real Analytics Would Look</CardTitle>
            <CardDescription className="text-blue-700">
              This is a preview of the powerful analytics you&apos;ll get in the Overlap app
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-blue-800">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">🏁 Real-Time Telemetry</h4>
                <p className="text-sm">
                  Connect your GPS device or smartphone to capture live lap data, including speed, 
                  acceleration, braking points, and racing line precision.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 AI-Powered Insights</h4>
                <p className="text-sm">
                  Our machine learning algorithms analyze your driving patterns to identify 
                  improvement opportunities and predict optimal lap times.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 Performance Trends</h4>
                <p className="text-sm">
                  Track your progress over time with detailed statistics, consistency metrics, 
                  and sector-by-sector breakdowns of your performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🏆 Competitive Analysis</h4>
                <p className="text-sm">
                  Compare your times with other drivers, share sessions with friends, 
                  and see how you stack up on leaderboards.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-blue-200">
              <p className="text-sm font-medium">
                💡 <strong>Pro Tip:</strong> The charts above show sample data. In the real app, 
                you&apos;ll see your actual driving data updated in real-time as you record sessions!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Lap Time</CardTitle>
              <Badge variant="secondary">Personal Best</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76.1s</div>
              <p className="text-xs text-muted-foreground">
                -0.8s from previous session
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consistency</CardTitle>
              <Badge className="bg-green-500">Excellent</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% improvement
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Speed</CardTitle>
              <Badge variant="outline">Speed Trap</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156 km/h</div>
              <p className="text-xs text-muted-foreground">
                End of main straight
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessions</CardTitle>
              <Badge variant="secondary">This Month</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                48 laps total
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Lap Time Analysis</CardTitle>
              <CardDescription>Comparison with optimal lap time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={lapTimeData} className="[--chart-line-primary:#3b82f6]">
                <Grid horizontal strokeDasharray="4,4" />
                <Line dataKey="time" stroke="#3b82f6" strokeWidth={2.5} />
                <Line dataKey="optimal" stroke="#10b981" strokeWidth={2} animate={false} showHighlight={false} />
                <ChartXAxis numTicks={8} />
                <ChartTooltip
                  rows={(point) => [
                    { color: "#3b82f6", label: "Lap Time", value: typeof point.time === "number" ? `${point.time}s` : "" },
                    { color: "#10b981", label: "Optimal", value: typeof point.optimal === "number" ? `${point.optimal}s` : "" },
                  ]}
                />
              </LineChart>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sector Performance</CardTitle>
              <CardDescription>Time analysis by track sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sectorPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sector" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" fill="#3b82f6" name="Current" />
                  <Bar dataKey="best" fill="#10b981" name="Best" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Distribution</CardTitle>
              <CardDescription>Quality of laps across sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={performanceDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {performanceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Speed & Control Analysis</CardTitle>
              <CardDescription>Speed trace with throttle and brake inputs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsLineChart data={speedTraceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="distance" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <RechartsLine type="monotone" dataKey="speed" stroke="#3b82f6" name="Speed (km/h)" strokeWidth={2} />
                  <RechartsLine type="monotone" dataKey="throttle" stroke="#10b981" name="Throttle (%)" strokeDasharray="5 5" />
                  <RechartsLine type="monotone" dataKey="brake" stroke="#ef4444" name="Brake (%)" strokeDasharray="3 3" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle>AI Performance Insights</CardTitle>
            <CardDescription>Machine learning recommendations for improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">🎯</span>
                  </div>
                  <h4 className="font-semibold">Corner Entry</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Brake 15m earlier in Turn 3 for better exit speed. Potential gain: +0.3s
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">📈</span>
                  </div>
                  <h4 className="font-semibold">Racing Line</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Wider entry in Sector 2 shows 8% improvement in lap times.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-sm font-bold">⚡</span>
                  </div>
                  <h4 className="font-semibold">Throttle Control</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Smoother throttle application could reduce tire wear by 12%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
