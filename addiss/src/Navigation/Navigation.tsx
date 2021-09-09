import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const Navbar = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
	height: 8vh;
	background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
	color: white;
	width: 100%;
`
const Nav = styled.section`
	font-weight: bolder;
	font-size: 18px;
	margin: 0px 20px;
`

export const Navigation = () => {
    return (
        <Navbar>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Nav>
					<NavLink style={{color: 'inherit', textDecoration: 'none'}} to='/'> Employees</NavLink>
				</Nav>
                <Nav>
					<NavLink style={{color: 'inherit', textDecoration: 'none'}} to='/create'>Create Employee</NavLink>
				</Nav>
			</div>
		</Navbar>
    )
}