import {Link} from 'react-router-dom'
import './index.css'

const Aside = () => (
  <div className="aside-sec-container">
    <ul className="tabs-lists">
      <Link to="/products" className="links">
        <li className="tab-item">Products</li>
      </Link>
      <Link to="/demo_script" className="links">
        <li className="tab-item">Demo Script</li>
      </Link>
      <Link to="/customers" className="links">
        <li className="tab-item">Customers</li>
      </Link>
      <Link to="/sales_team" className="links">
        <li className="tab-item">Sales Team</li>
      </Link>
      <Link to="/demos" className="links">
        <li className="tab-item">Demos</li>
      </Link>
      <Link to="/" className="links">
        <li className="tab-item">Settings</li>
      </Link>
    </ul>
    <hr className="vertical-line" />
  </div>
)

export default Aside
