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
import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import Modal from 'react-bootstrap/Modal'

import 'status-indicator/styles.css'


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardShippedProductsChart2,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  state = {
      ch_68: {
          labels: [],
          series: [[]],
          anomalies: [0, 0, 0]
      },
      ch_49: {
          labels: [],
          series: [[]],
          anomalies: [0, 0, 0]
      },
      ch_59: {
          labels: [],
          series: [[]],
          anomalies: [0, 0, 0]
      },
      ch_13: {
          labels: [],
          series: [[]],
          anomalies: [0, 0, 0]
      },
      ch_40: {
          labels: [],
          series: [[]],
          anomalies: [0, 0, 0]
      },
      ch_74: {
          labels: [],
          series: [[]],
          anomalies: [0, 0, 0]
      },
      anomaly: {
        labels: [],
        series: [[], []]
      },
  }
  keyToFieldName = {
    ch_68: "Channel 68",          
    ch_49: "Channel 49",
    ch_59: "Channel 59",
    ch_13: "Channel 13",
    ch_40: "Channel 40",
    ch_74: "Channel 74",
    anomaly: {
      machine_anomaly: "Machine Anomaly",
    }
  }
  keyToAnomaly = {
    ch_68: "ch68AnomalyScore",          
    ch_49: "ch4AnomalyScore",
    ch_59: "ch3AnomalyScore",
    ch_13: "ch4AnomalyScore",
    ch_40: "ch40AnomalyScore",
    ch_74: "ch74AnomalyScore",
  }
  isSendingSNS = false
  update(prev, idx, curr) {
      const NUM_OF_ITEMS = 12

      let series = prev["series"]
      series[idx] = [...series[idx], curr]
      let labels = prev.labels
      if (idx == 0) {
          if (labels.length == 0) {
              labels = [1]
          } else {
              labels = [...labels, labels[labels.length - 1] + 1]
          }
      }

      if (labels.length >= NUM_OF_ITEMS) {
        if (series.length == idx + 1) {
          labels = labels.slice(1)
        }
          // labels = labels.slice(1)
          // for (let i = 0; i < series.length; i++) {
          //     series[i] = series[i].slice(1)
          // }
          series[idx] = series[idx].slice(1)
      }

      return {
          labels: labels,
          series: series,
          anomalies: prev.anomalies
      }
  }

  getAnomalyLevel(anomaly) {
    if (anomaly > 4) {
      return 2
    } else if (anomaly > 3) {
      return 1
    } else {
      return 0
    }
  }
  refreshView(state) {
      let curr = this.data
      let ch_68 = state.ch_68
      let ch_49 = state.ch_49
      let ch_59 = state.ch_59
      let ch_13 = state.ch_13
      let ch_40 = state.ch_40
      let ch_74 = state.ch_74
      let anomaly = state.anomaly
      let bigBoyThis = this;
      curr = JSON.parse(curr);
      // ["ch_68", "ch_49", "ch_59", "ch_13", "ch_40", "ch_74", "ANOMALY_SCORE", "ch_68_ANOMALY_SCORE", "ch_49_ANOMALY_SCORE", "ch_59_ANOMALY_SCORE", "ch_13_ANOMALY_SCORE", "ch_40_ANOMALY_SCORE", "ch_74_ANOMALY_SCORE"]
      Object.keys(curr).map(function(key) {
          switch(key) {
              case "ch_68":
                  ch_68 = bigBoyThis.update(ch_68, 0, curr[key])
                  break;
              case "ch_49":
                  ch_49 = bigBoyThis.update(ch_49, 0, curr[key])
                  break;

              case "ch_59":
                  ch_59 = bigBoyThis.update(ch_59, 0, curr[key])
                  break;

              case "ch_13":
                  ch_13 = bigBoyThis.update(ch_13, 0, curr[key])
                  break;
              
              case "ch_40":
                  ch_40 = bigBoyThis.update(ch_40, 0, curr[key])
                  break;

              case "ch_74":
                  ch_74 = bigBoyThis.update(ch_74, 0, curr[key])
                  break;

              case "ANOMALY_SCORE":
                  anomaly = bigBoyThis.update(anomaly, 0, curr[key])
                  anomaly = bigBoyThis.update(anomaly, 1, curr[key])
                  break

              case "ch_68_ANOMALY_SCORE":
                  ch_68.anomalies[bigBoyThis.getAnomalyLevel(curr[key])]++
                  bigBoyThis.setState({ ch68AnomalyScore: curr[key]})
                  break

              case "ch_49_ANOMALY_SCORE":
                  bigBoyThis.setState({ ch49AnomalyScore: curr[key]})
                  ch_49.anomalies[bigBoyThis.getAnomalyLevel(curr[key])]++
                  break

              case "ch_59_ANOMALY_SCORE":
                  bigBoyThis.setState({ ch59AnomalyScore: curr[key]})
                  ch_59.anomalies[bigBoyThis.getAnomalyLevel(curr[key])]++
                  break

              case "ch_13_ANOMALY_SCORE":
                  bigBoyThis.setState({ ch13AnomalyScore: curr[key]})
                  ch_13.anomalies[bigBoyThis.getAnomalyLevel(curr[key])]++
                  break

              case "ch_40_ANOMALY_SCORE":
                  bigBoyThis.setState({ ch40AnomalyScore: curr[key]})
                  ch_40.anomalies[bigBoyThis.getAnomalyLevel(curr[key])]++
                  break

              case "ch_74_ANOMALY_SCORE":
                  bigBoyThis.setState({ ch74AnomalyScore: curr[key]})
                  ch_74.anomalies[bigBoyThis.getAnomalyLevel(curr[key])]++
                  break
          }
      })

      return {
          ch_68: ch_68,          
          ch_49: ch_49,
          ch_59: ch_59,
          ch_13: ch_13,
          ch_40: ch_40,
          ch_74: ch_74,
          anomaly: anomaly,
      }
  }
  intervalExpired() {
    fetch("https://dh9tk12y7j.execute-api.us-east-1.amazonaws.com/default/GetFromDynamo")
        .then(res => res.json())
        .then(
          (result) => {
            this.data = result
            let prevState = this.refreshView(this.state)
            this.setState(prevState)
          },
          (error) => {
            // TODO: what's an error?
          }
        )
  }
  startGettingData() {
    var intervalId = setInterval(() => {
      this.intervalExpired()
    }, 2000);
    this.setState({ intervalId: intervalId });
  }
  componentDidMount() {
    this.startGettingData()
  }

  render() {
    var that = this
    dashboardPanelChart.data = canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: that.state["anomaly"].labels,
      datasets: [
        {
          label: "Machine Anomaly Score",
          borderColor: "#ffa500",
          pointBorderColor: "#ffa500",
          pointBackgroundColor: "#15304e",
          pointHoverBackgroundColor: "#ffa500",
          pointHoverBorderColor: "#ffa500",
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: that.state["anomaly"].series[1]
        }
      ]
    };
  }
    return (
      <>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
        <Row>
              {
                Object.keys(that.state).map(function(key, idx) {
                  if (key == "intervalId" || key.toLowerCase().includes("anomaly")) {
                    return null
                  }

                  dashboardShippedProductsChart2.data = canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, "#FFFFFF");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(0, 0, 255, 0.40)");
    gradientFill.addColorStop(1, "rgba(0, 0, 255, 0.40)");
    return {
      labels: that.state[key].labels,
      datasets: [
        {
          label: "",
          borderColor: "#0000FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#0000FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: that.state[key].series[0]
        }
      ]
    };
  }
  let statusText = "No Anomalies Detected"
  let statusIndicator = <status-indicator positive pulse></status-indicator>
  const anomalyLevel = that.getAnomalyLevel(that.state[that.keyToAnomaly[key]])
  if (anomalyLevel == 2) {
    statusIndicator = <status-indicator negative pulse></status-indicator>
    statusText = "Severe Anomaly Detected"
    if (!that.isSendingSNS) {
      that.isSendingSNS = true;
      setTimeout(function() {
        that.isSendingSNS = false;
      }, 10000);
    fetch("https://apk1hd4rqe.execute-api.us-east-1.amazonaws.com/default/SendToSNS?anomaly=error&source=" + key + "&value=" + that.state[key].series[0][that.state[key].series[0].length - 1] + "&score=" + that.state[that.keyToAnomaly[key]])
        .then(res => res.json())
        .then(
          (result) => {
           
          },
          (error) => {
            // TODO: what's an error?
          }
        )
     return (
      <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
    );
   }
  //   <Modal >
  //   <Header icon='archive' content='Archive Old Messages' />
  //   <Modal.Content>
  //     <p>
  //       Your inbox is getting full, would you like us to enable automatic
  //       archiving of old messages?
  //     </p>
  //   </Modal.Content>
  //   <Modal.Actions>
  //     <Button basic color='red' inverted>
  //       <Icon name='remove' /> No
  //     </Button>
  //     <Button color='green' inverted>
  //       <Icon name='checkmark' /> Yes
  //     </Button>
  //   </Modal.Actions>
  // </Modal>
    
  } else if (anomalyLevel == 1) {
    statusText = "Slight Anomaly Detected"
    statusIndicator = <status-indicator intermediary pulse></status-indicator>
    if (!that.isSendingSNS) {
      that.isSendingSNS = true;
      setTimeout(function() {
        that.isSendingSNS = false;
      }, 10000);
    fetch("https://apk1hd4rqe.execute-api.us-east-1.amazonaws.com/default/SendToSNS?anomaly=warning&source=" + key + "&value=" + that.state[key].series[0][that.state[key].series[0].length - 1] + "&score=" + that.state[that.keyToAnomaly[key]])
        .then(res => res.json())
        .then(
          (result) => {

          },
          (error) => {
            // TODO: what's an error?
          }
        )
      }
  }
      const anomalies = that.state[key]["anomalies"]
                  return (
                    <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">{"Machine Monitoring"}</h5>
                  <CardTitle tag="h4">{that.keyToFieldName[key]}</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardShippedProductsChart2.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    {statusText} <br/>Warnings: {anomalies[1]}, Dangers: {anomalies[2]}
                  </div>
                  {statusIndicator}
                </CardFooter>
              </Card>
            </Col>
                  )
              })
              }
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;