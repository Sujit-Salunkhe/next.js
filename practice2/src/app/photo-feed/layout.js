import "./styles.css"
export default function Layout(props){
    return (
        <>
        {props.model}
        {props.children}
        </>
    )
}