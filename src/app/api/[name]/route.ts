import { NextRequest } from 'next/server';

type Params = { params: Promise<{ name: string }> };

export async function GET(request: NextRequest, { params }: Params) {
  return Response.json({ message: `Hey, ${(await params).name}` });
}
