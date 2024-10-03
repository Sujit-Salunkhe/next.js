

const card = ({children}) => {
    const cardstyle = {
        padding:"100px",
        margin:"10px",
        boxShadow:"0 4px 8px  0 rgba(0,0,0,0.2)",
        border:"1px solid #ddd",
        display:"flex",
        justifyContent:"center",
        alignitems:"center"
    };
    return <div style={cardstyle}>{children}</div>
}

export default card;