import React from 'react';
import Menu from "./menu"
import { Layout, Tabs } from 'antd';
import "./main.css";

const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;
const tabs = [1,2,3,4,5];
const tabsList = tabs.map((number)=>
  <TabPane tab={number.toString()} key={number.toString()}>Content of Tab Pane {number}</TabPane>
);
function callback(key) {
  console.log(key);
}

// function changeTab(){

// }
export default class main extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header></Header>
        <Layout>
          <Sider className="sider-style"><Menu></Menu></Sider>
          <Content className="content-style">
            <Tabs defaultActiveKey="1" onChange={callback}>
            {tabsList}
          </Tabs></Content>
        </Layout>
      </Layout>
    );
  }
}