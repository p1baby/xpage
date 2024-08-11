import { Link } from 'react-router-dom'
import './footer.scss'
import ballFooter from '/ballFooter.svg'
import appstore from '/footerLinkApple.svg'
import googleplay from '/footerLinkGoogle.svg'
import qr from '/footerQr.svg'

const Footer = () => {
  
    return (
      <>
          <section className='footerSides'>
            <section className='footerTop'>
            <h5>Еще больше полезных<br></br>материалов и<br></br>видеоуроков<br></br>в нашем приложении</h5>
            <section className='footerLinkSection'>
              <Link to='/'><img src={appstore} alt='appStore'/></Link>
              <Link to='/'><img src={googleplay} alt='googlePlay'/></Link>
            </section>
          </section>
            <section className='footerLeft'>
            </section>
        </section>
        <p className='madeby'>Сделано Xpage</p>
        <img className='ball' src={ballFooter} alt='ball'/>
        <img className='qr' src={qr} alt='qr'/>
      </>
    );
}

export default Footer;