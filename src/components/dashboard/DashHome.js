import React from "react";
import { Container, Row } from 'reactstrap';
import SideNav from './SideNav';
import BarChart from '../charts/BarChart';

export default function DashHome() {
    
    return (
        <div className="dashboard-wrap">

        <SideNav />

        <Container>

            <h4 className="greeting">Welcome</h4>

            <Row className="spacer">
            <BarChart />
            </Row>

            <Row>
                <p>Placeholder</p>
            </Row>
        </Container>

    </div>
    );
}