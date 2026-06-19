import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const timeData = [
  { name: "Our Team", value: "80x" },
  { name: "No Code Agency", value: "130x" },
  { name: "Traditional Agency", value: "100x" },
  { name: "In-House Team", value: "200x" },
];

const scalabilityData = [
  { name: "Our Team", value: "210,000 Users" },
  { name: "No Code Agency", value: "50,000 Users" },
  { name: "Traditional Agency", value: "100,000 Users" },
  { name: "In-House Team", value: "150,000 Users" },
];

const pricingData = [
  { name: "Our Team", value: "$50k" },
  { name: "No Code Agency", value: "$30k" },
  { name: "Traditional Agency", value: "$80k" },
  { name: "In-House Team", value: "$120k" },
];

export function BarChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timeValues = timeData.map((d) => Number(d.value.replace("x", "")));

  const pricingValues = pricingData.map((d) =>
    Number(d.value.replace("$", "").replace("k", ""))
  );

  const scalabilityValues = scalabilityData.map(
    (d) => Number(d.value.replace(/,/g, "").replace(" Users", "")) / 1000
  );

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      backgroundColor: "#ffffff",
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    title: {
      text: "Who is the right technology partner for you?",
      style: {
        color: "#3d3d3d",
        fontWeight: "normal",
      },
    },
    subtitle: {
      text: "Comparison of Time, Pricing, and Scalability",
      style: {
        color: "#5a5a5a",
        fontWeight: "normal",
      },
    },
    xAxis: {
      categories: [
        "Our Team",
        "No Code Agency",
        "Traditional Agency",
        "In-House Team",
      ],
      title: {
        text: undefined,
      },
      labels: {
        style: {
          color: "#4a4a4a",
          fontWeight: "normal",
        },
      },
      gridLineWidth: 0,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Relative Comparison",
        align: "high",
        style: {
          color: "#5a5a5a",
          fontWeight: "normal",
        },
      },
      labels: {
        overflow: "justify",
        style: {
          color: "#4a4a4a",
          fontWeight: "normal",
        },
      },
      gridLineWidth: 0,
    },
    tooltip: {
      formatter: function (this: Highcharts.Point) {
        const index = this.index;

        if (this.series.name === "Time") {
          return `<b>${this.x}</b>: ${timeData[index].value}`;
        }

        if (this.series.name === "Pricing") {
          return `<b>${this.x}</b>: ${pricingData[index].value}`;
        }

        if (this.series.name === "Scalability") {
          return `<b>${this.x}</b>: ${scalabilityData[index].value}`;
        }

        return "";
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        dataLabels: {
          enabled: true,
          formatter: function (this: Highcharts.Point) {
            const index = this.index;

            if (this.series.name === "Time") {
              return timeData[index].value;
            }

            if (this.series.name === "Pricing") {
              return pricingData[index].value;
            }

            if (this.series.name === "Scalability") {
              return scalabilityData[index].value;
            }

            return "";
          },
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      floating: false,
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      borderWidth: 1,
      shadow: true,
      itemStyle: {
        color: "#4a4a4a",
        fontWeight: "normal",
        fontSize: "14px",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "bar",
        name: "Time",
        data: timeValues,
        color: "#418ED6",
      },
      {
        type: "bar",
        name: "Pricing",
        data: pricingValues,
        color: "#333333",
      },
      {
        type: "bar",
        name: "Scalability",
        data: scalabilityValues,
        color: "#e42a2a",
      },
    ],
  };

  return (
    <section className=" py-10 md:py-10">
      <div className="container-page mx-auto rounded-[20px] px-4 pb-6 pt-12 md:px-8">
        <div className="mb-8 text-center">
          <p className="mb-1 text-sm uppercase tracking-[0.05em] text-ink-soft">
            COMPARISON
          </p>

          <h2 className="mb-3 text-3xl font-bold text-ink md:text-4xl">
            Who is the right technology partner
            <br />
            for you?
          </h2>

          <p className="mx-auto max-w-[800px] text-base leading-relaxed text-ink-soft">
            Choosing the right technology partner doesn't only influence your
            SaaS product - it shapes your entire business. We're here to help
            you make the right choice.
          </p>
        </div>

        <div className="mx-auto max-w-[1000px] border border-[#827d7d] bg-white pb-5">
          {mounted ? <HighchartsReact highcharts={Highcharts} options={options} /> : null}
        </div>
      </div>
    </section>
  );
}