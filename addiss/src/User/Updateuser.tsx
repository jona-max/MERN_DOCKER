import React, {useState, useEffect} from  'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch , useSelector} from 'react-redux';
import {updateEmployee} from '../redux/actions/employees';
import { stater } from '../redux/types';

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
const Label = styled.label`
    font-weight: bolder;
`
const Select = styled.select`
    width: 100%;
    padding: 0.5em 1em;
    outline: none;
    border-radius: 3px;
    margin: 1em;
    border: 2px solid rgb(16, 168, 156);
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

type employeeId = {
    empId: string
}

export const Updateuser = () => {
    let {empId} = useParams<employeeId>();
    const [data, setData] = useState(
        {
            fullName: "",
            birthYear: "",
            gender: "",
            salary: ""
        }
    );

    const [show , setShow] = useState(false)

    const dispatch = useDispatch();
    const employee = useSelector((state : stater) => state.updateEmployee.employee);
    const loading = useSelector((state : stater) => state.updateEmployee.loading);
	const error = useSelector((state : stater) => state.updateEmployee.error);

    useEffect(() => {
		const fetchEmployee = async () => {
			try {
				const responseData = await fetch(
					`http://localhost:5000/api/user/single/${empId}`
				);
                const fileJson = await responseData.json();
				if(fileJson.success) {
					setData(fileJson.employee)
				}
			} catch (err) {}
		};
		fetchEmployee();
	}, [empId]);

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData((data) => { 
            return {
                ...data, fullName: event.target.value 
            }
        });
    };
    const onChangeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData((data) => { 
            return {
                ...data, salary: event.target.value 
            } 
        });
    };
    const onChangeBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData((data) => { 
            return {
                ...data, birthYear: event.target.value 
            }
        });
    };
    
    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData( (data) => { 
            return { ...data, gender: event.target.value }});
    };

    const onUpdateHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
            dispatch(updateEmployee(data))
            setShow(true)
		} catch (err) {}
	};
    return (
            <Container>
                { show && employee && !loading && !error &&
                <ModalContainer>
                    <Modal >
                        <Title>Employee Created Successfully</Title>
                        <NavLink to='/' style={{
                            background: "hsl(136, 65%, 51%)",
                            border: "none",
                            color: "white",
                            fontSize: "1em",
                            margin: "1em",
                            padding: "0.5em 1em",
                            borderRadius: "3px",
                            textAlign: "center",
                            textDecoration: 'none'
                        }} onClick={() => setShow(false)}>
                            Okay
                        </NavLink>
                    </Modal>
                </ModalContainer>
            }
            {!show && 
            <>
            <Title> Update an Employee </Title>
                {data && 
                    <Section>
                        
                        <form onSubmit={onUpdateHandler}>
                            <Form>
                            <div>
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id='fullName' type='text' onChange={onChangeName} value={data.fullName} />
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
                                    onChange={onChangeSelect}
                                >
                                    <option>None</option>
                                    <option >Male</option>
                                    <option>Female</option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="birthYear">Birth Year</Label>
                                <Input id='birthYear' type='date' onChange={onChangeBirth} value={data.birthYear}/>
                            </div>
                            <div>
                                <Label htmlFor="salary">Salary</Label>
                                <Input id='salary' type='Number' onChange={onChangeSalary} value={data.salary}/>
                            </div>
                            </Form>
                            <div> 
                                <Button type="submit">Update Employee</Button>
                                <Button> <NavLink style={{textDecoration: 'none', color: 'inherit'}} to='/'>Cancel</NavLink></Button>
                            </div>	
                        </form>
                    </Section>
                }
            </>
             }
                 
            </Container>
    )
}