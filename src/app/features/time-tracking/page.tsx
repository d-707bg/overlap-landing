"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line } from "@/components/charts/line/line-chart";
import { Grid } from "@/components/charts/shared/grid";
import { ChartTooltip } from "@/components/charts/tooltip/chart-tooltip";
import { XAxis as ChartXAxis } from "@/components/charts/shared/x-axis";

const TimeTrackingPage = () => {
  // Sample data for charts
  const sessionData = [
    { date: new Date("2024-03-01"), lap: 1, time: 78.5, sector1: 28.2, sector2: 32.1, sector3: 18.2 },
    { date: new Date("2024-03-02"), lap: 2, time: 77.8, sector1: 27.9, sector2: 31.8, sector3: 18.1 },
    { date: new Date("2024-03-03"), lap: 3, time: 76.9, sector1: 27.5, sector2: 31.2, sector3: 18.2 },
    { date: new Date("2024-03-04"), lap: 4, time: 77.2, sector1: 27.8, sector2: 31.5, sector3: 17.9 },
    { date: new Date("2024-03-05"), lap: 5, time: 76.5, sector1: 27.6, sector2: 31.0, sector3: 17.9 },
  ];

  const consistencyData = [
    { metric: "Lap Time", value: 94, target: 90 },
    { metric: "Sector 1", value: 88, target: 85 },
    { metric: "Sector 2", value: 92, target: 90 },
    { metric: "Sector 3", value: 96, target: 95 },
  ];

  const recentSessions = [
    { date: "2024-03-05", laps: 12, bestLap: 76.542, avgLap: 77.231 },
    { date: "2024-03-04", laps: 8, bestLap: 77.123, avgLap: 78.456 },
    { date: "2024-03-03", laps: 15, bestLap: 75.987, avgLap: 76.892 },
    { date: "2024-03-02", laps: 10, bestLap: 78.234, avgLap: 79.123 },
  ];

  return (
    <div className="min-h-screen bg-background p-6 py-32">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Precision Time Tracking</h1>
          <p className="text-muted-foreground text-lg">
            Millisecond-accurate lap timing and performance analysis
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Lap Time</CardTitle>
              <Badge variant="secondary">Personal Best</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-mono">75.987s</div>
              <p className="text-xs text-muted-foreground">
                March 3, 2024
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
                Last 5 sessions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Badge variant="outline">This Month</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                286 laps total
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Improvement</CardTitle>
              <Badge className="bg-green-500">+2.3s</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-3.1%</div>
              <p className="text-xs text-muted-foreground">
                vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timing Points & Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Virtual Start/Finish
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Set up unlimited timing points anywhere on track
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Start Line</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sector 1 Split</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sector 2 Split</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Finish Line</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Real-Time Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">0.001s</div>
                  <p className="text-xs text-muted-foreground">Timing Resolution</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10Hz</div>
                  <p className="text-xs text-muted-foreground">Update Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">±2cm</div>
                  <p className="text-xs text-muted-foreground">GPS Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 Current Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Best Lap</span>
                  <span className="font-mono text-sm">76.542s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Lap</span>
                  <span className="font-mono text-sm">77.231s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Consistency</span>
                  <span className="font-mono text-sm">94.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Laps</span>
                  <span className="font-mono text-sm">12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Lap Time Analysis</CardTitle>
              <CardDescription>Track your performance across multiple laps</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart data={sessionData} className="[--chart-line-primary:#3b82f6]">
                <Grid horizontal strokeDasharray="4,4" />
                <Line dataKey="time" stroke="#3b82f6" strokeWidth={2.5} />
                <Line dataKey="sector1" stroke="#10b981" strokeWidth={2} />
                <Line dataKey="sector2" stroke="#f59e0b" strokeWidth={2} />
                <Line dataKey="sector3" stroke="#ef4444" strokeWidth={2} />
                <ChartXAxis numTicks={5} />
                <ChartTooltip
                  rows={(point) => [
                    { color: "#3b82f6", label: "Lap Time", value: typeof point.time === "number" ? `${point.time}s` : "" },
                    { color: "#10b981", label: "Sector 1", value: typeof point.sector1 === "number" ? `${point.sector1}s` : "" },
                    { color: "#f59e0b", label: "Sector 2", value: typeof point.sector2 === "number" ? `${point.sector2}s` : "" },
                    { color: "#ef4444", label: "Sector 3", value: typeof point.sector3 === "number" ? `${point.sector3}s` : "" },
                  ]}
                />
              </LineChart>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consistency Metrics</CardTitle>
              <CardDescription>How consistent you are in each sector</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={consistencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#10b981" name="Current %" />
                  <Bar dataKey="target" fill="#f59e0b" name="Target %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Your latest time tracking sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="font-semibold">{session.date}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Laps</div>
                      <div className="font-semibold">{session.laps}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Best Lap</div>
                      <div className="font-mono font-semibold">{session.bestLap}s</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Average</div>
                      <div className="font-mono font-semibold">{session.avgLap}s</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Features</CardTitle>
            <CardDescription>Professional-grade timing capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">🏁</div>
                <h4 className="font-semibold mb-1">Auto Detection</h4>
                <p className="text-xs text-muted-foreground">
                  Automatic start/finish line detection
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-semibold mb-1">Multi Device</h4>
                <p className="text-xs text-muted-foreground">
                  Sync across phone, tablet, and desktop
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <h4 className="font-semibold mb-1">Cloud Backup</h4>
                <p className="text-xs text-muted-foreground">
                  Automatic cloud storage of all sessions
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">📤</div>
                <h4 className="font-semibold mb-1">Export Data</h4>
                <p className="text-xs text-muted-foreground">
                  Export to CSV, JSON, or analyze in app
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimeTrackingPage;
