import "../style/card.css";
import "../style/card.css"



export default function Card({ name, course, rollNo }) {
  return (
    <div class="card">
    
      <div class="avatar">

      {/* to get first character of the string */}
        {name.charAt(0)}
      </div>
      
      <h2 class="name">{name}</h2>

      <p class="info">
        Class:<span>{course}</span>
      </p>

      <p class="info">
        Roll No: <span>{rollNo}</span>
      </p>

      <button class="btn">
       View Profile 
       </button>
    </div>
  );
}
