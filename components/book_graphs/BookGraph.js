import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryLabel, VictoryTooltip } from "victory";

function BookGraph({ percentages, order }) {
  let { percentData, percent } = getGraphData(percentages, order);
  return (
    <div>
      <svg
        viewBox="0 0 400 400"
        width="40vh"
        height="40vh"
        style={{ overflow: "visible" }}
      >
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={percentData}
          innerRadius={120}
          labels={() => null}
          labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = "#926aa6";
                return datum.x === order ? color : "lightgray";
              },
              stroke: "white",
            },
          }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => ({ style: { fill: "#b55a30" } }),
                    },
                    {
                      target: "labels",
                      mutation: () => ({ active: true }),
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {},
                    },
                    {
                      target: "labels",
                      mutation: () => ({ active: false }),
                    },
                  ];
                },
              },
            },
          ]}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={200}
          text={`${Math.round(percent)}%`}
          style={{ fontSize: 45 }}
        />
      </svg>
    </div>
  );
}

function getGraphData(percentages, order) {
  return {
    percentData: percentages.map((percent) => ({
      x: percent.order,
      y: percent.percent,
      label: percent.count.toLocaleString("en-US"),
    })),
    percent: percentages.find((percentObject) => percentObject.order === order)
      .percent,
  };
}

export default BookGraph;
