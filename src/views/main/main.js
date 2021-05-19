import React from 'react';
import Menu from "./menu"
import { Layout, Tabs } from 'antd';
import "./main.css";

const { TabPane } = Tabs;
const { Header, Sider, Content } = Layout;

function callback(key) {
  console.log(key);
}

export default class main extends React.Component {
  constructor(props){
    super(props);
    const tabs = [
      {title:"首页",content:"",key:"1111"}
    ];
    this.state = {
      activeKey: tabs[0].key,
      tabs,
    };
  }
  changeTab = (menuId,menuName,url) =>{
    //const tabs = this.state.tabs;
    const {tabs} = this.state;
    const activeKey = menuId;
    tabs.push({title:menuName,content:url,key:activeKey});
    this.setState({ tabs, activeKey });
 }
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
                  >
              {this.state.tabs.map((tab)=>(
              <TabPane tab={tab.title} key={tab.menuId}>{tab.component}</TabPane>
            ))}
          </Tabs></Content>
        </Layout>
      </Layout>
    );
  }
}