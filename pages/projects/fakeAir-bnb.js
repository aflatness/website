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
      <h1 className={utilStyles.appTitle}>
        <a href='https://fakeAir-bnb.herokuapp.com' target='_blank' >
          FakeAir-bnb
        </a>
      </h1>
      <div className={utilStyles.appCont}>
        <ul className={utilStyles.headingSm}>
          <li>A full-stack application project, mocking an Airbnb listing page for 20 different home. Browse by changing the ending url number, between 1-20.</li>
          <li> FakeAir-bnb utilizes Google Maps JS API and React-Bootstrap for a dynamic, responsive front-end, with Express, Node.js, and Mongoose hosting the server and data handling.</li>
          <div>
            <h3><u>Technologies used:</u></h3>
            React, React-Bootstrap, React-Router, Express, Node.js, Jest, Enzyme, MongoDB, Mongoose, Heroku, AWS EC2, S3
          </div>
        </ul>
        <div className={utilStyles.gif}>
          <Image
            priority
            src='/images/fakeair-bnb.gif'
            height={330}
            width={600}
            alt='FakeAir-bnb'
          />
        </div>
      </div>
    </Layout>
    )
}