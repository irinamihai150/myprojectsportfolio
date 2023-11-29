import React from "react"
import { Container, Card, Row, Col, Image, ListGroup } from "react-bootstrap"
import banner from "./images/banner.jpg"

const Intro = () => {
	return (
		<Container>
			{/* Full-width Image */}
			<Image className='w-100 mb-4' src={banner} alt='banner' />

			{/* Bio Section */}
			<Row className='justify-content-between mb-5 mt-3'>
				<h2 className='text-black text-6xl mb-5 mt-4 font-bold hover:text-red-500 pop-outin'>
					Intro
				</h2>
			</Row>
			<Row className='flex-wrap'>
				{/* Column for Software Developer */}
				<Col xs={12} md={6}>
					<p>
						Passionate about technology and recent completion of an intensive
						11-month software development training program, specializing in web
						development. Particular interest lies in back-end and cloud
						infrastructure. Eager to bring unique perspectives and passion for
						learning to a dynamic software development team. Actively seeking
						opportunities to grow professionally and make meaningful
						contributions to innovative software projects.
					</p>
				</Col>
			</Row>

			{/* Education and Skills Section */}
			<Card>
				<Row>
					{/* Education */}
					<Col xs={12} md={6} className='mb-5'>
						<h2>Education</h2>
						<ListGroup variant='flush'>
							<ListGroup.Item className='mb-4 hover:font-bold'>
								Full Stack Software Development Code your Future, Birmingham,
								05/2022- 03/ 2023
							</ListGroup.Item>
							<ListGroup.Item className='mb-4 hover:font-bold'>
								Microsoft Certified Azure Fundamentals Learning Curve Group,
								Birmingham, 01/ 2022
							</ListGroup.Item>
							<ListGroup.Item className='mb-4 hover:font-bold'>
								BSc, Social Work, Faculty of Philosophy and Social-Political
								Sciences, Romania,06/2011
							</ListGroup.Item>
						</ListGroup>
					</Col>

					{/* Skills */}
					<Col xs={12} md={6}>
						<h2>Skills</h2>
						<ListGroup variant='flush'>
							<ListGroup.Item className='mb-4 hover:font-bold'>
								Front-end: HTML5, Javascript(ES5,ES6), React, CSS, Bootstrap,
								Responsive Web Design, Tailwind.
							</ListGroup.Item>
							<ListGroup.Item className='mb-4 hover:font-bold'>
								Back-end: Node.Js, Express.js, Postgresql, Postman.
							</ListGroup.Item>
							<ListGroup.Item className='mb-4 hover:font-bold'>
								Management: GIT, Github, Trello, Agile, Netlify, Render.
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}

export default Intro
