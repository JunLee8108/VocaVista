import React from "react";
import { course } from "../../../../../util/data/data";
import "./page.css";

export default function CourseDetail({ params }: { params: { id: string } }) {
  const courseID = parseInt(params.id);
  const courseData = course.filter((p) => p.id === courseID);

  return (
    <div className="course-detail-container">
      <h1 className="course-detail-header">{courseData[0].title}</h1>
      <p className="course-detail-subHeader">{courseData[0].subTitle}</p>

      <div className="lesson-container">
        {courseData[0].lesson.map((content, index) => (
          <div key={index} className="lesson-card">
            <h2>{content.title} *</h2>
            <p>{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
