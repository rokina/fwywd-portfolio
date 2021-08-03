import { Header, Hero } from 'components/Index';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
      </Head>
      <Header />
      <Hero />
    </>
  )
}

export default Home
