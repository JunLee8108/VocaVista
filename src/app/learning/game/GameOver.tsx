import styles from "./page.module.css";
import { questions } from "../../../../util/data/data";

import { MouseEventHandler } from "react";

export default function GameOver({
  restartGame,
  score,
}: {
  restartGame: MouseEventHandler<HTMLButtonElement>;
  score: number;
}) {
  return (
    <div className={styles.gameOver}>
      <p>Great job! You've completed the game!</p>

      {score === questions.length && (
        <>
          <p>Congratulations! You've earned a gold badge!</p>
          <button className={styles.goldBadge}>Gold Badge</button>
        </>
      )}

      <p>
        Your Score: {score} / {questions.length}
      </p>
      <button onClick={restartGame} className={styles.nextButton}>
        Restart
      </button>
    </div>
  );
}
