import React from "react";
import "./page.css";

const CourseContents = () => {
  return (
    <div className="lesson-content-container-bg">
      <div className="lesson-content-container">
        <h1>Introduction to Korean Alphabets</h1>
        <div className="lesson-content-section">
          <h2>Understanding Hangul</h2>
          <p>
            Begin your journey by exploring the creation, significance, and
            features of the Korean script, Hangul.
          </p>
          <img
            src="/path-to-image/hangul-history.jpg"
            alt="Historical Hangul Script"
            className="image"
          />
        </div>
        <div className="lesson-content-section">
          <h2>Learning the Characters</h2>
          <p>
            Dive deep into the basic vowels and consonants. Engage with
            interactive charts and practice exercises to master each character's
            pronunciation and writing.
          </p>
          <audio controls>
            <source
              src="/path-to-audio/pronunciation-guide.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="lesson-content-section">
          <h2>Forming Syllables and Words</h2>
          <p>
            Discover the art of combining characters to form meaningful
            syllables and words. Practice reading and pronunciation with simple
            exercises and quizzes.
          </p>
          <video width="320" height="240" controls>
            <source src="/path-to-video/word-formation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        //... Add more sections as required
      </div>
    </div>
  );
};

export default CourseContents;
