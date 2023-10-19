import "./page.css";
import { course } from "../../../util/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

export default async function LearningProgress() {
  return (
    <>
      <div className="learning-progress-container">
        <h1 className="learning-progress-header">
          Learning Progress
          <FontAwesomeIcon icon={faChalkboard} style={{ marginLeft: "13px" }} />
        </h1>

        <p className="learning-progress-sub-header">
          Track and visualize your learning journey, achievements, and
          milestones
        </p>

        <div className="milestones">
          <h2>Milestones</h2>

          {course.map((content, index) => {
            return (
              <div className="milestone" key={index}>
                {content.progress === "100%" ? (
                  <p>✔ {content.title}</p>
                ) : (
                  <p>✘ {content.title}</p>
                )}

                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${content.progress}` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
