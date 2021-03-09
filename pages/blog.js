import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/layout';
import utilStyles from '../components/utils.module.css';

export default function Blog () {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
        <h1 className={utilStyles.heading2XL}>My Blog</h1>
        <div>A series of coding problems, solutions, and my thoughts afterwards.</div>
    </Layout>
  )
}