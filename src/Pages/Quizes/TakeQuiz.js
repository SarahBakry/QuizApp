import { useState } from "react";
import Checkbox from "../../Components/FormInputs/Checkbox/Checkbox";
import { history } from "../../redux/_helpers/history";
const TakeQuiz = (props) => {
  // props
  const [Quiz, SetQuiz] = useState(history.location.state?.Quiz);
  return (
    <div className=" p-3 w-100">
      <div className="w-70 container">
        {Quiz ? (
          <div>
            <h1> {Quiz.title}</h1>
            {Quiz.questions_answers?.map((Question, QIndex) => {
              return (
                <div
                  key={Question.id}
                  className="border border-rounded p-3 mb-3"
                >
                  <label className=" w-100 bold">{Question.text}</label>
                  <div className="w-40 text-sm">
                    {Question.answers.map((answer, i) => {
                      return (
                        <div key={answer.id} className="w-100 p-3">
                          <Checkbox
                            checked={Question.answer_id === answer.id}
                            label={answer.text}
                            onClick={() => {
                              const Updated = { ...Quiz };
                              Updated.questions_answers[QIndex].answer_id =
                                answer.id;
                              Updated.questions_answers[
                                QIndex
                              ].isCorrectAnswer = answer.is_true;
                              SetQuiz({ ...Updated });
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  {Question.answer_id &&
                  Question.isCorrectAnswer &&
                  Question.feedback_true ? (
                    <div className="success  py-2 border-rounded">
                      {Question.feedback_true}
                    </div>
                  ) : Question.answer_id &&
                    !Question.isCorrectAnswer &&
                    Question.feedback_false ? (
                    <div className="fail py-2 border-rounded">
                      {Question.feedback_false}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default TakeQuiz;
