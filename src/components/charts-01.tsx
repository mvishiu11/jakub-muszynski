"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

export const description = "A collection of health charts with a dark purple theme."

export function Charts() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8 bg-gray-900 text-white">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card className="lg:max-w-md bg-gray-800 border-purple-700">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription className="text-gray-400">Today</CardDescription>
            <CardTitle className="text-4xl tabular-nums text-purple-300">
              12,584{" "}
              <span className="font-sans text-sm font-normal tracking-normal text-gray-400">
                steps
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(265, 89%, 78%)",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    steps: 2000,
                  },
                  {
                    date: "2024-01-02",
                    steps: 2100,
                  },
                  {
                    date: "2024-01-03",
                    steps: 2200,
                  },
                  {
                    date: "2024-01-04",
                    steps: 1300,
                  },
                  {
                    date: "2024-01-05",
                    steps: 1400,
                  },
                  {
                    date: "2024-01-06",
                    steps: 2500,
                  },
                  {
                    date: "2024-01-07",
                    steps: 1600,
                  },
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="hsl(265, 89%, 78%)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tick={{ fill: 'hsl(265, 89%, 78%)' }}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    })
                  }}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={1200}
                  stroke="hsl(265, 89%, 78%)"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Average Steps"
                    offset={10}
                    fill="hsl(265, 89%, 78%)"
                  />
                  <Label
                    position="insideTopLeft"
                    value="12,343"
                    className="text-lg"
                    fill="hsl(265, 89%, 78%)"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription className="text-gray-400">
              Over the past 7 days, you have walked{" "}
              <span className="font-medium text-purple-300">53,305</span> steps.
            </CardDescription>
            <CardDescription className="text-gray-400">
              You need{" "}
              <span className="font-medium text-purple-300">12,584</span> more
              steps to reach your goal.
            </CardDescription>
          </CardFooter>
        </Card>
        <Card className="flex flex-col lg:max-w-md bg-gray-800 border-purple-700">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
            <div>
              <CardDescription className="text-gray-400">Resting HR</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums text-purple-300">
                62
                <span className="text-sm font-normal tracking-normal text-gray-400">
                  bpm
                </span>
              </CardTitle>
            </div>
            <div>
              <CardDescription className="text-gray-400">Variability</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums text-purple-300">
                35
                <span className="text-sm font-normal tracking-normal text-gray-400">
                  ms
                </span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 items-center">
            <ChartContainer
              config={{
                resting: {
                  label: "Resting",
                  color: "hsl(265, 89%, 78%)",
                },
              }}
              className="w-full"
            >
              <LineChart
                accessibilityLayer
                margin={{
                  left: 14,
                  right: 14,
                  top: 10,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    resting: 62,
                  },
                  {
                    date: "2024-01-02",
                    resting: 72,
                  },
                  {
                    date: "2024-01-03",
                    resting: 35,
                  },
                  {
                    date: "2024-01-04",
                    resting: 62,
                  },
                  {
                    date: "2024-01-05",
                    resting: 52,
                  },
                  {
                    date: "2024-01-06",
                    resting: 62,
                  },
                  {
                    date: "2024-01-07",
                    resting: 70,
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="hsl(265, 89%, 78%)"
                  strokeOpacity={0.5}
                />
                <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: 'hsl(265, 89%, 78%)' }}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    })
                  }}
                />
                <Line
                  dataKey="resting"
                  type="natural"
                  fill="hsl(265, 89%, 78%)"
                  stroke="hsl(265, 89%, 78%)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    fill: "hsl(265, 89%, 78%)",
                    stroke: "hsl(265, 89%, 78%)",
                    r: 4,
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      }}
                    />
                  }
                  cursor={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <Card className="max-w-xs bg-gray-800 border-purple-700">
          <CardHeader>
            <CardTitle className="text-purple-300">Progress</CardTitle>
            <CardDescription className="text-gray-400">
              You're averaging more steps a day this year than last year.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none text-purple-300">
                12,453
                <span className="text-sm font-normal text-gray-400">
                  steps/day
                </span>
              </div>
              <ChartContainer
                config={{
                  steps: {
                    label: "Steps",
                    color: "hsl(265, 89%, 78%)",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2024",
                      steps: 12435,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="hsl(265, 89%, 78%)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="steps" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none text-purple-300">
                10,103
                <span className="text-sm font-normal text-gray-400">
                  steps/day
                </span>
              </div>
              <ChartContainer
                config={{
                  steps: {
                    label: "Steps",
                    color: "hsl(265, 89%, 78%)",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2023",
                      steps: 10103,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="hsl(265, 89%, 78%)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="hsl(265, 89%, 78%)"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="steps" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-xs bg-gray-800 border-purple-700">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-purple-300">Walking Distance</CardTitle>
            <CardDescription className="text-gray-400">
              Over the last 7 days, your distance walked and run was 12.5 miles
              per day.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
            <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none text-purple-300">
              12.5
              <span className="text-sm font-normal text-gray-400">
                miles/day
              </span>
            </div>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(265, 89%, 78%)",
                },
              }}
              className="ml-auto w-[72px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    steps: 2000,
                  },
                  {
                    date: "2024-01-02",
                    steps: 2100,
                  },
                  {
                    date: "2024-01-03",
                    steps: 2200,
                  },
                  {
                    date: "2024-01-04",
                    steps: 1300,
                  },
                  {
                    date: "2024-01-05",
                    steps: 1400,
                  },
                  {
                    date: "2024-01-06",
                    steps: 2500,
                  },
                  {
                    date: "2024-01-07",
                    steps: 1600,
                  },
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="hsl(265, 89%, 78%)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="max-w-xs bg-gray-800 border-purple-700">
          <CardContent className="flex gap-4 p-4 pb-2">
            <ChartContainer
              config={{
                move: {
                  label: "Move",
                  color: "hsl(265, 89%, 78%)",
                },
                stand: {
                  label: "Stand",
                  color: "hsl(200, 95%, 74%)",
                },
                exercise: {
                  label: "Exercise",
                  color: "hsl(150, 100%, 66%)",
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    activity: "stand",
                    value: (8 / 12) * 100,
                    label: "8/12 hr",
                    fill: "hsl(200, 95%, 74%)",
                  },
                  {
                    activity: "exercise",
                    value: (46 / 60) * 100,
                    label: "46/60 min",
                    fill: "hsl(150, 100%, 66%)",
                  },
                  {
                    activity: "move",
                    value: (245 / 360) * 100,
                    label: "245/360 kcal",
                    fill: "hsl(265, 89%, 78%)",
                  },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="activity"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  tick={{ fill: 'white' }}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t border-purple-700 p-4">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-gray-400">Move</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none text-purple-300">
                  562
                  <span className="text-sm font-normal text-gray-400">
                    kcal
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px bg-purple-700" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-gray-400">Exercise</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none text-purple-300">
                  73
                  <span className="text-sm font-normal text-gray-400">
                    min
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px bg-purple-700" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-gray-400">Stand</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none text-purple-300">
                  14
                  <span className="text-sm font-normal text-gray-400">
                    hr
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6">
        <Card className="max-w-xs bg-gray-800 border-purple-700">
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-gray-400">Move</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none text-purple-300">
                  562/600
                  <span className="text-sm font-normal text-gray-400">
                    kcal
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-gray-400">Exercise</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none text-purple-300">
                  73/120
                  <span className="text-sm font-normal text-gray-400">
                    min
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-gray-400">Stand</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none text-purple-300">
                  8/12
                  <span className="text-sm font-normal text-gray-400">
                    hr
                  </span>
                </div>
              </div>
            </div>
            <ChartContainer
              config={{
                move: {
                  label: "Move",
                  color: "hsl(265, 89%, 78%)",
                },
                exercise: {
                  label: "Exercise",
                  color: "hsl(150, 100%, 66%)",
                },
                stand: {
                  label: "Stand",
                  color: "hsl(200, 95%, 74%)",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[80%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    activity: "stand",
                    value: (8 / 12) * 100,
                    fill: "hsl(200, 95%, 74%)",
                  },
                  {
                    activity: "exercise",
                    value: (46 / 60) * 100,
                    fill: "hsl(150, 100%, 66%)",
                  },
                  {
                    activity: "move",
                    value: (245 / 360) * 100,
                    fill: "hsl(265, 89%, 78%)",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="max-w-xs bg-gray-800 border-purple-700">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-purple-300">Active Energy</CardTitle>
            <CardDescription className="text-gray-400">
              You're burning an average of 754 calories per day. Good job!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
            <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none text-purple-300">
              1,254
              <span className="text-sm font-normal text-gray-400">
                kcal/day
              </span>
            </div>
            <ChartContainer
              config={{
                calories: {
                  label: "Calories",
                  color: "hsl(265, 89%, 78%)",
                },
              }}
              className="ml-auto w-[64px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    calories: 354,
                  },
                  {
                    date: "2024-01-02",
                    calories: 514,
                  },
                  {
                    date: "2024-01-03",
                    calories: 345,
                  },
                  {
                    date: "2024-01-04",
                    calories: 734,
                  },
                  {
                    date: "2024-01-05",
                    calories: 645,
                  },
                  {
                    date: "2024-01-06",
                    calories: 456,
                  },
                  {
                    date: "2024-01-07",
                    calories: 345,
                  },
                ]}
              >
                <Bar
                  dataKey="calories"
                  fill="hsl(265, 89%, 78%)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="max-w-xs bg-gray-800 border-purple-700">
          <CardHeader className="space-y-0 pb-0">
            <CardDescription className="text-gray-400">Time in Bed</CardDescription>
            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums text-purple-300">
              8
              <span className="font-sans text-sm font-normal tracking-normal text-gray-400">
                hr
              </span>
              35
              <span className="font-sans text-sm font-normal tracking-normal text-gray-400">
                min
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={{
                time: {
                  label: "Time",
                  color: "hsl(265, 89%, 78%)",
                },
              }}
            >
              <AreaChart
                accessibilityLayer
                data={[
                  {
                    date: "2024-01-01",
                    time: 8.5,
                  },
                  {
                    date: "2024-01-02",
                    time: 7.2,
                  },
                  {
                    date: "2024-01-03",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-04",
                    time: 6.2,
                  },
                  {
                    date: "2024-01-05",
                    time: 5.2,
                  },
                  {
                    date: "2024-01-06",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-07",
                    time: 7.0,
                  },
                ]}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="date" hide />
                <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                <defs>
                  <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(265, 89%, 78%)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(265, 89%, 78%)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="time"
                  type="natural"
                  fill="url(#fillTime)"
                  fillOpacity={0.4}
                  stroke="hsl(265, 89%, 78%)"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => (
                    <div className="flex min-w-[120px] items-center text-xs text-gray-400">
                      Time in bed
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-purple-300">
                        {value}
                        <span className="font-normal text-gray-400">
                          hr
                        </span>
                      </div>
                    </div>
                  )}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}