import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainerBg}>
        <div className={styles.homeContainer}>
          <div className={styles.homeFlexbox}>
            <img src="/bg.webp"></img>
          </div>

          <div className={styles.homeFlexbox}>
            <div className={styles.textContainer}>
              <h1 className={styles.headingOne}>VocaVista?</h1>
              <h2 className={styles.headingTwo}>
                E-Learning Platform with Adaptive Learning!
              </h2>
              {/* <FontAwesomeIcon icon={faRightLong} className={styles.icon} /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.featuresContainerBg}>
        <div className={styles.featuresHeader}>
          <h3>Core Features of VocaVista</h3>
        </div>
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <h3>🟣 Adaptive Learning</h3>
            <p>
              Experience tailored lessons that adapt to your individual learning
              pace.
            </p>
          </div>

          <div className={styles.featureBox}>
            <h3>🟠 Interactive Lessons</h3>
            <p>
              Engage in lessons filled with dynamic quizzes, speaking exercises,
              and more.
            </p>
          </div>

          <div className={styles.featureBox}>
            <h3>🟢 Global Community</h3>
            <p>
              Join a community of language learners and native speakers to
              practice with.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsContainerAnimation}>
          <h3 className={styles.testimonialsSectionTitle}>
            What Our Users Say
          </h3>
          <div className={styles.testimonial}>
            <FontAwesomeIcon icon={faPlayCircle} className={styles.playIcon} />
            <p>
              "I've never learned a language so efficiently! The adaptive
              learning really makes a difference."
            </p>
            <span>- Sarah, New York</span>
          </div>
          <div className={styles.testimonial}>
            <FontAwesomeIcon icon={faPlayCircle} className={styles.playIcon} />
            <p>
              "The community here is so welcoming. I've made friends and
              language partners from all over the world."
            </p>
            <span>- Jae, Seoul</span>
          </div>
        </div>
      </div>

      <div className={styles.coursesContainerBg}>
        <h3 className={styles.sectionTitle}>Top Featured Courses ⭐</h3>
        <div className={styles.coursesContainer}>
          <div className={styles.courseCard}>
            <div className={styles.courseImageContainer}>
              <Image
                src="/course1.webp"
                alt="Course 1"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h4>Beginner Korean *</h4>
            <p>
              Start your journey with the basics of Korean grammar and
              vocabulary.
            </p>
          </div>
          <div className={styles.courseCard}>
            <div className={styles.courseImageContainer}>
              <Image
                src="/course2.webp"
                alt="Course 2"
                fill={true}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h4>Intermediate Korean Conversations *</h4>
            <p>
              Dive into day-to-day dialogues and polish your speaking skills.
            </p>
          </div>
          <div className={styles.courseCard}>
            <div className={styles.courseImageContainer}>
              <Image
                src="/course3.webp"
                alt="Course 3"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h4>Advanced Korean Writing *</h4>
            <p>
              Master the art of writing in Korean with comprehensive lessons.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
