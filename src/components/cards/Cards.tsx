import './cards.scss'

const Cards = () => {
    const cardsData = [
        {
            id: 1,
            image: '/card1.svg',
            title: 'Найди себе команду',
            description: 'Игры на районе - это возможность найти с новых друзей, или создать свою игру и пригласить других игроков присоединиться.'
        },
        {
            id: 2,
            image: '/card2.svg',
            title: 'Создавай команды',
            description: 'Игры на районе - это возможность найти новых друзей, или создать свою игру и пригласить других игроков присоединиться.'
        },
        {
            id: 3,
            image: '/card3.svg',
            title: 'Учавствуй в турнирах',
            description: 'Участвуйте в турнирах вместе с вашей командой. Будьте активными, побеждайте и получайте ачивки и призы от наших спонсоров.'
        }
    ];

    return (
        <section className='cardsSection'>
            {cardsData.map(card => (
                <section className='card' key={card.id}>
                    <img className='cardImageMain' src={card.image} alt='image' />
                    <section className='cardText'>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
												<button className='cardButton'>
                        	Подробнее <img src='/introArrow.svg' alt='arrow' />
                    	</button>
                    </section>
                </section>
            ))}
        </section>
    );
}

export default Cards;
