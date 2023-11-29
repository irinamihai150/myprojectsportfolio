import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { linkedinLink, githubLink, emailLink } from "./links"
import me from "./images/me.jpg"

const Contact = () => {
	const email = "irinamihai150@gmail.com"

	// const scrollToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: "smooth",
	// 	})
	// }

	return (
		<Col className='py-8 mx-4 my-4'>
			<Row className='max-w-screen-2xl mx-auto ml-8'>
				<h2 className=''>Get in touch</h2>

				<Row>
					<Col xs={12} md={6}>
						<img src={me} alt='girl' className='w-100' />
					</Col>
					<Col xs={12} md={6} className='d-flex justify-content-center ml-20'>
						<div className='text-black text-xl mt-10'>
							<p className='mb-2 font-bold hover:text-red-500'>Address</p>
							<p className='mb-2'>Birmingham</p>
							<p className='mb-2'>United Kingdom</p>
							<p className='mb-2 font-bold hover:text-red-500'>Email</p>
							<p className='mb-2 pop-outin'>{email}</p>
							<p className='font-bold mt-6 hover:text-red-500'>Find me</p>
							<div className='flex mt-2'>
								<a
									className='ml-4 hover:text-red-500'
									href={linkedinLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaLinkedin size={32} />
								</a>
								<a
									className='ml-2 hover:text-red-500'
									href={githubLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaGithub size={32} />
								</a>
								<a
									className='ml-2 hover:text-red-500'
									href={emailLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaEnvelope size={32} />
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Row>
			<footer className='mt-4'>
				<p className='mb-0'>&copy;{new Date().getFullYear()} Irina Mihai</p>
				{/* <FaArrowUp
					size={24}
					onClick={() => scrollToTop()}
					className='cursor-pointer'
				/> */}
			</footer>
		</Col>
	)
}

export default Contact
