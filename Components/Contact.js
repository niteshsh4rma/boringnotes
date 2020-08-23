import React, { Component } from 'react';
import { render } from 'react-dom';
import { ContactsOutlined } from '@ant-design/icons'
import { Tabs, Tag } from 'antd';
import {
  
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

class Contact extends Component {
  

  render() {
    return (
      <div>
        <div style={{textAlign : 'center', fontSize : '25px', fontWeight : 'bold'}}>
          Contact <ContactsOutlined />
        </div>
        <hr/>
        
        <div style={{textAlign : 'center', fontSize : '25px', fontWeight : 'bold'}}>
          
          <Tabs defaultActiveKey="1">
            <TabPane tab="Sanyam Mittal" key="1">
              <a href="https://github.com/sanyam1992000"><Tag icon={<GithubOutlined />} color="#3b5999">
                GitHub
              </Tag></a><br/><br/>
              <a href="https://instagram.com/sanyam__mittal"><Tag icon={<InstagramOutlined />} color="#FF6347">
                Instagram
              </Tag></a><br/><br/>
              <a href="https://www.linkedin.com/in/sanyam-mittal-5a1283186/"><Tag icon={<LinkedinOutlined />} color="#55acee">
                LinkedIn
              </Tag></a>
            </TabPane>
            <TabPane tab="Nitesh Sharma" key="2">
              <a href="https://github.com/niteshsh4rma"><Tag icon={<GithubOutlined />} color="#3b5999">
                GitHub
              </Tag></a><br/><br/>
              <a href="https://instagram.com/niteshsh4rma"><Tag icon={<InstagramOutlined />} color="#FF6347">
                Instagram
              </Tag></a><br/><br/>
              <a href="https://linkedin.com/in/niteshsh4rma"><Tag icon={<LinkedinOutlined />} color="#55acee">
                LinkedIn
              </Tag></a>
            </TabPane>
   
          </Tabs>

        </div>


      </div>
    );
  }
}

export default Contact;
