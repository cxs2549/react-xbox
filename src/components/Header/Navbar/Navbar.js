import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ogLogo from '../../../assets/og-logo.png'
import twentyImg from '../../../assets/20.png'
import { Link } from 'react-router-dom'

const StyledWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	background-color: var(--brandBlack);
	@media (min-width: 640px) {
		border-bottom: 1px solid var(--borderColor);
	}
`

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	width: 100%;
	height: 100%;
	max-width: var(--maxWidth);
	min-width: 350px;
	margin: 0 auto;
	position: relative;
	@media (min-width: 768px) {
		padding: 0 1.5rem;
	}
	@media (min-width: 1600px) {
		padding: 0;
	}

	a {
		font-size: 14px;
		color: white;
		display: flex;
		align-items: center;
		text-decoration: none;
		white-space: nowrap;
		margin-left: 0.5em;
		transition: color 400ms;
		@media (min-width: 1536px) {
			font-size: 1rem;
		}
		&:hover {
			color: var(--brandgreenLight) !important;
		}
		ion-icon {
			margin-left: 0.5em;
		}
	}

	#left {
		#icons {
			@media (min-width: 768px) {
				display: none;
			}
		}
		#twentyList {
			display: none;
			align-items: center;
			text-transform: capitalize;
			@media (min-width: 768px) {
				display: flex;
			}
		}
		#twenty {
			display: none;
			height: 100%;
			margin-right: 1rem;
			img {
				height: 30px;
				margin-top: 2px;
			}
			@media (min-width: 768px) {
				display: block;
				margin-left: 100px;
				padding-left: 2rem;
			}
		}

		#firstIcon {
			margin-top: 6px;
		}
	}
	#links {
		position: relative;
		margin-left: 0.5rem;
		@media (min-width: 1536px) {
			margin-left: 1rem;
		}
		&::before {
			content: "";
			position: absolute;
			left: -0.75rem;
			top: 50%;
			transform: translateY(-50%);
			height: 200%;
			width: 1px;
			background-color: var(--borderColor);
			@media (min-width: 1536px) {
				left: -1rem;
			}
		}
	}
	ul {
		display: flex;
		text-decoration: none;
		list-style-type: none;
		li {
			text-decoration: none;
			margin-right: 1.5rem;
			display: flex;
			align-items: center;
			&:hover {
				color: var(--brandGreenLight);
			}
			&:is(:nth-child(4), :nth-child(5), :nth-child(6), :nth-child(7)) {
				display: none;
			}
			&:is(:nth-child(4), :nth-child(5), :nth-child(6)) {
				@media (min-width: 1280px) {
					display: flex;
				}
			}
			&:is(:nth-child(7)) {
				@media (min-width: 1300px) {
					display: flex;
				}
			}
			&:nth-child(8) {
				@media (min-width: 1300px) {
					display: none;
				}
			}
		}
		ion-icon {
			font-size: 16px !important;
		}
	}
	#logo {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		@media (min-width: 768px) {
			left: 1rem;
			transform: translateY(-50%);
		}
		@media (min-width: 1600px) {
			left: -8px;
		}
		img {
			max-width: 120px;
		}
	}

	#right {
		display: flex;
		align-items: center;
		#all {
			display: none;
			align-items: center;
			&:hover {
				color: var(--brandGreenLight);
			}
			@media (min-width: 1024px) {
				display: flex;
				margin-right: 1.5rem;
			}
			ion-icon {
				font-size: 16px !important;
				margin-left: 0.5em;
			}
		}
		a {
			@media (min-width: 1024px) {
				display: block;
			}
		}
		#rightIcons {
			display: flex;
			align-items: center;

			ion-icon:nth-child(2),
			ion-icon:last-child {
				margin-left: 1.5rem;
			}
		}
		a:first-child {
			display: none;
			@media (min-width: 768px) {
				display: block;
			}
		}
	}
`

const Navbar = ({ clicked }) => {
	const navLinks = [
		{ name: 'game pass', sublinks: [] },
		{ name: 'games', sublinks: [] },
		{ name: 'devices', sublinks: [] },
		{ name: 'play now', sublinks: [] },
		{ name: 'community', sublinks: [] },
		{ name: 'support', sublinks: [] },
		{ name: 'my xbox', sublinks: [] },
		{ name: 'more', sublinks: [] }
	]

	return (
		<StyledWrapper>
			<StyledNavbar>
				<div id="left">
					<div id="icons">
						<div id="firstIcon" onClick={clicked}>
							<ion-icon name="menu-outline" size="large" />
						</div>
					</div>
					<div id="twentyList">
						<div id="twenty">
							<img src={twentyImg} alt="" />
						</div>
						<div id="links">
							<ul>
								{navLinks.map((link, i) => (
									<li key={i}>
										<Link to="/" className="navLink">
											{link.name}
											<ion-icon name="chevron-down-outline" />
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div id="logo">
					<Link to="/">
						<img src={ogLogo} alt="" />
					</Link>
				</div>
				<div id="right">
					<div id="all">
						<Link to="/" className="navLink">
							All Microsoft
						</Link>
						<ion-icon name="chevron-down-outline" />
					</div>
					<div id="rightIcons">
						<NavLink to="/">
							<ion-icon name="search-outline" />
						</NavLink>
						<NavLink to="cart">
							<ion-icon name="cart-outline" />
						</NavLink>
						<NavLink to="account">
							<ion-icon name="person-outline" />
						</NavLink>
					</div>
				</div>
			</StyledNavbar>
		</StyledWrapper>
	)
}

export default Navbar
