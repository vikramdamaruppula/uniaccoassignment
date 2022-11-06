import {IoIosArrowDropright} from 'react-icons/io'
import './index.css'

const Buttons = () => (
  <div className="button-container-1">
    <div className="button-top">
      <button type="button" className="button1">
        Dates
      </button>
      <button type="button" className="button1">
        Group sites{' '}
      </button>
      <button type="button" className="button1">
        more filters{' '}
      </button>
    </div>
    <div>
      <hr className="horizontal" />
    </div>

    <div className="button-top">
      <button type="button" className="button-2">
        great for groups{' '}
      </button>
      <button type="button" className="button-2">
        family{' '}
      </button>
      <button type="button" className="button-2">
        friends{' '}
      </button>
      <button type="button" className="button-2">
        animals{' '}
      </button>
      <button type="button" className="button-2">
        arts{' '}
      </button>
      <button type="button" className="button-2">
        baking
      </button>
      <button type="button" className="button-2">
        cooking{' '}
      </button>
      <button type="button" className="button-2">
        drinks
      </button>
      <button type="button" className="button-2">
        dance
      </button>
      <IoIosArrowDropright />
    </div>
  </div>
)

export default Buttons
