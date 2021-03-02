import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../components/utils.module.css';
import layoutStyles from '../../components/layout.module.css';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Mood List</title>
      </Head>
      <h1 className={utilStyles.headingXl}>
        <a href='https://moodlist-heroku.herokuapp.com' target='_blank' >
          MoodList
        </a>
      </h1>
      <div className={utilStyles.headingMd}>MoodList creates a curated Spotify playlist based a users current mood and top 50 listened to tracks </div>
      <div className={utilStyles.gif}>
      <Image
          priority
          src='/images/moodlist.gif'
          height={339}
          width={600}
          alt='MoodList'
      />
      </div>
    </Layout>
    )
}