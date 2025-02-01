import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { loadFromShortUrlHash, save } from '../../../../lib/shorturls';

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const hash = crypto.createHash('sha-1');
  hash.update(payload.fullUrl);
  const shortUrl = hash.digest('hex').substring(0, 10);
  try {
    const existing = loadFromShortUrlHash(shortUrl);
    if (!existing) {
      save(shortUrl, payload.fullUrl);
    }
  } catch (error) {
    console.error('error operating database', error);
    return NextResponse.error();
  }
  return NextResponse.json({ shortUrl });
}
