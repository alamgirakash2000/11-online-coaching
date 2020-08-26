import React from "react";

function SubCourse(props) {
  const handleRemove = () => {
    if (props.enrolled === "no") {
      props.setWishlist(
        props.wishlist.filter((course) => course !== props.course)
      );
    } else if (props.wishlist === "no") {
      props.setEnrolled(
        props.enrolled.filter((course) => course !== props.course)
      );
    }
  };

  return (
    <div className="sub-course my-3">
      <img src={props.course.img} alt="" />
      <div className="text py-2 w-100">
        <small>
          <strong className="my-0">{props.course.name}</strong>
        </small>
        <div className="d-flex align-items-center justify-content-between">
          <p>${props.course.price}</p>
          <button className="remove-button mr-3" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubCourse;
