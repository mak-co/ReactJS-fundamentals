import "../style/container.css";
import students from "./students.jsx";
import Card from "./card.jsx";

function Container() {
  return (
    <>
      <div className="container">
        {students.map((student) => (
          <Card
            name={student.name}
            course={student.course}
            rollNo={student.rollNumber}
          />
        ))}
      </div>
    </>
  );
}

export default Container;
