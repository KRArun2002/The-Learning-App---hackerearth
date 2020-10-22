import React from 'react';
import { Table } from 'react-bootstrap';
import { studentdetail } from '../shared/studentdetail';


function Studentdetails() {
	return (
		<div className="studentdetails">
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>ID</th>
					<th>Sex</th>
					<th>School</th>
					<th>Enrolled Course</th>
					<th>Enrolled Course</th>
				</tr>
			</thead>
			<tbody>
					<tr>
						<td></td>
						<td>{studentdetail[0].name}</td>
						<td>{studentdetail[0].email}</td>
						<td>{studentdetail[0].identity}</td>
						<td>{studentdetail[0].sex}</td>
						<td>{studentdetail[0].school}</td>
						<td>{studentdetail[0].course1}</td>
						<td>{studentdetail[0].course2}</td>

					</tr>
			</tbody>
		</Table>
	</div>
	);
}

export default Studentdetails;
