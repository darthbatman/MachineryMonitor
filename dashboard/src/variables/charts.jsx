/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false,
          maxTicksLimit: 7
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const streamData = [{"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.84375, "FUEL_RATE": 3.986111143e-06, "ENGINE_SPEED": 1458.25, "WIND_SPEED": 0.53, "RELATIVE_HUMIDITY": 11.092, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.936, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 47888, "JOB_AREA_REMAINING": 4650, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 403349.9, "SPRAY_NOZZLE_PRESSURE": 373747.7, "PRODUCT_10_ACTUAL": 3737477},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27, "FUEL_RATE": 3.138888914e-06, "ENGINE_SPEED": 1434, "WIND_SPEED": 0.28, "RELATIVE_HUMIDITY": 11.268, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.855, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 48194, "JOB_AREA_REMAINING": 4344, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 405505.30000000005, "SPRAY_NOZZLE_PRESSURE": 371179.10000000003, "PRODUCT_10_ACTUAL": 3711791},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.9375, "FUEL_RATE": 3.5138889170000003e-06, "ENGINE_SPEED": 1505.125, "WIND_SPEED": 0.39, "RELATIVE_HUMIDITY": 11.392, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.981, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 48500, "JOB_AREA_REMAINING": 4038, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 405505.30000000005, "SPRAY_NOZZLE_PRESSURE": 371179.10000000003, "PRODUCT_10_ACTUAL": 3711791},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 27.21875, "FUEL_RATE": 3.138888914e-06, "ENGINE_SPEED": 1524.375, "WIND_SPEED": 0.34, "RELATIVE_HUMIDITY": 11.368, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.7600000000000002, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 48500, "JOB_AREA_REMAINING": 4037, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 399768.5, "SPRAY_NOZZLE_PRESSURE": 366537.9, "PRODUCT_10_ACTUAL": 3665379},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.96875, "FUEL_RATE": 4.013888921e-06, "ENGINE_SPEED": 1513, "WIND_SPEED": 0.29, "RELATIVE_HUMIDITY": 11.4, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.778, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 49111, "JOB_AREA_REMAINING": 3427, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 403363.30000000005, "SPRAY_NOZZLE_PRESSURE": 363815.9, "PRODUCT_10_ACTUAL": 3638159},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.09375, "FUEL_RATE": 3.680555585e-06, "ENGINE_SPEED": 1494.75, "WIND_SPEED": 0.42, "RELATIVE_HUMIDITY": 11.376, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.977, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 49417, "JOB_AREA_REMAINING": 3121, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 403363.30000000005, "SPRAY_NOZZLE_PRESSURE": 363815.9, "PRODUCT_10_ACTUAL": 3638159},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 27.0625, "FUEL_RATE": 3.555555584e-06, "ENGINE_SPEED": 1422.125, "WIND_SPEED": 0.43, "RELATIVE_HUMIDITY": 11.42, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.9010000000000002, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 49723, "JOB_AREA_REMAINING": 2815, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 399702, "SPRAY_NOZZLE_PRESSURE": 375469.80000000005, "PRODUCT_10_ACTUAL": 3754698},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.09375, "FUEL_RATE": 3.2361111370000003e-06, "ENGINE_SPEED": 1495.125, "WIND_SPEED": 0.24, "RELATIVE_HUMIDITY": 11.224, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 4.009, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 49723, "JOB_AREA_REMAINING": 2815, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 399702, "SPRAY_NOZZLE_PRESSURE": 375469.80000000005, "PRODUCT_10_ACTUAL": 3754698},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.09375, "FUEL_RATE": 3.375000027e-06, "ENGINE_SPEED": 1454.125, "WIND_SPEED": 0.41000000000000003, "RELATIVE_HUMIDITY": 11.188, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.884, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 50334, "JOB_AREA_REMAINING": 2204, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 381320.80000000005, "SPRAY_NOZZLE_PRESSURE": 345053.9, "PRODUCT_10_ACTUAL": 3450539},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 27.0625, "FUEL_RATE": 3.75000003e-06, "ENGINE_SPEED": 1499, "WIND_SPEED": 0.26, "RELATIVE_HUMIDITY": 11.304, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.858, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 50640, "JOB_AREA_REMAINING": 1898, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 380673.80000000005, "SPRAY_NOZZLE_PRESSURE": 345869, "PRODUCT_10_ACTUAL": 3458690},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.15625, "FUEL_RATE": 3.986111143e-06, "ENGINE_SPEED": 1487.25, "WIND_SPEED": 0.42, "RELATIVE_HUMIDITY": 11.064, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.966, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 50946, "JOB_AREA_REMAINING": 1592, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 380673.80000000005, "SPRAY_NOZZLE_PRESSURE": 345869, "PRODUCT_10_ACTUAL": 3458690},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.8125, "FUEL_RATE": 3.555555584e-06, "ENGINE_SPEED": 1422.75, "WIND_SPEED": 0.66, "RELATIVE_HUMIDITY": 11.148, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.839, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 50946, "JOB_AREA_REMAINING": 1592, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 409658.30000000005, "SPRAY_NOZZLE_PRESSURE": 376600.7, "PRODUCT_10_ACTUAL": 3766007},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27, "FUEL_RATE": 3.305555582e-06, "ENGINE_SPEED": 1458, "WIND_SPEED": 0.29, "RELATIVE_HUMIDITY": 11.448, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.947, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 51557, "JOB_AREA_REMAINING": 981, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 388586.2, "SPRAY_NOZZLE_PRESSURE": 365018.7, "PRODUCT_10_ACTUAL": 3650187},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 27.15625, "FUEL_RATE": 3.583333362e-06, "ENGINE_SPEED": 1470.875, "WIND_SPEED": 0.65, "RELATIVE_HUMIDITY": 11.144, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.979, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 51863, "JOB_AREA_REMAINING": 675, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 388586.2, "SPRAY_NOZZLE_PRESSURE": 365018.7, "PRODUCT_10_ACTUAL": 3650187},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.96875, "FUEL_RATE": 3.930555587e-06, "ENGINE_SPEED": 1475.875, "WIND_SPEED": 0.28, "RELATIVE_HUMIDITY": 11.06, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.841, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 52169, "JOB_AREA_REMAINING": 369, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 380627.60000000003, "SPRAY_NOZZLE_PRESSURE": 348680.7, "PRODUCT_10_ACTUAL": 3486807},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.15625, "FUEL_RATE": 4.02777781e-06, "ENGINE_SPEED": 1467.75, "WIND_SPEED": 0.56, "RELATIVE_HUMIDITY": 11.14, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.895, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 52169, "JOB_AREA_REMAINING": 369, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 380627.60000000003, "SPRAY_NOZZLE_PRESSURE": 348680.7, "PRODUCT_10_ACTUAL": 3486807},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 27, "FUEL_RATE": 3.875000031e-06, "ENGINE_SPEED": 1524.125, "WIND_SPEED": 0.64, "RELATIVE_HUMIDITY": 11.16, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.908, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 52780, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 406353.10000000003, "SPRAY_NOZZLE_PRESSURE": 385539.80000000005, "PRODUCT_10_ACTUAL": 3855398},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 27.25, "FUEL_RATE": 3.9027778090000004e-06, "ENGINE_SPEED": 1470, "WIND_SPEED": 0.65, "RELATIVE_HUMIDITY": 10.952, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 4.006, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 53086, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 396682.4, "SPRAY_NOZZLE_PRESSURE": 370367.5, "PRODUCT_10_ACTUAL": 3703675},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.875, "FUEL_RATE": 3.680555585e-06, "ENGINE_SPEED": 1506.125, "WIND_SPEED": 0.58, "RELATIVE_HUMIDITY": 11.232000000000001, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 4.008, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 53392, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 396682.4, "SPRAY_NOZZLE_PRESSURE": 370367.5, "PRODUCT_10_ACTUAL": 3703675},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.875, "FUEL_RATE": 3.722222252e-06, "ENGINE_SPEED": 1506.25, "WIND_SPEED": 0.65, "RELATIVE_HUMIDITY": 11.284, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.827, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 53392, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 417653.60000000003, "SPRAY_NOZZLE_PRESSURE": 391966.60000000003, "PRODUCT_10_ACTUAL": 3919666},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 85, "OUTSIDE_AIR_TEMP": 26.84375, "FUEL_RATE": 3.305555582e-06, "ENGINE_SPEED": 1515.625, "WIND_SPEED": 0.55, "RELATIVE_HUMIDITY": 10.964, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.786, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 54003, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 402491.4, "SPRAY_NOZZLE_PRESSURE": 380003.60000000003, "PRODUCT_10_ACTUAL": 3800036},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 26.78125, "FUEL_RATE": 3.8333333640000005e-06, "ENGINE_SPEED": 1501, "WIND_SPEED": 0.37, "RELATIVE_HUMIDITY": 11.292, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.87, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 54309, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 402491.4, "SPRAY_NOZZLE_PRESSURE": 380003.60000000003, "PRODUCT_10_ACTUAL": 3800036},
  {"FUEL_DELIVERY_PRESSURES": 496000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 496000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.1875, "FUEL_RATE": 3.416666694e-06, "ENGINE_SPEED": 1515.75, "WIND_SPEED": 0.56, "RELATIVE_HUMIDITY": 10.94, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 3.974, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 54615, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 400214.4, "SPRAY_NOZZLE_PRESSURE": 368424.5, "PRODUCT_10_ACTUAL": 3684245},
  {"FUEL_DELIVERY_PRESSURES": 500000, "FUEL_LEVEL": 100, "ENGINE_OIL_PRESS": 500000, "ENGINE_COOLANT_TEMP": 84, "OUTSIDE_AIR_TEMP": 27.25, "FUEL_RATE": 3.583333362e-06, "ENGINE_SPEED": 1486.5, "WIND_SPEED": 0.49, "RELATIVE_HUMIDITY": 11.408, "HYDR_OIL_TEMP": 55, "VEHICLE_SPEED": 4.123, "SAT_SIGNAL": 0, "FUEL_CAPACITY": 0.31, "SELECTED_NOZZLE_POSITION_2": 32, "SELECTED_NOZZLE_POSITION_3": 1024, "SELECTED_NOZZLE_POSITION_4": 0, "WORKING_WIDTH": 28, "AREA_TOTAL": 54615, "JOB_AREA_REMAINING": 0, "GPS_MODE": 0, "MACHINE_STATE": 7, "ENGINE_ON": 1, "GSM_SIGNAL": 0, "PUMP_PRESSURE": 400214.4, "SPRAY_NOZZLE_PRESSURE": 368424.5, "PRODUCT_10_ACTUAL": 3684245}
];

let fr = [];
for (var i = 0; i < streamData.length; i++) {
  fr.push(streamData[i]["FUEL_RATE"]);
}

const dashboardPanelChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: fr
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#fff",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false
    },
    scales: {
      yAxes: [
        {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          max: 10,
          fontColor: "#FFFFFF",
          maxTicksLimit: 7
        }
      }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "#FFFFFF",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

let fdp = [];
for (var i = 0; i < streamData.length; i++) {
  fdp.push(streamData[i]["FUEL_DELIVERY_PRESSURES"]);
}

let fl = [];
for (var i = 0; i < streamData.length; i++) {
  fl.push(streamData[i]["FUEL_LEVEL"]);
}

const dashboardShippedProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: fdp
        }
      ]
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#fff",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false
    },
    scales: {
      yAxes: [
        {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

const dashboardShippedProductsChart2 = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: fl
        }
      ]
    };
  },
  options: gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 7
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};

module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
  dashboardShippedProductsChart2,
  dashboardAllProductsChart, // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart // Chart for Dashboard view - 24 Hours Performance Card
};
