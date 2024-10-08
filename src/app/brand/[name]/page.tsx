import Image from 'next/image';
import Link from 'next/link';

import { createAsyncCaller } from '#server/routers';
import { LikeButton } from '#entities/brand';
import * as styles from './styles.css';

export default async function Brand({
  params: { name },
}: {
  params: { name: string };
}) {
  const trpc = await createAsyncCaller();
  const product = await trpc.brand.getBrandByName({
    name_eng: name,
  });

  const {
    id,
    name: name_kor,
    description,
    logo_url,
    website_url,
    likes_count,
    background_image_url,
  } = product;

  return (
    <div>
      <div className={styles.background}>
        <Image
          src={background_image_url ?? ''}
          fill
          sizes="100vw"
          alt="매장 이미지"
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.avatarContainer}>
            <Image
              src={logo_url ?? ''}
              width={0}
              height={0}
              alt="로고 이미지"
              className={styles.avatar}
            />
          </div>

          <div className={styles.info}>
            <div className={styles.name}>{name_kor}</div>
            <div className={styles.likes}>
              <span className={styles.like}>관심</span>
              <span>{likes_count}</span>
            </div>

            <LikeButton brand_id={Number(id)} />
          </div>

          <div className={styles.action}>
            <Link href={website_url ?? ''} className={styles.link}>
              방문하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
