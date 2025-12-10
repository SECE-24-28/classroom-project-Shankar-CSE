import { useParams } from "react-router-dom"

const Posts = () => {
    const {id} = useParams()

    return (
    <div className="flex flex-col justify-center items-center h-screen">

        <h1 >welcome tsdo Posts 1 page </h1>
        <br />
        <p>now you are seeing the post no : {id ? id : 0}</p>
       
    </div>
  )
}
export default Posts