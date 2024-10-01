import fs from 'fs'
export const ServerComponentTwo = () => {
    fs.readFileSync("src/components/server-component.js","utf-8")
    return <h1  className='text-white'>Server Component Two</h1>
}


