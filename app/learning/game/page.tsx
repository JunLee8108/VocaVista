import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import styles from "./page.module.css";
import GameMain from "./GameMain";

export default function KoreanQuest() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.gameHeader}>
          Game
          <FontAwesomeIcon
            icon={faGamepad}
            style={{
              marginLeft: "13px",
              borderRadius: "50%",
            }}
          />
        </h1>

        <p className={styles.introSubHeader}>
          A fun and interactive game designed to enhance your Korean language
          skills
        </p>

        <GameMain />
      </div>
    </>
  );
}
