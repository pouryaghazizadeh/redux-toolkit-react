// action types
import homeData from "../../../../Backend/data/homeData";
// tools
import axios from "axios"



export const getHomeData = async()=>{
    try{
        const { data } = await axios.get("http://localhost:6600/")
        

    }catch(err){

    }


}