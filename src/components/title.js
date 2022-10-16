import { Link } from "react-router-dom";
import logo from '../images/logo.webp';

function Title() {
  return (
    <div className="title">
      <Link to="/">
        <img src={logo} alt="application logo" />
      </Link>
      <h4>An Online Compendium of Pokemon</h4>
    </div>
  )
}

export default Title;