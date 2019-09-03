import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { Container, Col, Card, Row, Table } from 'reactstrap';
import SideNav from './SideNav';
import BarChart from '../charts/BarChart';
import Pie from '../charts/Pie';
import Speedometer from '../charts/Speedometer';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function DashHome() {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );


  return (
    <div className="dashboard-wrap">

      <SideNav />

      <Container className="right-side">

        <h4 className="greeting">Welcome</h4>

        <Row className="spacer">
          <Col md="4 text-center">
            <div className="piechart-bg">
              <Pie
                data={data}
                width={200}
                height={371}
                innerRadius={60}
                outerRadius={100}
              />
              <div className="pie-btnstyle">
                <button onClick={changeData}>Transform</button>
              </div>
            </div>
          </Col>

          <Col md="8">
            <BarChart />
          </Col>
        </Row>

        <Row>
          <Col md="7">
            <Table striped>
              <thead>
                <tr>

                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Customer Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>Vanessa</td>
                  <td>Hudgens</td>
                  <td>vhudgens@prcomm.com</td>
                </tr>
                <tr>

                  <td>Alex</td>
                  <td>Jameson</td>
                  <td>ajameson@tech.com</td>
                </tr>
                <tr>

                  <td>Amy</td>
                  <td>Wyatt</td>
                  <td>awyatt@marketingpro.com</td>
                </tr>
                <tr>
                  <td>George</td>
                  <td>Kravitz</td>
                  <td>gkravitz@psych.org</td>
                </tr>
                <tr>
                  <td>Rebecca</td>
                  <td>Williams</td>
                  <td>rwilliams@prmedia.org</td>
                </tr>
              </tbody>
            </Table>
          </Col>


          <Col md="5">
            <Card>



              <Speedometer values={[0, 20, 80]}>
                {value => (
                  <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    circleRatio={0.75}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
                    })}
                  />
                )}
              </Speedometer>

            </Card>
          </Col>

        </Row>
      </Container>

    </div>
  );
}