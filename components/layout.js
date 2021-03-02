import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from './utils.module.css';

export const name = 'Alec Flatness';

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content='Learn how to build a personal website using Next.js' />
      <meta property='og:image' content={`http://og-image.vercel.app/${encodeURI(name)}png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
      <meta name='og:title' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src='/images/profile_pic.jpg'
            className={utilStyles.borderCircle}
            height={150}
            width={150}
            alt={name}
            />
          {/* <p>Just like the web, you will never see and use all available developer frameworks. But that doesn't stop one from exploring...</p> */}
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <h3>Full-stack Software Engineer</h3>
          <br/>
          <div  className={styles.buttonHdr}>
            <div>
              <Link href='http://linkedin.com/in/aflatness/'>
                <a target='_blank'><button className={utilStyles.emailBtn}>LinkedIn</button></a>
              </Link>
            </div>
            <div>
              <Link href='mailto:aflatness@gmail.com'>
                <button className={utilStyles.emailBtn}>Email me</button>
              </Link>
            </div>
            <div>
              <Link href='http://github.com/aflatness'>
                <a target='_blank'><button className={utilStyles.emailBtn}>Github</button></a>
              </Link>
            </div>
          </div>

        </>
      ) : (
        <>
          <Link href='/'>
            <a>
              <Image
                priority
                src='/images/profile_pic.jpg'
                className={utilStyles.borderCircle}
                height={100}
                width={100}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href='/'>
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    {!home && (
      <div className={styles.backToHome}>
        <Link href='/'>
          <a><span>&#8592;</span> Back to home</a>
        </Link>
      </div>
    )}
    <main>{children}</main>
    <br />
    <div className={styles.copyright}>
      <span>&#169; 2021</span>Made with love by Alec Flatness
    </div>
  </div>
);

export default Layout;