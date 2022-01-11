import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { layout, header, headerImage, hello, backToHome, child, copyright, socialBtns, emailBtn, footer_email, email_icon, email_address, footer_Copyright } from './layout.module.css';
import utilStyles from './utils.module.css';

export const name = 'Alec Flatness';

const Layout = ({ children, home }) => (
  <div className={layout}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      {/* <link href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' rel='stylesheet' /> */}
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>
      <meta name='description' content="Alec Flatness' software engineering website and portfolio"/>

      <meta name='twitter:card' content="summary"/>
      <meta name='twitter:title' content="Alec Flatness' portfolio"/>
      <meta name='twitter:creator' content='@AFlatMajor4'/>
      <meta name='twitter:description' content="Alec Flatness' software engineering website and portfolio"/>

      <meta name="twitter:image" content="https://www.alecflatness.com/images/profile_pic2.jpeg"></meta>
      <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Alec Flatness' portfolio"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://www.alecflatness.com/"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://www.alecflatness.com/images/profile_pic2.jpeg"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Alec Flatness' software engineering website and portfolio"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="Alec Flatness" />

      <meta itemprop="name" content="Alec Flatness' portfolio"/>
      <meta itemprop="description" content="Alec Flatness' software engineering website and portfolio"/>
      <meta itemprop="image" content="https://www.alecflatness.com/images/profile_pic2.jpeg"/>
    </Head>
    <header className={header}>
      {home ? (
        <>
          <h1 className={utilStyles.heading2Xl}>Hello,{'   '}
          <div className={utilStyles.headingXl}>World</div></h1>
          <div id={hello}>I'm Alec Flatness</div>
        </>
      ) : (
        <>
          <div className={headerImage}>
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
          </div>
          <h2 className={utilStyles.headingLg}>
            <Link href='/'>
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    {!home && (
      <div className={backToHome}>
        <Link href='/'>
          <a><span>&#8592;</span> Home</a>
        </Link>
      </div>
    )}
    <main className={child}>{children}</main>
    <footer className={copyright}>
      <div className={socialBtns}>
        <Link href='http://github.com/aflatness'>
          <a target='_blank'>
            <button className={emailBtn}>
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
            <button className={emailBtn}>
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
        <div id={footer_email}>
          <img id={email_icon} src='/images/email.svg'/>
          <div id={email_address}>aflatness@gmail.com</div>
        </div>
      </Link>
      <div id={footer_Copyright}>
        <span> &#169; 2022</span> Alec Flatness
      </div>
    </footer>
  </div>
);

export default Layout;