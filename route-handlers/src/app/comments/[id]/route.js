
import Comments from '../data'


export async function GET(_request,{params}){
    const comment = Comments.find(comment => comment.id === parseInt(params.id))
    return  Response.json(comment)
}

export async function PATCH(request,{params}){
    const body = await request.json()
    const {comment} = body;
    console.log(body)
    const index = Comments.findIndex(comment => comment.id === parseInt(params.id))
    Comments[index].comment = comment;
    
    return Response.json(Comments[index])
}

export  async function DELETE(request,{params}){
    const index = Comments.findIndex(comment => comment.id === parseInt(params.id))
    const deletedComment = Comments[index]
    Comments.splice(index,1)
    console.log(Comments)
    // const new_comments = Comments.filter(comment => comment.id !== parseInt(params.id))
    return Response.json(deletedComment)  
}