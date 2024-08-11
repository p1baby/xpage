import './learn.scss'

const filterOptions = [
	{ id: 1, label: 'Детская тренировка' },
	{ id: 2, label: 'Для начинающих' },
	{ id: 3, label: 'Стритбол' },
	{ id: 4, label: 'Выезд тренера на дом' },
	{ id: 5, label: '12 фильтров' },
];

const Learn = () => {
  
    return (
      <section className='learnSection'>
				<header>
					<h4>Учись</h4>
					<p>в раздел<img src='/arrowLearnGreen.svg' alt='arrow'/></p>
				</header>
				<section className='learnContent'>
					<section className='benefits'>
						<section className='aboutBenefits1'>
						<p>мы собрали<br></br>секции для детей<br></br>по всему городу</p>
						{/* <p>мы собрали<br></br>секции<br></br>для детей<br></br>по всему<br></br>городу</p> */}
								<section className='tags'>
										<div className="filter" >
												<p>12 секций по всему городу</p>
										</div>
								</section>
						</section>
						<section className='aboutBenefits2'>
							<p>подбери тренера<br></br>под свой уровень</p>
							<section className='tags'>
								{filterOptions.map((filter) => (
									<div className="filter" key={filter.id}>
											<p>{filter.label}</p>
									</div>
								))}
							</section>
						</section>
					</section>
					<section className='library'>
						<p>видеоуроки</p>
						<section className='libraryTopic1'>
							<img src='/learnTopic1.svg' alt='image'/>
							<section className='topic1content'>
								<p>Евгений Воронов:<br></br>«Бронзовые медали -<br></br>оценка труда нашей команды»</p>
								<div className="filter" >
									<p>26 октября</p>
								</div>
							</section>
						</section>
						<section className='libraryTopic2'>
							<p>статьи</p>
							<section className='topic1content'>
								<p>Евгений Воронов: «Бронзовые<br></br> медали - оценка труда нашей<br></br>команды»</p>
								<div className="filter" >
									<p>26 октября</p>
								</div>
							</section>
						</section>
						<section className='libraryTopic3'>
							<p>термины</p>
							<section className='topic1content'>
								<div className="filter" >
									<p>треха</p>
									<p>трехочковый бросок</p>
									<p>36 терминов</p>
								</div>
							</section>
						</section>
					</section>
				</section>
      </section>
    );
}

export default Learn;