import AnswersItem from "./AnswersItem";

// eslint-disable-next-line react/prop-types
export default function AnswersList({answersList, onEdit, onDelete}) {


  return (
    answersList && (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem 
        answerItem={answerItem} 
        key={i}
        index={i}
        onEdit={onEdit}
        onDelete={onDelete}
        />
      )
      )}
    </ul>
    )
  );
}
