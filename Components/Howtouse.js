import React, { Component } from 'react';
import { render } from 'react-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Steps, Divider, Button } from 'antd';
import { Container } from 'reactstrap';

const { Step } = Steps;

class Howtouse extends Component {
  

  render() {
    return (
      <div>
        <div style={{textAlign : 'center', fontSize : '25px', fontWeight : 'bold'}}>
          Guide <QuestionCircleOutlined />
        </div>
        <hr/>
        <br/>

        <Container>
        
          <Steps progressDot current={5} direction="vertical">
            <Step title="Step 1" description="Visit 'https://lecturenotes.in'."/>
            <Step title="Step 2" description="Search for the notes you want to download, it can be both paid or free."/>
            <Step title="Step 3" description="Copy the URL of that page. For Eg : https://lecturenotes.in/m/54631-note-for-data-communication-and-computer."/>

            
            <Step title="Step 4" description="Here '54631' is the Noted ID. Copy that ID and make a request to download the notes on 'Boring Notes'."/>

          </Steps>

          <a href = "/"><Button>Visit Dashboard</Button></a>

        
        </Container>
        
      </div>
    );
  }
}

export default Howtouse;
