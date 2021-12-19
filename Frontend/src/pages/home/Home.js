// tools
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataHome } from "../../redux/slice/homeSlice";




// function component
const Home = () => {
  const getData = useSelector((state) => state.home);
  const { data } = getData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataHome());
  }, [dispatch]);
  return (
    <div>
      <h1>home..</h1>
      <Link to="/todo">todoooooo</Link>
      {data.map((v) => {
        return (
          <div className={{ width: "100%", height: "700px" }}>
            <h2>{v.title}</h2>
            <img
              alt={v.title}
              src={v.img}
              className={{ width: "100%", height: "300px"}}
            />
            {/* <h4>{v.desc}</h4> */}
          </div>
        );
      })}
    </div>
  );
};



export default Home;
