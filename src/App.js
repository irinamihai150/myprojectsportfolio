import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import Header from "./Header"
import Contact from "./Contact"
import Projects from "./Projects"
import mylogo from "./images/mylogo.jpg"

function App() {
	return (
		<Router>
			<div>
				<Navbar
					bg='light'
					expand='lg'
					className='d-flex justify-content-between'
				>
					<Navbar.Brand>
						<img
							src={mylogo}
							alt='Logo'
							height='60'
							className='d-inline-block align-top rounded'
						/>
						My Portfolio
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link as={Link} to='/header'>
								About Me
							</Nav.Link>
							<Nav.Link as={Link} to='/projects'>
								Projects
							</Nav.Link>
							<Nav.Link as={Link} to='/contact'>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Routes>
					<Route path='/header' element={<Header />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
