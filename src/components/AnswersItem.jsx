// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  huge: "It is huge!",
  blue: "It is Blue!",
  logo: "It has a logo!",
  quacks: "It quacks!"
};


// eslint-disable-next-line react/prop-types
function ItemsList({ list }) {
  return (
    <ul>
      
      {list.map((item) => (
         // eslint-disable-next-line react/jsx-key
         <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}


// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  // eslint-disable-next-line react/prop-types
  answerItem: { username, color, consistency, logo, timeSpent, review },
  // eslint-disable-next-line react/prop-types
  onEdit,
  // eslint-disable-next-line react/prop-types
  onDelete,
  // eslint-disable-next-line react/prop-types
  index
}) {

  console.log("This is item: " + timeSpent)


  return (
    <li>
      <article className="answer">
      <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
        <h3>{username || "Anonymous"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{color}</span>
        </p>
       <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p> 
        <p>
          <em>Why do you like your rubber duck so much?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}

