import { serverSideFunction } from "../utils/server-utils";
import ImageSlider from "@/components/Imageslider";

export default function Server_route_page() {

  const result = serverSideFunction();
  return(
    <>
    <h1>Server Route Page</h1>
    <ImageSlider/>
    </>
  ) ;
}
