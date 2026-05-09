import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
  const title = "la maison jungle"
  return(
    <div className='banner'>
        <img className='banner-logo' src={logo} alt='la maison jungle' />
        <h1 className="banner-title">{title}</h1>
    </div>
  ) 
}

export default Banner