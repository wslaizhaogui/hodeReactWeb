import React from 'react';
import Menu from "./menu"
import Index from "../index/index"
import { Layout, Tabs } from 'antd';
import "./main.css";

const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;

function callback(key) {
  console.log(key);
}

export default class main extends React.Component {
  constructor(props) {
    super(props);
    const tabs = [
      { title: "首页", url: <Index />,closable: false, key: "1111" }
    ];
    this.state = {
      activeKey: tabs[0].key,
      tabs,
    };
  }
  changeTab = (menuId, menuName, url) => {
    //const tabs = this.state.tabs;
    const { tabs } = this.state;
    const activeKey = menuId;
    let isAdd: boolean = true;
    tabs.forEach((pane,i) =>{
      if(pane.key === menuId ){
          isAdd = false;
      }
    });
    if(isAdd){
      tabs.push({ title: menuName, url: url, key: activeKey });
    }
    this.setState({ tabs, activeKey });
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = targetKey => {
    console.log(11111);
    const { tabs, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    tabs.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newtabs = tabs.filter(pane => pane.key !== targetKey);
    if (newtabs.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newtabs[lastIndex].key;
      } else {
        newActiveKey = newtabs[0].key;
      }
    }
    this.setState({
      tabs: newtabs,
      activeKey: newActiveKey,
    });
  };
  onChange = activeKey => {
    this.setState({ activeKey });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header></Header>
        <Layout>
          <Sider className="sider-style"><Menu main={this}></Menu></Sider>
          <Content className="content-style">
            <Tabs
              activeKey={this.state.activeKey}
              type="editable-card"
              onChange={this.onChange}
              onEdit={this.onEdit}
            >
              {this.state.tabs.map((tab) => (
                <TabPane tab={tab.title} key={tab.key} closable={tab.closable}>{tab.url}</TabPane>
              ))}
            </Tabs></Content>
        </Layout>
      </Layout>
    );
  }
}