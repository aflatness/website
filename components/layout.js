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
      {/* <link href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' rel='stylesheet' /> */}
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>
      <meta name='description' content="Alec Flatness' website and porfolio"/>
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <h1 className={utilStyles.heading2Xl}>Hello,{'   '}
          <div className={utilStyles.headingXl}>I'm Alec Flatness</div></h1>
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
    <footer className={styles.copyright}>
      <div className={styles.socialBtns}>
        <Link href='http://github.com/aflatness'>
          <a target='_blank'>
            <button className={styles.emailBtn}>
              <Image
                priority
                src='/images/github.png'
                className={utilStyles.logo}
                height={20}
                width={20}
                alt='github'
                />
              {' '}
              Github
            </button>
          </a>
        </Link>
        <Link href='http://linkedin.com/in/aflatness/'>
          <a target='_blank'>
            <button className={styles.emailBtn}>
              <Image
                  priority
                  src='/images/linkedin.png'
                  className={utilStyles.logo}
                  height={20}
                  width={20}
                  alt='linkedin'
                  />{' '}
                LinkedIn
            </button>
          </a>
        </Link>
      </div>
      <Link href='mailto:aflatness@gmail.com'>
        <div id={styles.footer_email}>
          <img id={styles.email_icon} src='/images/email.svg'/>
          <div id={styles.email_address}>aflatness@gmail.com</div>
        </div>
      </Link>
      <div id={styles.footer_Copyright}>
        <span> &#169; 2021</span> Alec Flatness
      </div>
    </footer>
  </div>
);

export default Layout;