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
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' rel='stylesheet' />
      <meta name='description' content="Alec Flatness' website and porfolio"/>
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
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <h3 className={utilStyles.headingXl}>Full-stack Software Engineer</h3>
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
                <a target='_blank'><button className={utilStyles.emailBtn}>
                  <Image
                    priority
                    src='/images/github.png'
                    className={utilStyles.logo}
                    height={20}
                    width={20}
                    alt='github'
                  />
                  {' '}Github</button></a>
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
          <a><span>&#8592;</span> Home</a>
        </Link>
      </div>
    )}
    <main>{children}</main>
    <br />
    <footer className={styles.copyright}>
      <span>&#169; 2021</span>Made with love by Alec Flatness
    </footer>
  </div>
);

export default Layout;