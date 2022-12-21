// Bar chart
let value = [
  0, 55, 66, 64, 58, 59, 60, 59, 66, 65, 68, 53, 55, 65, 65, 55, 67, 65, 56,
  70, 53, 54, 70, 54, 53, 52, 43, 54, 56, 60, 65, 55, 61, 58, 49, 49, 62, 54,
  69, 46, 54, 46, 56, 51, 48, 68, 47, 62, 48, 42, 57, 59, 58,
];

let riviere = "#088378";
let etang = "#00ECCC";
Chart.defaults.color = "#ff0000";
Chart.defaults.global.defaultsFontColor = "white";
let tabColor = [];
let delayed;
for (let index = 0; index < value.length; index++) {
  if (value[index] >= 65) {
    tabColor.push(etang);
  } else {
    tabColor.push(riviere);
  }
}

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: [
      "1967",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "2021",
    ],
    datasets: [
      {
        label: "Intensité des précipitations (mn/h)",
        backgroundColor: "#00000000",
        borderColor: tabColor,
        labelColor: "#FF0000",
        data: value,
        borderWidth: 3,
        scaleFontColor: "#FFFFFF",
        fontColor: "white",
       
      },
      {
        type: "line",
        label: "test (mn/h)",
        showLine: false,
        pointStyle: "circle",
        backgroundColor: "#00000000",
        borderColor: "#0eb384",
        pointRadius: 13,
        pointBackgroundColor: "#088378",
        
        data: [
          70, 75, 78, 80, 82, 88, 87, 89, 92, 89, 83, 85, 83, 80, 79, 77, 81,
          85, 83, 82, 79, 82, 86, 84, 85, 83, 80, 76, 74, 72,
        ],
      },

      {
        type: "line",
        label: "test (mn/h)",
      
        showLine: false,
        pointStyle: "circle",
        backgroundColor: "#00000000",
        borderColor: "#0eb384",
        pointRadius: 13,
        pointBackgroundColor: "#00ECCC",

        data: [
          70, 75, 78, 80, 82, 88, 87, 89, 92, 89, 83, 85, 83, 80, 79, 77, 81,
          85, 83, 82, 79, 82, 86, 84, 85, 83, 80, 76, 74, 72, 76, 78, 80, 82,
          84, 86, 85, 84, 82, 78, 81, 79, 77, 74, 76, 78, 77, 80, 81, 82, 84,
          82, 85,
        ],
      },
    ],
  },

  options: {
    
      
  
    
    responsiveAnimationDuration: 3000,
    barStrokeWidth: 8,
    responsive: true,
    maintainAspectRatio: false,
    barShowStroke: true,
    tooltips: {
      titleFontSize: 12,
    },
    

  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
   
      x: {
        ticks: {
          color: "red",
        },
      },
      y: {
        ticks: {
          color: "green",
        },
      },
    },
  },

  
  legend: { display: true },

  title: {
   
    display: true,
    text: "Evolution de lintensité des pluies extrêmes en regions méditerranéenne de 1967 à nos jours",
    fontColor: "white",
    color: "#FFF",
  },
});

// animations: {
//     borderColor: {
//       type: 'color',
//       duration: 1000,
//       from: 'green',
//       to: 'red',
//       loop: true,
//     }
//   },

// animation: {
//   borderWidth: {
//     duration: 2000,
//     from: 20,
//     to: 10,
//     loop: true,
//   }
// },

// animations: {
//   tension: {
//     // duration: 2000,
//     easing: 'linear',
//     from: 1,
//     to: 0,
//     loop: true
//   }
// },
