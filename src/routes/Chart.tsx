import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

import { fetchCoinHistory } from "../api";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartContext {
  coinId: string;
}

interface ICandle {
  x: number;
  y: number[];
}

function Chart() {
  const { coinId } = useOutletContext<ChartContext>();
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv"],
    queryFn: () => fetchCoinHistory(coinId),
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => ({
                x: price.time_close,
                y: [price.open, price.high, price.low, price.close],
              })) as ICandle[],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            theme: { mode: "dark" },
            grid: {
              show: false,
            },
            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            yaxis: {
              show: false,
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
