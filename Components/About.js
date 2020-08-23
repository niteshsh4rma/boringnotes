import React, { Component } from 'react';
import { render } from 'react-dom';
import { Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons'

class About extends Component {
  

  render() {
    return (
      <div>
        <div style={{textAlign : 'center', fontSize : '25px', fontWeight : 'bold'}}>
          About <UserOutlined />
        </div>
        <hr/>

        <div style={{textAlign : 'center', fontSize : '15px', fontWeight : 'bold'}}>
          
          Boring Notes is a notes downloading website. Boring Notes doesn't has rights to any of those notes, we only get those from source sites. This is a project by <br/><a href = "https://github.com/sanyam1992000">Sanyam Mittal</a><br/>&<br/><a href = "https://github.com/niteshsh4rma">Nitesh Sharma</a><br/>to help college and school students for their studies to be more effective and qualitative.


        </div>


      </div>
    );
  }
}

export default About;
