import {
  Area,
  AreaChart,
  CartesianGrid,
  createHorizontalChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


interface MainChartType{
  data: any[];
  isAnimationActive?: boolean;
}

const Typed = createHorizontalChart()({
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
});
// #endregion
const MainChart = ({ data, isAnimationActive = true }: MainChartType) => (
  <Typed.AreaChart
    style={{
      width: "100%",
      maxWidth: "100%",
      maxHeight: "70vh",
      aspectRatio: 1.618,
    }}
    responsive
    data={data}
    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#E2A33B" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#E2A33B" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#10182B" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#10182B" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid />
    <Typed.XAxis dataKey="title" />
    <Typed.YAxis width="auto" />
    <Tooltip />
    <Typed.Area
      type="monotone"
      dataKey="price"
      stroke="#E2A33B"
      activeDot={{ stroke: "#E2A33B" }}
      fillOpacity={1}
      fill="url(#colorUv)"
      isAnimationActive={isAnimationActive}
      animationBegin={200}
      animationDuration={1300}
    />
    <Typed.Area
      type="monotone"
      dataKey="total"
      stroke="#10182B"
      activeDot={{ stroke: "#10182B" }}
      fillOpacity={1}
      fill="url(#colorPv)"
      isAnimationActive={isAnimationActive}
    />
  </Typed.AreaChart>
);
export default MainChart;