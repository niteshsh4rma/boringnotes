import React, { Component } from 'react';
import { render } from 'react-dom';
import { Row, Col, Search, Divider, Card, Input, Button } from 'antd';
import { Spin, notification, Space, Steps } from 'antd';
import { LoadingOutlined, DownloadOutlined } from '@ant-design/icons';



const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Step } = Steps;






const { Search } = Input;

export default class Dashboard extends Component {

  constructor(){
      super();
      this.state={
        downloadLink : null,
        downloadVisible : false,
        loadSpin : false,
      }
  }


  async download(id){

    const openNotificationWithInfo = type => {
    notification[type]({
    message: 'Pending',
    description:
      'Your Request is in queue, please check after some time',
    });
    };

    const openNotificationWithSuccess = type => {
    notification[type]({
    message: 'Success',
    description:
      'Your Request is successful',
    });
    };

    let checker = (check) => {
      this.setState({loadSpin: false});
      this.setState({downloadLink: check.Notes[0].pdf });
      this.setState({downloadVisible: true});
      console.log('Success');
      openNotificationWithSuccess('success');
      
    }

    this.setState({loadSpin: true});
    this.setState({downloadVisible:false});
    console.log(id);

    fetch('https://boringnotes.herokuapp.com/notes/?notes_id='+id).then(res => res.json()).then(finalresult => console.log('started'));

    let inteval = setInterval(run,10000,id);
    
    async function run(id){

      let tempresult;
      await fetch('https://boringnotes.herokuapp.com/notes/?notes_id='+id).then(res => res.json()).then(finalresult => tempresult = finalresult);
      if (tempresult.Notes[0].status){
        cinterval();
        checker(tempresult);
      }
    }

    function cinterval(){
      clearInterval(inteval);
    }

  }
  

  render() {
    return (
      <div>
        
        <div style={{textAlign : 'center'}}>
            <Row>

              <Col span={24} offset={0}>
                <Search 
                  size="large"
                  placeholder="Notes ID" 
                  style={{textAlign : ' center', height : '30px'}}
                  onSearch={value => this.download(value)}
                  enterButton />
              </Col>    
            </Row>

            <br/>
            <br/>

            {
              this.state.loadSpin ? <div><Spin indicator={antIcon}/></div> : null
            }

            

            

            <br/>

            {
              this.state.downloadVisible ? <div><a target="blank"  href={this.state.downloadLink}><Button type="default" icon={<DownloadOutlined />} size='large'>Download</Button></a></div> : null
            }

            <br/>
            <a href="/how"><Button>How to Use ?</Button></a>

            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
              Notice
            </Divider>

            <Steps progressDot current={5} direction="vertical">
            
            <Step title="#1" description="Application can take 10-15 minutes to Complete the request."/>
            <Step title="#2" description="We are using free server so we appreciate your patience."/>
            <Step title="#3" description="Sometimes it won't work for notes with 200+ pages, in that case contact developer for manual update."/>
          </Steps>



            

            
            


            <br/>

            <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
              Statistics
            </Divider>

            <Row>

              <Col flex={5}>
              
                <Card hoverable title="Subjects" bordered={true} bodyStyle={{ background : 'rgba(0,0,0,0.05)',margin : '5px' }}>
                  100+
                </Card>

              </Col>
              
              <Col flex={5}>
              
                <Card hoverable title="Downloads" bordered={true} bodyStyle={{ background : 'rgba(0,0,0,0.05)', margin : '5px' }}>
                  524
                </Card>
              
              </Col>

              <Col flex={5}>
              
              <Card hoverable title="Users" bordered={true} bodyStyle={{ background : 'rgba(0,0,0,0.05)', margin : '5px' }}>
                  58
                </Card>
              
              </Col>

            </Row>

          </div>



      </div>
    );
  }
}


