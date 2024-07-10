import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const id = request.query.id as string;
    const name = request.query.Name as string;
    if (!id || !name) throw new Error('Pet and owner names required');
    await sql`INSERT INTO sheet1 (id, Name) VALUES (${id}, ${name});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const sheet1 = await sql`SELECT * FROM sheet1;`;
  return response.status(200).json({ sheet1 });
}