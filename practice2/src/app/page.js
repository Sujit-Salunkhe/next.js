import Link from 'next/link'
export default function page(){
    return (
        <>
        <h1>First Page</h1>   
        <Link href="/about">About</Link>
        <br/>
        <Link href="/products">Products</Link>
        <br/>
        <Link href="/blog">blog</Link>
        </>
    )
}