import {BsGlobe, BsList} from 'react-icons/bs'
import {IoMdContact} from 'react-icons/io'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
      alt="logo"
      className="image"
    />
    <div className="main-container">
      <div className="para">
        <p> Become a part</p>
      </div>
      <div className="globe">
        <BsGlobe />
      </div>
      <div className="bottom">
        <button type="button" className="button">
          <BsList />
          <IoMdContact />
        </button>
      </div>
    </div>
  </nav>
)

export default Header
