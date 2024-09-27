import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList({answersList}) {
  console.log("Inside AnswersList: ", answersList);


  return (
    answersList && (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      )
      )}
    </ul>
    )
  );
}

AnswersList.PropTypes = {
  answersList: PropTypes.array
}