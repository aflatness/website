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
      <h1 className={utilStyles.appTitle}>
        <a href='https://moodlist-heroku.herokuapp.com' target='_blank' >
          MoodList
        </a>
      </h1>
      <div className={utilStyles.appCont}>
        <ul className={utilStyles.headingMd}>
          <li>MoodList creates a curated Spotify playlist based a Spotify users current mood and their top 50 listened to tracks.</li>
          <li>Offers ability to save the curated playlist to the user's profile, as well as a viewable history of use, to access previously created playlists.
          </li>
          <li>Stores the users session for easy log in, valid throughout the access token authorization.
          </li>
          <div>
            <h3><u>Technologies used:</u></h3>
            React, React-Bootstrap, Spotify API, Express, Node.js, MongoDB Cloud Atlas, Mongoose, Heroku
          </div>
        </ul>
        <div className={utilStyles.gif}>
          <Image
              priority
              src='/images/moodlist.gif'
              height='440em' // 330
              width='800em' //600
              alt='MoodList'
          />
        </div>
      </div>

    </Layout>
    )
}