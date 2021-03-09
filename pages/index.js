import Head from 'next/head';
import Link from 'next/link';
import Layout, { name } from '../components/layout';
import utilStyles from '../components/utils.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section id={utilStyles.infoSection}>
        <div className={utilStyles.infoBlock}>
          <h2>Skills</h2>
          <div className={utilStyles.skillBlock}>
            <div className={utilStyles.skillRow}>
              <div>Javascript {'&'} React</div>
              <LinearProgress variant="determinate" value={90} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>MongoDB with Mongoose</div>
              <LinearProgress variant="determinate" value={80} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>Express {'&'} Node.js</div>
              <LinearProgress variant="determinate" value={84} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>HTML {'&'} CSS</div>
              <LinearProgress variant="determinate" value={75} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>AWS</div>
              <LinearProgress variant="determinate" value={69} />
            </div>
          </div>
        </div>
        <div className={utilStyles.infoBlock}>
          <h1>About me</h1>
          <p>I'm Alec Flatness, a 27 year-old software developer that loves to work on full-stack web applications. I create whatever comes to mind, whether it's designing a dynamic, beautiful front-end, or architeching a well organized, responsive back-end. Currently I reside in stunning Denver, Colorado, but frequently travel back to the Bay Area of California to visit friends and family.</p>
          <p>Expressing myself is one of my greatest traits, and previously being a musician has taught me how to push the boundry of one's creative mind. I'm continuing to learn new tools and frameworks, and strive to make any combination of tools work together to create useful, revolutionary products.</p>
        </div>
        <div className={utilStyles.infoBlock}>
          <h2>Links</h2>
          <Link href='/blog'>
            <button className={utilStyles.appBtn}>Blog</button>
          </Link>
          <h3>Projects</h3>
          <Link href='/projects/moodlist'>
            <button className={utilStyles.appBtn}>MoodList</button>
          </Link>
          <Link href='/projects/fakeAir-bnb'>
            <button className={utilStyles.appBtn}>FakeAir-bnb</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}