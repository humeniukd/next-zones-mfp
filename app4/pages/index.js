import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cart from '../components/Cart';

// We need to use top level await on these modules as they are async.
// This is actually what let's module federation work with NextJS
const Footer = (await import('app1/footer')).default;
const Header = (await import('app1/header')).default;

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Avon | Category</title>
      </Head>

      <main className={styles.main}>
        <Cart />
      </main>

      <Footer />
    </div>
  );
}
