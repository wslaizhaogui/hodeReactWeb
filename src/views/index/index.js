import { Card, Col, Row } from 'antd';
import React from 'react';


export default class Index extends React.Component{
    render(){
        return(
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            </Row>
        </div>
        );
    }
}