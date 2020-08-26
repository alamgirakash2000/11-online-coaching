import React from "react";

function Course({ course, wishlist, setEnrolled, enrolled, setWishlist }) {
  return (
    <div className="course col-xl-4  col-md-6 my-3">
      <div className="card">
        <div className="card-body p-0 overflow-hidden text-dark">
          <img src={course.img} alt="" className="course__img w-100" />
          <div className="card-text p-2">
            <p className="my-0">
              <strong>{course.name}</strong>
            </p>
            <small>
              by <i>{course.instructor}</i>{" "}
            </small>
            <div className="text-success">
              <strong>${course.price}</strong>
            </div>
            {Array(course.rating)
              .fill()
              .map((item) => (
                <span>⭐</span>
              ))}
            <small>({course.ratingCount})</small>

            <div className="buttons d-flex justify-content-between mt-2">
              <button
                className="enroll-btn"
                onClick={() => {
                  if (!enrolled.includes(course)) {
                    setEnrolled([...enrolled, course]);
                  }
                }}
              >
                Enroll Now
              </button>

              <button
                className="wishlist-btn"
                onClick={() => {
                  if (!wishlist.includes(course)) {
                    setWishlist([...wishlist, course]);
                  }
                }}
              >
                <i class="far fa-heart fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
