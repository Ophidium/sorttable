import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql `CREATE TABLE sheet1 (
    id int(11) NOT NULL,
   Name  varchar(27) DEFAULT NULL,
)` ;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}