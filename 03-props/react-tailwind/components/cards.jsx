import students from "./students";

function Card({name,className,result,rollNumber,attendance}) {
  return (
    <>
      <div
        id="card"
        className="bg-black justify-center  text-white p-4 w-xs m-4  rounded-xl h-90 flex flex-col text-2xl font-bold "
      >
        <h2>{name}</h2>

        <p>Class: {className}</p>

        <p>Result: {result}</p>

        <p>Roll Number: {rollNumber}</p>

        <p>Attendance: {attendance}/200</p>
      </div>
    </>
  );
}

export default Card;
