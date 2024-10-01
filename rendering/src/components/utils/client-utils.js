import "client-only"
const clientSideFunction = () => {
    console.log(`use window object use local storage`)
    return "client result";
}

export default clientSideFunction;