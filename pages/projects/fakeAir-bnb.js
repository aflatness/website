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
        <title>FakeAir-bnb</title>
      </Head>
      <h1 className={utilStyles.headingXl}>
        <a href='https://fakeAir-bnb.herokuapp.com' target='_blank' >
          FakeAir-bnb
        </a>
      </h1>
      <div className={utilStyles.headingSm}>A full-stack application project, mocking an Airbnb listing page for 20 different home.</div>
      <div className={utilStyles.headingSm}> Utilizing Google Maps JS API and React-Bootstrap for a dynamic, responsive front-end, with Express, Node.JS, and Mongoose hosting the server and data handling.</div>
      <div className={utilStyles.gif}>
        <Image>

        </Image>
      </div>
    </Layout>
    )
}