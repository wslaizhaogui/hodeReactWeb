import React from 'react';
import Menu from "./menu"
import { Layout } from 'antd';
import "./main.css";
const { Header, Sider, Content } = Layout;
export default class main extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header></Header>
        <Layout>
          <Sider className="sider-style"><Menu></Menu></Sider>
          <Content className="content-style"></Content>
        </Layout>
      </Layout>
    );
  }
}