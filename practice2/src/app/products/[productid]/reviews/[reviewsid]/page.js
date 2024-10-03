
export default function reviewsDeatils ({params}){
     function randomNumber(count) {
        return Math.floor(Math.random() * count)
    }
    const  random = randomNumber(3)
    if(random === 1){
        throw new Error("review error2")
    }
    return <h1>Review {params.productid} for Product{params.reviewsid }</h1>
}   