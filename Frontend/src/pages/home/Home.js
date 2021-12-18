// tools
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getDataHome } from "../../redux/slice/homeSlice"
const Home=()=> {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getDataHome());
    }, [dispatch]);
    return (
        <div>
            <h1>home..</h1>
            
        </div>
    )
}

export default Home
