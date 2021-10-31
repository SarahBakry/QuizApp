import { history } from "../_helpers/history";
import { ADD_QUIZ, UPDATE_QUIZ } from "./Types";
export const AddQuiz = (quiz) => {
  return (dispatch) => {
    let Quiz = { ...quiz };
    if (!Quiz.id) {
      Quiz.id = "1" + new Date();
      if (Quiz.questions_answers && Quiz.questions_answers.length) {
        Quiz.questions_answers = Quiz.questions_answers.map((Q, i) => {
          Q.id = i + 1 + new Date();
          if (Q.answers && Q.answers.length) {
            const Answers = Q.answers.map((answer, answerIndex) => {
              answer.id = answerIndex + 1 + new Date();
              return answer;
            });
            Q.answers = [...Answers];
          }
          return Q;
        });
      }
    }
    dispatch({
      type: ADD_QUIZ,
      payload: Quiz,
    });
    history.push("/");
  };
};
export const UpdateQuiz = (Quiz) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_QUIZ,
      payload: Quiz,
    });
    history.push("/");
  };
};
