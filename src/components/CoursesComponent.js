import React from 'react';
import { SUBJECT } from '../shared/subject'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const subject = SUBJECT.map((sub) => {
	return (
	  <div key={sub.id} className="col-sm-12 col-md-4 mb-3 justify-content-center">
	        <div class="subjectcard">
            <CardImg width="20" height="250" src={sub.image} alt={sub.name} />
            <CardBody>
            <CardTitle>{sub.name}</CardTitle>
            <CardText>
                <ul>
                    <li>{ sub.subject1 }</li>
                    <li>{ sub.subject2 }</li>
                    <li>{ sub.subject3 }</li>
                </ul>
            </CardText>
            </CardBody>
	       </div>
	  </div>
	);
});
	

function Courses() {
	return (
		<div className="products">
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <h3>Enrolled Courses</h3>
                  <hr />
                </div>                
            </div>
            <div className="row">
			{subject}
            </div>
        </div>


		</div>
	);
}

export default Courses;
