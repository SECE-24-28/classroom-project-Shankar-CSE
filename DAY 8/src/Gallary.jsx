import { Link } from "react-router-dom"

const Gallary = () => {
  return (
   <div>

        <ul>
            <li><Link to="/posts/1">post 1</Link></li>
            <li><Link to="/posts/2">post 2</Link></li>
            <li><Link to="/posts/3">post 3</Link></li>
            <li><Link to="/posts/4">post 4</Link></li>
           
        </ul>

        <h1 className="flex justify-center items-center h-screen">welcome to Gallary page </h1>
        
    </div>
  )
}
export default Gallary