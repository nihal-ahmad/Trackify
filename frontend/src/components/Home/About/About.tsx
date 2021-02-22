import React from 'react';

import { Row, Col ,Layout} from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function About() {
  const {Content} = Layout;
  return (
    // <div id="about" className="block aboutBlock">
    //   <div className="container-fluid">
    //     <div className="titleHolder">
    //       <h2>About Us</h2>
    //       <p>dolor sit amet, consectetur adipisicing elit</p>
    //     </div>
    //     <div className="contentHolder">
    //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
    //     </div>
    //     <Row gutter={[16, 16]}>   
    //       {items.map(item => {
    //         return (
    //           <Col md={{ span: 8 }} key={item.key}>
    //             <div className="content">
    //               <div className="icon">
    //                 {item.icon}
    //               </div>
    //               <h3>{item.title}</h3>
    //               <p>{item.content}</p>
    //             </div>
    //           </Col>
    //         );
    //       })}
    //     </Row>
    //   </div>
    // </div>
    <>
    <Layout>
      <Content style={{
        paddingTop: "12vh",
      paddingLeft: "3vw",
      // paddingRight: "1vw"
      }}>
<Row style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <b style={{
    fontSize:"1.8em",
    color: "#3690CC"
  }}>Intro :</b>
</Row >
<br />
<Row style={{
 display: "flex",
 justifyContent: "center",
 alignItems: "center"
}}>
  <Row style={{fontSize: "2em"}}>
  We went through the job application process ourselves and we were not so happy about it.
  </Row>
  
</Row>
<br />
<Row style={{
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 fontSize: "1.7em",
 color: "#A0A0A0"
}}>
  # Messy spreadsheets, lost emails, lack of information.
  </Row>
  <Row style={{
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 fontSize: "1.7em",
 color: "#A0A0A0"
}}>
  # We decided to make a job search simple and data-driven and career advising efficient.
  </Row>
  <Row style={{
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 fontSize: "1.7em",
 color: "#A0A0A0"
}}>
  # In a nutshell, <b>Trackify </b>as a platform,simplifies and manages a student's dream to 
  land jobs.
  </Row>
<br />
<Row style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <b style={{
    fontSize:"1.8em",
    color: "#3690CC"
  }}>Our Team :</b>
</Row >
<br />
<Row style={{backgroundColor: "#3690CC"}}>
  <Col xs={22} sm={22} lg={12}>

  </Col>
  <Col xs={22} sm={22} lg={12}>

  </Col>
</Row>
      </Content>
    </Layout>
    </>
  );
}

export default About;