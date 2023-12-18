import styles from "./Layout.module.scss";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <h4>ethan.mcneal[]</h4>
          <div>icons placeholder</div>
        </div>
        <div className={styles.header_icons}>
          <p>svg</p>
          <p>svg</p>
        </div>
      </div>
      <div className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About Me</a>
        <a href="#">Reach out</a>
      </div>
    </div>
  );
}
