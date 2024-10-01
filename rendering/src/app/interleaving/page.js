import {ServerComponent} from "@/components/server-component";
import { ClientComponent } from "@/components/client-server-one";
const page = () => {
  return (
    <>
    <h1>interleavingPage </h1>  
    {/* <ServerComponent/>  */}
    <ClientComponent/>
    </>
  )
}

export default page
