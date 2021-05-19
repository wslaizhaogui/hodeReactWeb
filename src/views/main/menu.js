import { Menu } from 'antd';
import React from "react";
const { SubMenu } = Menu;

function handleClick(e) {
    this.props.callbackParent(e);
}

const menuList =[
    {
        "menuId":"menu1000",
        "menuName":"项目管理",
        "url":"#",
        "child":[
            {
                "menuId":"menu1010",
                "menuName":"项目首页",
                "url":"#",
                "child":[

                ]
            },
            {
                "menuId":"menu1011",
                "menuName":"我的项目",
                "url":"#",
                "child":[

                ]
            }
        ]
    },
    {
        "menuId":"menu2000",
        "menuName":"知识管理",
        "url":"#",
        "child":[
            {
                "menuId":"menu2010",
                "menuName":"知识首页",
                "url":"#",
                "child":[

                ]
            },
            {
                "menuId":"menu2011",
                "menuName":"知识中心",
                "url":"#",
                "child":[

                ]
            }
        ]
    }
];

export default class MainMenu extends React.Component {
    toMain =(menu,e) =>{
        this.props.main.changeTab(menu.menuId,menu.menuName,menu.url);
    }
    
    renderMenu = (data)=>{
        return data.map((menu)=>{
            if(menu.child.length===0){
                return(
                    <Menu.Item key={menu.menuId} onClick={this.toMain.bind(this,menu)}>{menu.menuName}</Menu.Item>
                )
            }else{
                return(
                    <SubMenu key={menu.menuId} title={menu.menuName}>
                        {this.renderMenu(menu.child)}
                    </SubMenu>
                )
            }
        })
    }
    componentWillMount(){
        const menuListDom = this.renderMenu(menuList);
        this.setState({
            menuListDom,
        });
    };
    render() {
        return (
            <Menu style={{ width: 200 }} mode="vertical">
                {this.renderMenu(menuList)}
            </Menu>
        );
    }
}
