import { NextResponse } from 'next/server';
 
export async function GET() {
 const data ={
    name : "shripal"
 }
 
  return NextResponse.json({ data });
}