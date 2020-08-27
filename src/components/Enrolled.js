import React from "react";
import SubCourse from "./SubCourse";

function Enrolled({ enrolled, setEnrolled }) {
  return (
    <div className="enrolled w-100 m-3 p-3">
      <h3 className="text-center">Enrolled ({enrolled.length})</h3>
      <h4>
        Total Price : $
        {enrolled.reduce((sum, course) => sum + course.price, 0).toFixed(2)}
      </h4>
      <div className="enrolled-courses">
        {enrolled.map((course) => (
          <SubCourse
            key={course.id}
            course={course}
            enrolled={enrolled}
            setEnrolled={setEnrolled}
            wishlist="no"
          />
        ))}
      </div>
    </div>
  );
}

export default Enrolled;
