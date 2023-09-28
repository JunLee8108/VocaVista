import styles from "./page.module.css";
import { MouseEventHandler } from "react";

export default function GameIntro({
  startGame,
}: {
  startGame: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={`${styles.intro} mg-left-right-auto`}>
      <div className={styles.introHeader}>
        <h2>Welcome to Korean Quest!</h2>
      </div>

      <div className={styles.introExplanation}>
        <p>
          Embark on a journey to master the Korean language through an
          interactive quiz experience! Here’s how it works:
        </p>
        <ul>
          <li>
            <strong>Read</strong>: View the Korean word or phrase.
          </li>
          <li>
            <strong>Select</strong>: Choose the correct English translation.
          </li>
          <li>
            <strong>Progress</strong>: Answer within 30 seconds to move to the
            next question.
          </li>
          <li>
            <strong>Complete</strong>: Finish all questions to see your score!
          </li>
        </ul>
      </div>
      <button onClick={startGame} className={styles.startButton}>
        START
      </button>
    </div>
  );
}
