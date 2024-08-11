import { useState } from 'react'
import './intro.scss'

const Intro = () => {
    const [backgroundImage, setBackgroundImage] = useState('/intro1.webp');
		const [headerText, setHeaderText] = useState('Найди с кем поиграть в баскет');
    const [isFirstImageVisible, setIsFirstImageVisible] = useState(true);

    const buttonsData = [
        { id: 1, label: 'Играй', image: '/introArrow.svg', bgImage: '/intro1.webp', text: 'Играй и создавай команду!' },
        { id: 2, label: 'Учись', image: '/introArrow.svg', bgImage: '/intro2.webp', text: 'Играй с лучшими игроками!' },
        { id: 3, label: 'Смотри', image: '/introArrow.svg', bgImage: '/intro3.webp', text: 'Смотри и вдохновляйся!' }
    ];

    const handleButtonClick = (bgImage: string, text: string) => {
			setIsFirstImageVisible(!isFirstImageVisible);
			setTimeout(() => {
					setBackgroundImage(bgImage);
					setHeaderText(text);
			}, 500);  // Delay for smoother transition (ms)
	};

	return (
			<section className='introSection'>
					<div
							className='backgroundImage'
							style={{
									backgroundImage: `url(${backgroundImage})`,
									opacity: isFirstImageVisible ? 1 : 0,
							}}
					/>
					<div
							className='backgroundImage'
							style={{
									backgroundImage: `url(${backgroundImage})`,
									opacity: isFirstImageVisible ? 0 : 1,
							}}
					/>
					<section className='introContent'>
							<h1>{headerText}</h1>
							<section className='introButtons'>
									{buttonsData.map((button) => (
											<button
													key={button.id}
													onClick={() => handleButtonClick(button.bgImage, button.text)}
											>
													{button.label}
													<img src={button.image} alt='arrow' />
											</button>
									))}
							</section>
					</section>
			</section>
	);
};

export default Intro;