import React from 'react'
import {useAuth0} from "../auth/AuthProvider";
import {Link} from "react-router-dom";
import logo from '../assets/images/logo.png';
import NavItem from "../views/NavItem";
import Nav from "../views/Nav";
import Button from "../views/Button";


const NavBar = () => {
	const {isAuthenticated, login, logout} = useAuth0();

	return (
		<Nav>
			<NavItem>
				<img src={logo} width={50} alt="grabalunch-logo"/>
			</NavItem>
			{isAuthenticated && (
				<span>
                    <Link to="/">Home</Link>&nbsp;
					<Link to="/meals">Meals</Link>
					<Link to="/profile">Profile</Link>
				</span>
			)}
			<NavItem align={'end'} marginRight={'0'}>
				{isAuthenticated ?
					(<Button onClick={logout}>Log out</Button>) :
					(<Button onClick={login}>Log In / Sign Up</Button>)
				}
			</NavItem>
		</Nav>
	);
};

export default NavBar;
