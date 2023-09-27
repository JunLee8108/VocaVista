import Image from "next/image";
import styles from "./page.module.css";
import { feature, testimonial, course } from "../../util/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faComments,
  faStar,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainerBg}>
        <div className={styles.homeContainer}>
          <div className={styles.homeFlexbox}>
            <img src="/Hangul.webp"></img>
          </div>

          <div className={styles.homeFlexbox}>
            <div className={styles.textContainer}>
              <h1 className={styles.headingOne}>VocaVista?</h1>
              <h2 className={styles.headingTwo}>
                <span>Korean</span> E-Learning Platform with Adaptive Learning!
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.featuresContainerBg}>
        <div className={styles.featuresHeader}>
          <h3>Why VocaVista?</h3>
        </div>

        <div className={styles.featuresContainer}>
          {feature.map((content, index) => {
            return (
              <div className={styles.featureBox} key={index}>
                <h3>
                  {feature[index].icon}
                  {feature[index].title}
                </h3>
                <p>{feature[index].content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsContainerAnimation}>
          <h3 className={styles.testimonialsSectionTitle}>
            What Our Users Say{" "}
            <FontAwesomeIcon
              icon={faComments}
              style={{ marginLeft: "5px" }}
              size="sm"
            />
          </h3>

          {testimonial.map((content, index) => {
            return (
              <div className={styles.testimonial} key={index}>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className={styles.playIcon}
                />
                <p>{testimonial[index].content}</p>
                <span>{testimonial[index].writer}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.learningPathContainer}>
        <div className={styles.learningPathHeading}>
          <h3 className={styles.learningPathSectionTitle}>
            Your Learning Journey{" "}
            <FontAwesomeIcon
              icon={faRoute}
              style={{ marginLeft: "5px" }}
              size="sm"
            />
          </h3>
        </div>
        <div className={styles.pathStepContainer}>
          <div className={styles.pathStep}>
            <span className={styles.stepNumber}>1</span>
            <p>Introduction to Korean Alphabets (Hangul)</p>
          </div>
          <div className={styles.pathStep}>
            <span className={styles.stepNumber}>2</span>
            <p>Basic Vocabulary and Grammar</p>
          </div>
          <div className={styles.pathStep}>
            <span className={styles.stepNumber}>3</span>
            <p>Intermediate Conversational Practices</p>
          </div>
          <div className={styles.pathStep}>
            <span className={styles.stepNumber}>4</span>
            <p>Advanced Composition and Reading</p>
          </div>
        </div>
      </div>

      {/* Courser Section */}
      <div className={styles.coursesContainerBg}>
        <div className={styles.coursesHeading}>
          <h3 className={styles.sectionTitle}>
            Top Featured Courses{" "}
            <FontAwesomeIcon
              icon={faStar}
              style={{ marginLeft: "5px", color: "orange" }}
              size="sm"
            />
          </h3>
        </div>

        <div className={styles.coursesContainer}>
          {course.map((content, index) => {
            return (
              <div className={styles.courseCard} key={index}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course[index].img}
                    alt="Course 1"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={true}
                  />
                </div>
                <h4>{course[index].title}</h4>
                <p>{course[index].content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
