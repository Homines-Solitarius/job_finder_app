import BlogCard from "./BlogCard"
import Button from "../components/Button";
import "../styles/hero.css"

const Hero = () => {
  return (
    <div>
      <h1>Find Your Dream Job with Ease and Confidence.</h1>
      <Button text="Search for Jobs" color="blue" textColor="white"/>
      <BlogCard/>
    </div>
  )
}

export default Hero