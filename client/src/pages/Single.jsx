import "../assets/css/single.css"
import SideBar from "../components/SideBar"
import SinglePost from "../components/SinglePost"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <SideBar/>
    </div>
  )
}
