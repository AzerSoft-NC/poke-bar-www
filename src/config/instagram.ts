/** Recent posts from @pokebar_cocotiers (static thumbs under src/assets/insta/). */
export const instagramPosts = [
  { code: 'DdmpqOZjQIU', file: '01-DdmpqOZjQIU.jpg', isVideo: false },
  { code: 'DdUoH4XjTm9', file: '02-DdUoH4XjTm9.jpg', isVideo: false },
  { code: 'DdPefAklAbf', file: '03-DdPefAklAbf.jpg', isVideo: false },
  { code: 'Dc-htb5iVkH', file: '04-Dc-htb5iVkH.jpg', isVideo: true },
  { code: 'DcQGKh-FheL', file: '05-DcQGKh-FheL.jpg', isVideo: true },
  { code: 'Db4QGz5iX3x', file: '06-Db4QGz5iX3x.jpg', isVideo: true },
  { code: 'DbmOgLTmKOX', file: '07-DbmOgLTmKOX.jpg', isVideo: false },
  { code: 'Da1TZoCjJku', file: '08-Da1TZoCjJku.jpg', isVideo: false },
  { code: 'DammyrDGmCX', file: '09-DammyrDGmCX.jpg', isVideo: true },
  { code: 'DaRQWZpDRi9', file: '10-DaRQWZpDRi9.jpg', isVideo: true },
  { code: 'DZ_Os6kjo-O', file: '11-DZ_Os6kjo-O.jpg', isVideo: false },
  { code: 'DZqoh8AjUpU', file: '12-DZqoh8AjUpU.jpg', isVideo: true },
  { code: 'DZYm0-mju08', file: '13-DZYm0-mju08.jpg', isVideo: false },
  { code: 'DYx-7TiDGNQ', file: '14-DYx-7TiDGNQ.jpg', isVideo: false },
  { code: 'DYdZEQrlIoG', file: '15-DYdZEQrlIoG.jpg', isVideo: false },
  { code: 'DYA9Htsjoni', file: '16-DYA9Htsjoni.jpg', isVideo: true },
  { code: 'DXacB3LiLHx', file: '17-DXacB3LiLHx.jpg', isVideo: true },
  { code: 'DXIaTYdiUDP', file: '18-DXIaTYdiUDP.jpg', isVideo: false },
] as const;

export type InstagramPost = (typeof instagramPosts)[number];

export function instagramPostHref(code: string): string {
  return `https://www.instagram.com/p/${code}/`;
}
