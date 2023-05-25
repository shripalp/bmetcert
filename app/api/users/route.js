import { NextResponse } from 'next/server';
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    console.log("and the id is:", searchParams)
    const id = searchParams.get('id');
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)

  
  const data = await res.json();
    

 
  return NextResponse.json({ data });
}