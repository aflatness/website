import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { name } from '../components/layout';
import utilStyles from '../components/utils.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';

import CodeIcon from '@material-ui/icons/Code';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section className={`${utilStyles.infoSection} ${utilStyles.aboutBlock}`}>
        <div className={utilStyles.infoBlock}>
          <h1 className={utilStyles.infoTitle}>About Me</h1>
          <p>I'm Alec Flatness, a 28 year-old software developer that loves to work on full-stack web applications. I create whatever comes to mind, whether it's designing a dynamic, beautiful front-end, or architeching a well organized, responsive back-end. Currently I reside in stunning Denver, Colorado, but frequently travel back to the Bay Area of California to visit friends and family.</p>
          <p>Expressing myself is one of my greatest traits, and previously being a musician has taught me how to push the boundry of one's creative mind. I'm continuing to learn new tools and frameworks, and strive to make any combination of tools work together to create useful, revolutionary products.</p>
        </div>
        <div className={utilStyles.profileContainer}>
          <Image
            priority
            src='/images/profile_pic.jpg'
            height='350em'
            width='400%'
            alt='ProfilePic'
          />
        </div>
      </section>
      <section className={utilStyles.infoSection}>
        <div className={utilStyles.infoBlock}>
          <h1 className={utilStyles.infoTitle}>Skills</h1>
          <div className={utilStyles.skillBlock}>
            <div className={utilStyles.skillRow}>
              <div>Typescript {'&'} React</div>
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
            <ComputerSharpIcon/>{': '} Typescript, React.js, HTML5, CSS3, Next.js, Vue.js, Material-UI
          </div>
          <div className={utilStyles.techRow}>
            <DnsOutlinedIcon/>{': '} Node.js, Express, MongoDB, PostgresSQL, MySQL, ElasticSearch, GraphQL
          </div>
          <div className={utilStyles.techRow}>
            <BuildOutlinedIcon /> {': '} NPM, Webpack, Jest, Mocha, AWS: EC2, S3, Lambdas, Docker, Heroku, NGINX
          </div>
          <div className={utilStyles.techRow}>
            <CodeIcon /> {': '} Git Workflow, Agile Development, Test Driven Development
          </div>
        </div>
      </section>
      <section className={`${utilStyles.projectBlock} ${utilStyles.infoSection}`}>
        <div className={utilStyles.infoBlock}>
          <h1 className={utilStyles.infoTitle}>Projects</h1>
          <div className={utilStyles.projectFlex}>
            <div className={utilStyles.project}>
              <Link href='/projects/kevinkeithmusician'>
                <div className={`${utilStyles.infoTitle} ${utilStyles.projectLink}`}>
                  Kevin Keith
                </div>
              </Link>
              <br />
              <div className={utilStyles.projImage}>
                <Link href='/projects/kevinkeithmusician'>
                  <Image
                    src='/images/kevinkeith.png'
                    priority
                    height='281em'
                    width='450em'
                    alt='Kevin-Keith'
                  />
                </Link>
              </div>
            </div>
            <div className={utilStyles.project}>
              <Link href='/projects/moodlist'>
                <div className={`${utilStyles.infoTitle} ${utilStyles.projectLink}`}>
                  MoodList
                </div>
              </Link>
              <br />
              <div className={utilStyles.projImage}>
                <Link href='projects/moodlist'>
                  <Image
                    src='/images/moodlist.jpg'
                    priority
                    height='281em'
                    width='450em'
                    alt='MoodList'
                  />
                </Link>
              </div>
            </div>
            <div className={utilStyles.project}>
              <Link href='/projects/fakeAir-bnb'>
                <div className={`${utilStyles.infoTitle} ${utilStyles.projectLink}`}>
                  FakeAir-bnb
                </div>
              </Link>
              <br />
              <div className={utilStyles.projImage}>
                <Link href='/projects/fakeAir-bnb'>
                  <Image
                    src='/images/fakeAir-bnb.jpg'
                    priority
                    height='281em'
                    width='450em'
                    alt='FakeAir-bnb'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}