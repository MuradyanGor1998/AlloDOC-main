import { useEffect } from "react";
import publicAPI from "./services/api/publicAPI";

function Body(params) {
  useEffect(() => {
    publicAPI.get("/users").then((res) => {
      console.log(res.data);
    });
  }, []);

  return null;
}

export default Body;
