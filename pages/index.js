import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero_container}>
        <div className={styles.image_container}>
          <Image src="/static/images/ethan-arms-crossed2.webp" width={481} height={502} />
        </div>
        <div className={styles.intro_container}>
          <div className={styles.mobile_image_container}>
          <Image src="/static/images/ethan-close-up.jpg" width={142} height={142} />
          </div>
          <h1 className={styles.hero_title}>
            Hello, My name is <span style={{color: "#98FF98"}}>Ethan McNeal</span>, I'm a fullstack {"      "}
            {/* <span style={{color:"#2C313F"}}>::0</span> */}
          </h1>
          <h1 className={styles.big_text}>Web Developer</h1>
          <div>
            <p className={styles.hero_subtext}>
              I specialize in <span style={{color: "#98FF98"}}>creating</span> intuitive web experiences.
              </p> 
              {/* <p> I'm currently working as a front end engineer at{" "}
                {" "}
                <a style={{color: "#98FF98"}} href="https://www.espeakers.com" target="_blank" rel="noreferrer">
                  espeakers
                </a>
              . Where I create and deliver elegant online experiences for both our team, and our users
            </p> */}
          </div>
        </div>
      </div>
      <div className={styles.about_me_container}>
          <div>
            <h1>About Me</h1>
          </div>
          <div style={{maxWidth: "50%", textAlign: "center"}}>
            Hey there! I'm Ethan, I create things for the web, thank you for taking the time to check out my portfolio, you can read about me below, or if reading isn't your thing, check out my <Link className="link" href={"/projects"}>Projects</Link>!
          </div>
          <div className={styles.about_me_items}>
            <div className={styles.about_me_background}>
              <h1>Background</h1>
              <p>
                At the beginning of 2021, I started my life as a developer when I enrolled in a coding boot-camp provided through the University of Utah. For four months, 40 hours a week, I was taught a stack from front to back. Afterwards I was offered a part-time position with The U as a Teaching assistant, where I worked with future cohorts by preparing lessons, tutoring students one on one, and as a project manager for the student's final projects
              </p>
              <p>
                During that time, I was spending every day continuing my own education by taking more advanced online courses and completing personal projects. By October, I had sharpened my skills enough to land me my first Dev job as a front end engineer at  {" "}
                <a style={{color: "#98FF98"}} href="https://www.espeakers.com" target="_blank" rel="noreferrer">
                  espeakers
                </a>
              </p>
              <p>
                Now I've been at espeakers for over two years, picking up experience and new skills along the way. I've learned and completed projects in our whole stack, which is a php based backend in doctrine / symphony, a Javascript based front end in React / Next.js, and it's tied together with servers hosted on AWS
              </p>
              <p>
                Although I'm comfortable working in all aspects of a tech stack. The part of the application lifecycle I enjoy most is the front end. So, I plan on continuing my learning and career in that direction.
              </p>
            </div>
            <div className={styles.about_me_background}>
              <h1>Interests & Hobbies</h1>
              <p>
              This is the section that changes the most, I always find myself wanting to get good at some new thing.
              </p>
              <p>
                My most recent hobby is Golf, I've spent this winter taking indoor lessons every week in hopes that I can keep up with friends and family who play. It's been going well, but we will know for sure come spring.
              </p>
              <p>
                Another interest of mine is the trading card game: "Magic the Gathering". Last year a friend introduced me to Magic and it started as a weekly casual game night between friends. Since then it has became my most competitive (and expensive) hobby. I've even won a few tournaments at some local game stores that put on events.
              </p>
            </div>
          </div>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
