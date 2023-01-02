import './index.css'
import Aside from '../Aside'
import Header from '../Header'
import UserDetails from '../UserDetails'

const Home = () => (
  <div className="App-container">
    <Header />
    <div className="main-section-container">
      <Aside />
      <UserDetails />
    </div>
  </div>
)

export default Home
