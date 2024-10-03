import { Metadata } from "next";
export async function generateMetadata({ params }) {
  const Title =  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productid}`)
    }, 100)
  })
  return {
    title: `Product ${Title}`,
  };
}
export default function productDetails({ params }) {
  return <h1>Product Details {params.productid}</h1>;
}
