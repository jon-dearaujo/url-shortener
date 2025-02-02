import { NextRequest } from 'next/server';
import { loadFromShortUrlHash } from '../../../lib/shorturls';
import { redirect } from 'next/navigation';

type Params = {
  params: Promise<{ hash: string }>;
};

export async function GET(req: NextRequest, { params }: Params) {
  const url = loadFromShortUrlHash((await params).hash);
  if (url) {
    return redirect(url.fullUrl);
  }
  return redirect('/_not-found');
}
