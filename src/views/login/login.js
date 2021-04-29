import React from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  message,
} from "antd";
import {withRouter} from 'react-router-dom';
import './login.css';
import loginBg from "../../assets/images/login_bg.svg";
import Logo from "../../assets/images/logo.svg";
import Name from "../../assets/images/name.svg";
import fakeAuth from "../util/fakeAuth"
import axios from 'axios'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showElem: "block",
          hideElem: "none",
          isLogin:false,
        };
      }
      getData(){
        axios.get('/user', {
          params: {
            ID: 12345
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
        axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      handleSubmit = (e) => {
        console.log("开始登陆...");
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            fakeAuth.setToken("zxcvbnmasdfghjkl");
            this.setState({ showElem: "none", hideElem: "block", isLogin:true });
            if (this.state["showElem"] === "none" && this.state["isLogin"] === true) {
              //如果验证码非空
              if (this.state.val !== "" && this.state.val !== undefined) {
                this.props.history.push("/main");
                message.success("登录成功", 1);
                return;
              } 
            }
          }
        });
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginWrap">
              <div className="contentWrap">
                <div className="leftSide">
                    <img src={loginBg} className="loginBg" alt="login" />
                </div>
                <div className="loginForm">
                  <div className="title">
                    <img src={Logo} alt="Ant Design后台管理系统" className="logo" />
                    <img src={Name} alt="Ant Design后台管理系统" className="name" />
                  </div>
                  <div className="dataWrap">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                      <Form.Item style={{ display: 'block' }}>
                        {getFieldDecorator("username", {
                          rules: [{ required: true, message: "请输入用户名" }],
                        })(
                          <Input
                            size="large"
                            prefix={
                              <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            placeholder="请输入用户账号"
                          />
                        )}
                      </Form.Item>
                      <Form.Item style={{ display: this.state.showElem }}>
                        {getFieldDecorator("password", {
                          rules: [{ required: true, message: "请输入密码" }],
                        })(
                          <Input
                            size="large"
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="请输入密码"
                          />
                        )}
                      </Form.Item>
                     {this.state.isLogin===true? <Form.Item  name={"sms"} htmlFor="reqmessage">
                        {getFieldDecorator("reqmessage", {
                          rules: [
                            { required: true, message: "请输入短信验证码" },
                            //{ validator:this.state.req===true?validate:""}
                          ],
                        })(
                          <Input
                            size="large"
                          
                            prefix={
                              <Icon
                                type="message"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            type="text"
                            placeholder="请输入短信验证码"
                            onBlur = {(e) => {this.setState({ val: e.target.value });}}
                          />
                        )}
                      </Form.Item>:null}
                      <Form.Item>
                        {getFieldDecorator("remember", {
                          valuePropName: "checked",
                          initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                          size="large"
                        >
                          登录
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default withRouter(Form.create({ name: "loginForm" })(Login));