import Head from 'next/head';
import Link from 'next/link'
import Layout, { name } from '../components/layout';
import utilStyles from '../components/utils.module.css';

export default function Blog () {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
        <h1 className={utilStyles.heading2XL}>My Blog</h1>
        <h2>
          <Link href='/'>
            <a>Go back</a>
          </Link>
        </h2>
    </Layout>
  )
}