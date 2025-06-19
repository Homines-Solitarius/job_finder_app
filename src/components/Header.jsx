import { FaBookOpen } from "react-icons/fa"
import Button from '../components/Button'
import "../styles/header.css"

const Header = () => {
  return (
      <header className="flex-center">
          <div className="brand flex-center">
              <a href="#">
                  <FaBookOpen style={{color: "white", background: "blue", padding: "10px", borderRadius: "50%"}} fontSize="50"/>
              </a>
              <h3>Open Jobs</h3>
          </div>
          <ul className="nav-links flex-center">
              <li className="link">All Blogs</li>
              <li className="link">Featured Blogs</li>
              <Button text="Join Community" color="blue" textColor="white"/>
          </ul>
    </header>
  )
}

export default Header