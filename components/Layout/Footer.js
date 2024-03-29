import styles from './Layout.module.scss';

export default function Footer (props) {

  return (
    <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
    </a>
  </footer>
  )
}