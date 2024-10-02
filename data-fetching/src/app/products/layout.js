import axios from "axios"

const layout = async ({children}) => {
    const {data} = await axios.get("http://localhost:3001/products");
    console.log(data)
  return (
    <>
      {children}
    </>
  )
}

export default layout
