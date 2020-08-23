import React from 'react';
import { render } from 'react-dom';
import Logo from './logo.svg';
import { Row, Col, Button, Card, Divider } from 'antd';
import { Input } from 'antd';
import Dashboard from './Dashboard';
import Contact from './Contact';
import About from './About';
import Howtouse from './Howtouse';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './Home.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, GithubOutlined, DashboardOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class Home extends React.Component {

  


  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    return (

      <Router>

      <div>
        <Layout>
    <Header className="header">
      <div className="Logo" style={{color : 'white'}}>

        Boring Notes

      </div>
      
    </Header>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}  width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          theme="dark"
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />} title="Dashboard"><Link to="/"/>Dashboard</Menu.Item>

          <Menu.Item key="2" icon={<UserOutlined />} title="About"><Link to="/about"/>About</Menu.Item>
          
            
          <Menu.Item key="3" icon={<LaptopOutlined />} title="How to Use"><Link to="/how" />How to Use</Menu.Item>
          
          <Menu.Item key="4" icon={<NotificationOutlined />} title="Contact"><Link to="/contact" />Contact</Menu.Item>

          <Menu.Item key="5" icon={<GithubOutlined />} title="Contribute"><a href="https://github.com/niteshsh4rma">Contribute</a></Menu.Item>

          
        </Menu>
      </Sider>
      <Layout style={{ padding: '24px 24px 24px' }}>
        <Content
          
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>


        

          <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/how">
            <Howtouse />
          </Route>
          </Switch>

          

          
        </Content>
      </Layout>
    </Layout>
  </Layout>
      </div>
      </Router>
    );
  }
}

