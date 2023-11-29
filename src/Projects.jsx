import React from "react"
import projectsData from "./projectsData"
import { Carousel, Container, Button } from "react-bootstrap"

const Projects = () => {
	return (
		<Container>
			<h2 className='text-black text-6xl mb-20 mt-8 font-bold p-8 hover:text-red-500 pop-outing'>
				Projects
			</h2>
			<Carousel>
				{projectsData.map((project, index) => (
					<Carousel.Item key={index}>
						<img
							className='d-block w-100'
							src={project.image}
							alt={`Slide ${index}`}
						/>
						<Carousel.Caption>
							<h3 className='text-2xl font-bold'>{project.title}</h3>
							<p className='text-xl mb-4 hover:bg-red-400 transition  hover:font-bold'>
								{project.description}
							</p>
							<a
								href={project.githubLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className='hover:bg-red-500 text-black center font-bold py-2 px-4 rounded mt-4'>
									Visit GitHub
								</button>
							</a>
							{project.websiteLink && (
								<a
									href={project.websiteLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button className='hover:bg-red-500 text-black center font-bold py-2 px-4 rounded mt-2'>
										Visit Website
									</Button>
								</a>
							)}
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	)
}

export default Projects
