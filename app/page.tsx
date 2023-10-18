import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { feature, testimonial, course, pathStep } from "../util/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faComments,
  faStar,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // const db = (await clientPromise).db("voca");
  // const result = await db.collection("users").find().toArray();

  // console.log(result);

  return (
    <>
      {/* Home Section */}
      <div className={styles.homeContainerBg}>
        <div
          className={`${styles.homeContainer} display-flex justify-content-center mg-left-right-auto`}
        >
          <div
            className={`${styles.homeFlexbox} display-flex justify-content-center align-items-center`}
          >
            <img src="/Hangul.webp"></img>
          </div>

          <div
            className={`${styles.homeFlexbox} display-flex justify-content-center`}
          >
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
      <div
        className={`${styles.featuresContainerBg} display-flex justify-content-center align-items-center`}
      >
        <div className={styles.featuresHeader}>
          <h3>Why VocaVista?</h3>
        </div>

        <div
          className={`${styles.featuresContainer} display-flex mg-left-right-auto`}
        >
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
      <div
        className={`${styles.testimonialsContainer} display-flex align-items-center`}
      >
        <div
          className={`${styles.testimonialsContainerAnimation} display-flex justify-content-center align-items-center`}
        >
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
              <div
                className={`${styles.testimonial} display-flex align-items-center`}
                key={index}
              >
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

      <div
        className={`${styles.learningPathContainer} display-flex justify-content-center align-items-center`}
      >
        <div
          className={`${styles.learningPathHeading} display-flex align-items-center`}
        >
          <h3 className={styles.learningPathSectionTitle}>
            Your Learning Journey{" "}
            <FontAwesomeIcon
              icon={faRoute}
              style={{ marginLeft: "5px" }}
              size="sm"
            />
          </h3>
        </div>
        <div
          className={`${styles.pathStepContainer} display-flex align-items-center`}
        >
          {pathStep.map((content, index) => {
            return (
              <div
                className={`${styles.pathStep} display-flex justify-content-center align-items-center`}
                key={index}
              >
                <span className={styles.stepNumber}>
                  {pathStep[index].number}
                </span>
                <p>{pathStep[index].content}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Courser Section */}
      <div className={styles.courseContainerBg}>
        <div
          className={`${styles.coursesHeading} display-flex justify-content-center`}
        >
          <h3 className={styles.sectionTitle}>
            Top Featured Courses{" "}
            <FontAwesomeIcon
              icon={faStar}
              style={{ marginLeft: "5px", color: "orange" }}
              size="sm"
            />
          </h3>
        </div>

        <div
          className={`${styles.coursesContainer} display-flex justify-content-center mg-left-right-auto`}
        >
          {course.map((content, index) => {
            return (
              <div key={index}>
                {index < 3 ? (
                  <Link
                    href={`/learning/course/${course[index].id}`}
                    className={styles.homeCourseLink}
                  >
                    <div className={styles.courseCard}>
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
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
