import "./page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

export default async function LearningProgress() {
  return (
    <>
      <div className="badge-reward-container">
        <h1 className="badge-reward-header">
          Badge Reward
          <FontAwesomeIcon icon={faMedal} style={{ marginLeft: "13px" }} />
        </h1>

        <p className="badge-reward-sub-header">
          Explore and celebrate your achievements with badges
        </p>
      </div>
    </>
  );
}
