import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../components/utils.module.css';
import layoutStyles from '../../components/layout.module.css';

export default function KevinKeith() {
  return (
    <Layout>
      <Head>
        <title>Alec Flatness — Kevin Keith</title>
      </Head>
      <h1 className={utilStyles.appTitle}>
        <a href='https://kevinkeithmusician.com' target='_blank' >
          Kevin Keith's Website
        </a>
      </h1>
      <div className={utilStyles.appCont}>
        <div className={utilStyles.headingSm}>
          <ul>
            <li>A professional website for friend and musician Kevin Keith to help promote him as musician and expand his business as a teacher, performer, and artist</li>
            <li>Allows visitors to contact him, view upcoming events, and demo his music</li>
          </ul>
          <h3><u>Technologies used:</u></h3>
          <div>
            React, Next.js, Material-UI, Spotify Web Player, Google Calendar API
          </div>
        </div>
        <div className={utilStyles.gif}>
          <Image
            priority
            src='/images/kevinkeith.png'
            height={475}
            width={800}
            alt='Kevin-Keith'
          />
        </div>
      </div>
    </Layout>
    )
}