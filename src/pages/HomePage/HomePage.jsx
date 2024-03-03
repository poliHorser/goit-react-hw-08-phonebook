import './HomePage.css'
import img from '../../img/ajax-loader-preview.png'
const HomePage = () => {
    return (
        <section>
        <div className="HomeDiv">
            <h1 className='HomeTitle'>Welcome to PhoneBook</h1>
            <p>Please Log In to continue your work</p>
        </div>
        <div className='img-div'>
                <img src={img} alt="" className='img-home' />
            </div>
            </section>
    )
}

export default HomePage