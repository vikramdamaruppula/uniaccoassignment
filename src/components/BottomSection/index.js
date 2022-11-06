import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io'
import {BsHeartFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import './index.css'

const BottomSection = () => (
  <div className="bottom-main-container">
    <div className="bottom-top-section">
      <p> Top Sellers</p>
      <div className="bottom-section-inner">
        <p className="para2"> Show(107)</p>
        <div className="icons">
          <IoIosArrowDropright />
          <IoIosArrowDropleft />
        </div>
      </div>
    </div>

    <div className="container-bottom-all">
      <div className="card-container-bottom ">
        <div className="image-part first-bottom">
          <div className="icon">
            <BsHeartFill />
          </div>
        </div>

        <div className="bottom-content-container">
          <div className="star-content">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p className="rating"> 4.92</p>
            <p className="description"> (3387) czhec Republic</p>
          </div>
          <div className="last">
            <p className="description"> The plague doctor of </p>
            <p className="description"> prague-halloween-edition</p>
            <p>
              <span className="rating"> From ₹1,323/ </span> person
            </p>
          </div>
        </div>
      </div>

      <div className="card-container-bottom ">
        <div className="image-part second-bottom">
          <div className="icon">
            <BsHeartFill />
          </div>
        </div>

        <div className="bottom-content-container ">
          <div className="star-content">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p className="rating"> 4.93</p>
            <p> (2302) poland</p>
          </div>
          <div className="last">
            <p className="description"> solve the mystery escape </p>
            <p className="description"> Room also with Halloween</p>
            <p>
              <span className="rating"> From ₹1,272/ </span> person
            </p>
          </div>
        </div>
      </div>

      <div className="card-container-bottom ">
        <div className="image-part third-bottom">
          <div className="icon">
            <BsHeartFill />
          </div>
        </div>

        <div className="bottom-content-container">
          <div className="star-content">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p className="rating"> 4.92</p>
            <p> (3387) czhec Republic</p>
          </div>
          <div className="last">
            <p className="description"> Murderer mystery escape </p>
            <p className="description"> Room game perfect for</p>
            <p>
              <span className="rating"> From R1,323/ </span> person
            </p>
          </div>
        </div>
      </div>

      <div className="card-container-bottom ">
        <div className="image-part fourth-bottom">
          <div className="icon">
            <BsHeartFill />
          </div>
        </div>

        <div className="bottom-content-container">
          <div className="star-content">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p className="rating"> 4.91</p>
            <p> (2590) spain</p>
          </div>
          <div className="last">
            <p className="description"> No spain No game </p>
            <p className="description"> Fabulous Game</p>
            <p>
              <span className="rating"> From ₹1,298/ </span> person
            </p>
          </div>
        </div>
      </div>

      <div className="card-container-bottom ">
        <div className="image-part fifth-bottom ">
          <div className="icon">
            <BsHeartFill />
          </div>
        </div>

        <div className="bottom-content-container">
          <div className="star-content">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p className="rating"> 4.75</p>
            <p> (225) Portugal</p>
          </div>
          <div className="last">
            <p className="description"> The circus factory </p>
            <p>
              <span className="rating"> From R1,323/ </span> person
            </p>
          </div>
        </div>
      </div>

      <div className="card-container-bottom ">
        <div className="image-part sixth-bottom">
          <div className="icon">
            <BsHeartFill />
          </div>
        </div>

        <div className="bottom-content-container">
          <div className="star-content">
            <div className="star-icon">
              <AiFillStar />
            </div>
            <p className="rating"> 4.92</p>
            <p> (148) United kingdom</p>
          </div>
          <div className="last">
            <p className="description"> Spannades murderer </p>
            <p className="description"> Mystery spiel</p>
            <p>
              <span className="rating"> From ₹1,954/ </span> person
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BottomSection
