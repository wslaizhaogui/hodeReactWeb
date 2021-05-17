import React from 'react';
import Menu from "./menu"
import { Layout, Tabs } from 'antd';
import "./main.css";

const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;
const tabs = ['标签页1','标签页2','标签页3','标签页4','标签页5'];
const tabsList = tabs.map((number)=>
  <TabPane tab={number.toString()} key={number.toString()}>Content of Tab Pane {number}</TabPane>
);
function callback(key) {
  console.log(key);
}

 function changeTab(e){
    console.log("父组件接受到的值："+e);
 }
export default class main extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header></Header>
        <Layout>
          <Sider className="sider-style"><Menu callbackParent={this.changeTab}></Menu></Sider>
          <Content className="content-style">
            <Tabs defaultActiveKey="1" onChange={callback}>
            {tabsList}
          </Tabs></Content>
        </Layout>
      </Layout>
    );
  }
}