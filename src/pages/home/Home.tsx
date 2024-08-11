import { Cards, Intro, Learn } from '../../components'
import './home.scss'

function Home() {

	return (
		<section className='homeSection'>
			<Intro/>
			<section className='letsPlay'>
				<h2>Играй</h2>
				<p>в раздел <img src='/arrowIntroOrange.svg' alt='arrow'/></p>
			</section>
			<Cards/>
			<Learn/>
		</section>
	);
}

export default Home;
