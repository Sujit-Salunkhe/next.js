import Comments from "./data";
import { redirect } from "next/navigation";

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")
    const filteredComments = query ? Comments.filter(comments=> comments.comment.includes(query)) :
    Comments
    return Response.json(filteredComments)
}
export async function POST(request) {   
  const comment = await request.json();
  const newcomment = {
    id: Comments.length + 1,
    text: comment.text,
  };
  Comments.push(newcomment);
  return Response.json(JSON.stringify(newcomment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
