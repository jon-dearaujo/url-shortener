import db from './db';
import { ShortUrl } from './type';

export const loadFromShortUrlHash = (hash: string): ShortUrl | undefined => {
  const query = db.prepare<string, ShortUrl>(
    `select * from shorturls where shortUrlHash = ?`
  );
  return query.get(hash);
};

export const save = (hash: string, fullUrl: string) => {
  const insert = db.prepare(
    'insert into shorturls (shortUrlHash, fullUrl) values (?, ?)'
  );
  insert.run(hash, fullUrl);
};
