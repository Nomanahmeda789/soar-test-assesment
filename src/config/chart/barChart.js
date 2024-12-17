export const barChartData = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Deposit",
      data: [450, 350, 320, 450, 130, 380, 400],
      backgroundColor: "#232323",
      borderRadius: 20,
      borderSkipped: false,
      barThickness: "flex",
      categoryPercentage: 0.5,
      barPercentage: 0.5,
    },
    {
      label: "Withdraw",
      data: [230, 130, 275, 385, 220, 220, 330],
      backgroundColor: "#396AFF",
      borderRadius: 20,
      borderSkipped: false,
      barThickness: "flex",
      categoryPercentage: 0.5,
      barPercentage: 0.5,
    },
  ],
};

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
        marginBottom: "20",
        boxWidth: 12,
        padding: 20,
        font: {
          size: 14,
          weight: "500",
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 14,
          family: "Arial, sans-serif",
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#EDEDED",
      },
      ticks: {
        stepSize: 100,
      },
    },
  },
};
