import React, { useRef, useState } from 'react';
// import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch ,useSelector} from 'react-redux';
import { createEmployee } from '../redux/actions/employees'

import './createUser.css'

const Section = styled.section`
  margin-top: 10px;
  color: white;
  padding: 3em;
  background: rgb(13, 65, 75);
  box-show: 1px 2px 5px rgba(0,0,0,0.2);
  border-radius: 5px;
`
const Button = styled.button`
  background: hsl(136, 65%, 51%);
  border: none;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  text-align: center;
`
const Input = styled.input`
    padding: 0.5em 1em;
    outline: none;
    border-radius: 3px;
    margin: 1em;
    border: 2px solid rgb(16, 168, 156);
`
const Select = styled.select`
    width: 100%;
    padding: 0.5em 1em;
    outline: none;
    border-radius: 3px;
    margin: 1em;
    border: 2px solid rgb(16, 168, 156);
`
const Label = styled.label`
    font-weight: bolder;
`
const Title = styled.h3`
    color: hsl(192, 70%, 51%);
    text-align: center;
	margin-top: 35px,
`
const Container = styled.div`
    display: flex;
	/* width: 100%; */
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Form = styled.div`
    display: grid;
	grid-template-columns: repeat(2, 4fr);
	column-gap: 30px;
	border-radius: 5px;
`
const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
`
const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    flex-direction: column;
    background-color: hsl(192, 70%, 51%, 10%); 
    height: 100px;
    border-radius: 10px
    color: white;
    padding: 20px;
`

export const Createuser = () => {
    const userName = useRef<HTMLInputElement>(null);
    const userGender = useRef<HTMLSelectElement>(null);
    const userYear = useRef<HTMLInputElement>(null);
    const userSalary = useRef<HTMLInputElement>(null);

    const [show , setShow] = useState(false)

    //
    const dispatch = useDispatch();
	const employee = useSelector((state: any) => state.createEmployee.employee);
	const loading = useSelector((state : any) => state.createEmployee.loading);
	const error = useSelector((state : any) => state.createEmployee.error);

    const onCreateHandler = async (event: React.FormEvent) => {
		event.preventDefault();

        const fullName = userName.current!.value;
        const gender = userGender.current!.value;
        const birthYear = userYear.current!.value;
        const salary = userSalary.current!.value;
        const data = {
            fullName: fullName,
            gender: gender,
            birthYear: birthYear,
            salary: salary
        }

        if(fullName.length > 0 && gender.length > 0 && birthYear.length > 0 && salary.length > 0) {
            try {
                dispatch(createEmployee(data));
                
                setShow(true);
            } catch (err) {}
        }
		
	};
    return (
        <Container>
            { show && employee && !loading && !error &&
                <ModalContainer>
                    <Modal>
                        <Title>Employee Created Successfully</Title>
                        <Button onClick={() => setShow(false)}>
                        Okay
                    </Button>
                    </Modal>
                </ModalContainer>
            }
            {!show && 
            <>
            <Title> Create a User </Title>
			<Section>
				<form onSubmit={onCreateHandler} >
                    <Form>
                        <div>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id='fullName' type='text' ref={userName} />
                        </div>
                        <div 
                            style={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                alignItems: 'center'
                            }}
                        >
                            <Label htmlFor="gender">Gender</Label>
                            <Select 
                                ref={userGender}
                            >
                                <option>None</option>
                                <option >Male</option>
                                <option>Female</option>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="birthYear">Birth Year</Label>
                            <Input id='birthYear' type='date' ref={userYear}/>
                        </div>
                        <div>
                            <Label htmlFor="salary">Salary</Label>
                            <Input id='salary' type='Number' ref={userSalary}/>
                        </div>
                    </Form>
                    <div>
                        <Button type="submit">Create Employee</Button>
                    </div>	
				</form>
			</Section>
            </>
        }
     </Container>
    )
}