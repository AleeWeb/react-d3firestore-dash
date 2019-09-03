import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { Container, Col, Card, Row } from 'reactstrap';
import SideNav from './SideNav';
import BarChart from '../charts/BarChart';
import Pie from '../charts/Pie';
//import PlotChart from '../charts/PlotChart';


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

            <Container>

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
                    <Col md="12">
                        <Card>
                            {/*<PlotChart /> */}
                        </Card>
                    </Col>

                    
                </Row>
            </Container>

        </div>
    );
}