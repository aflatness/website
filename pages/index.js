import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { name } from '../components/layout';
import utilStyles from '../components/utils.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section id={utilStyles.infoSection} className={utilStyles.aboutBlock}>
        <div className={utilStyles.infoBlock}>
          <h1 className={utilStyles.infoTitle}>About Me</h1>
          <p>I'm Alec Flatness, a 27 year-old software developer that loves to work on full-stack web applications. I create whatever comes to mind, whether it's designing a dynamic, beautiful front-end, or architeching a well organized, responsive back-end. Currently I reside in stunning Denver, Colorado, but frequently travel back to the Bay Area of California to visit friends and family.</p>
          <p>Expressing myself is one of my greatest traits, and previously being a musician has taught me how to push the boundry of one's creative mind. I'm continuing to learn new tools and frameworks, and strive to make any combination of tools work together to create useful, revolutionary products.</p>
        </div>
        <div className={utilStyles.profileContainer}>
          <Image
            priority
            src='/images/profile_pic.jpg'
            height='350em'
            width='stetch'
            alt='ProfilePic'
          />
        </div>
      </section>
      <section id={utilStyles.infoSection}>
        <div className={utilStyles.infoBlock}>
          <h1 className={utilStyles.infoTitle}>Skills</h1>
          <div className={utilStyles.skillBlock}>
            <div className={utilStyles.skillRow}>
              <div>Javascript {'&'} React</div>
              <br />
              <LinearProgress variant="determinate" value={90} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>MongoDB with Mongoose</div>
              <br />
              <LinearProgress variant="determinate" value={80} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>Express {'&'} Node.js</div>
              <br />
              <LinearProgress variant="determinate" value={84} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>HTML {'&'} CSS</div>
              <br />
              <LinearProgress variant="determinate" value={78} />
            </div>
            <div className={utilStyles.skillRow}>
              <div>Amazon Web Services</div>
              <br />
              <LinearProgress variant="determinate" value={70} />
            </div>
          </div>
        </div>
        <div className={`${utilStyles.infoBlock} ${utilStyles.techBlock}`}>
          <h1 className={utilStyles.infoTitle}>Technologies</h1>
          <div className={utilStyles.techRow}>
            <b>Front-end:</b> JavaScript, React.js, HTML5, CSS3, Next.js, Vue.js
          </div>
          <div className={utilStyles.techRow}>
            <b>Back-end:</b> Node.js, Express, MongoDB, PostgresSQL, MySQL
          </div>
          <div className={utilStyles.techRow}>
            <b>Tools:</b> NPM, Webpack, Jest, Mocha, AWS EC2 & S3, Docker, Heroku, NGINX
          </div>
          <div className={utilStyles.techRow}>
            <b>Techniques:</b> Git Workflow, Agile development, Test Driven Development
          </div>
        </div>
      </section>
      <section id={utilStyles.infoSection} className={utilStyles.projectBlock}>
        <div className={utilStyles.infoBlock}>
          <h1 className={utilStyles.infoTitle}>Projects</h1>
          <div className={utilStyles.project}>
            <Link href='/projects/moodlist'><div className={`${utilStyles.infoTitle} ${utilStyles.projectLink}`}>MoodList</div></Link>
            <br />
            <Image
              src='/images/moodlist.jpg'
              priority
              height='281em'
              width='450em'
              alt='MoodList'
              />
          </div>
          <div className={utilStyles.project}>
            <Link href='/projects/fakeAir-bnb'><div className={`${utilStyles.infoTitle} ${utilStyles.projectLink}`}>FakeAir-bnb</div></Link>
            <br />
            <Image
              src='/images/fakeAir-bnb.jpg'
              priority
              height='281em'
              width='450em'
              alt='FakeAir-bnb'
              />
          </div>
        </div>
      </section>
      {/*
        <div className={utilStyles.infoBlock}>
          <h2>Links</h2>
          <h3>Projects</h3>
          <Link href='/projects/moodlist'>
              <button className={utilStyles.appBtn}>MoodList</button>
          </Link>
          <br />
          <Link href='/projects/fakeAir-bnb'>
            <button className={utilStyles.appBtn}>FakeAir-bnb</button>
          </Link>
        </div>
      </section> */}
    </Layout>
  )
}