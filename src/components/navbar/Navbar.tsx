import { Link } from 'react-router-dom'
import './navbar.scss'
import menu from '/menu.svg'
import profile from '/profile.svg'
import logo from '/xpageLogo.svg'

const Navbar = () => {
	
	return (
		<>
			<nav className='navigation'>
				<img className='menuMobile' src={menu} alt='userPhoto'/>
				<Link className='navbarBtn' to='/'>
					<img src={logo} alt='logo'/>
				</Link>
				<section className='menu'>
					<a href='#cards'>Играть</a>
					<Link to='#'>Смотреть</Link>
          <a href='#learn'>Учиться</a>
					<Link to='#'>Мероприятия</Link>
			</section>
			</nav>
			<section className='navMenu'>
				<p><img src={menu} alt='userPhoto'/> меню</p>
				<div className='profile'>
					<p>Павел О.</p>
					<img src={profile} alt='userPhoto'/>
				</div>
			</section>
		</>
	)
}

export default Navbar