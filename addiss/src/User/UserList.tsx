import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {getEmployees, deleteEmployee} from '../redux/actions/employees'
import { useLists } from '../redux/types';

//sytle
const ButtonEdit = styled.button`
  background: rgb(77, 230, 166);
  border: none;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.625em 2em;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
`
const ButtonDelete = styled.button`
  background: rgb(230, 100, 77);
  border: none;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
`
const Div = styled.div`
  border: none;
  color: gray;
  font-size: 1em;
  margin: 0.25em;
  padding: 0.5em 1em;
  border-radius: 3px;
  text-align: left;
`
const Body = styled.div`
	margin: 10px;
	display: grid;
	grid-template-columns: repeat(4, 4fr);
	column-gap: 30px;
	row-gap: 20px;
	border-radius: 5px;
`
const Container = styled.div`
	width: 95%;
	border-radius: 5px;
	padding: 20px;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 80vh;
	border-top: 3px solid hsl(192, 70%, 51%);
`
const Title = styled.h3`
	font-weight: bolder;
	color: rgb(17, 121, 153);
`
const Label = styled.label`
    font-weight: bolder;
`
const Card = styled.div`
	box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
	padding: 10px;
	border-radius: 5px;
	background-color: background: rgba(255, 255, 245, 0.028);
`
const ButtonContainer = styled.div`
	display: flex; 
	justify-content: space-evenly;
`
const Main = styled.div`
	margin: 2em;
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: rgba(245, 245, 245, 0.178);
`

//sytle

export const UserList = () => {
	const [count, setCount] = useState("");

	const dispatch = useDispatch();
	let employees = useSelector((state: any) => state.getEmployees.employees.employees);
	const loading = useSelector((state : any) => state.getEmployees.loading);
	// const error = useSelector((state : any) => state.getEmployees.error);

    useEffect(() => {
		const fetchPlace = async () => {
			try {
				dispatch(getEmployees());  
			} catch (err) {}
		};
		fetchPlace();
	}, [count,dispatch]);

    return (
		<Main>
			<Title>List of Employees</Title>
        <Container className="Container">
			
			{loading && <p>Loading...</p>}
			
			<Body>
            {
				!loading && employees && employees.length > 0  && (
					employees.map((d:useLists) => {
						
						return (
							<Card key={d._id}>
								
								<Div>
									<Label>Name : {d.fullName }</Label>
								</Div>
								<Div>
									<Label>Email : {d.gender}</Label>
								</Div>
								<Div>
									<Label>Birth Year : {d.birthYear}</Label>
								</Div>
								<Div>
									<Label>Salary : {d.salary}</Label>
								</Div>
								<ButtonContainer>
									<ButtonEdit>
										<NavLink style={{color: 'inherit', textDecoration: 'none'}} to={`/employee/${d._id}`}>EDIT</NavLink>
									</ButtonEdit>
									<ButtonDelete
										onClick={async () => {
											try {
												dispatch(deleteEmployee(d._id));
												setCount(d._id);
											} catch (err) {}
										}}
									>
										Delete
									</ButtonDelete>
								</ButtonContainer>
							</Card>
						);
					})
				)
			}
			</Body>
        </Container>
		</Main>
    )
}