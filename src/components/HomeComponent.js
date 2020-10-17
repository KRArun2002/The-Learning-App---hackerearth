import React from 'react';
import slide1 from "../images/slide_image1.gif";
import slide2 from "../images/slide_image2.png";
import slide3 from "../images/slide_image3.jpg";
import Slideshow from './SlideShowComponent';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const s = {
    container: "screenW screenH col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
  };

  const slides = [slide1, slide2, slide3];

function RenderCard({item}) {
    return(
        <Card>
            <CardImg width="100" height="250" src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>
                <ul>
                    <li>{ item.subject1 }</li>
                    <li>{ item.subject2 }</li>
                    <li>{ item.subject3 }</li>
                </ul>
            </CardText>
            </CardBody>
       </Card>
    );
}


const Home = (props) => {
    const subject = props.subject.map((sub) => {
      return (
        <div key={sub.id} className="col-12 col-md-4 mb-3 justify-content-center">
          <RenderCard item={sub} />
        </div>
      );
  });

    
    return(
        <>
        
        <div className={s.container}>
            <Slideshow slides={slides} />
        </div>
        <br/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <h3>Subjects</h3>
                  <hr />
                </div>                
            </div>
            <div className="row">
                {subject}
            </div>
        </div>
        </>

    );
}

export default Home;