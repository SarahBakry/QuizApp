import { ADD_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from "../actions/Types";

const initialState = {
  Data: [
    {
      created: "2020-09-09 09:26:39",
      description: "Description",
      id: 29,
      modified: "2020-09-09 09:26:39",
      questions_answers: [
        {
          answer_id: null,
          answers: [
            {
              id: 122,
              is_true: false,
              text: "question 1 answer 1 false",
            },
            {
              id: 123,
              is_true: false,
              text: "question 1 answer 2 false",
            },
            {
              id: 124,
              is_true: true,
              text: "question 1 answer 3 true",
            },
            {
              id: 125,
              is_true: false,
              text: "question 1 answer 4 false",
            },
          ],
          feedback_false: "question 1 false feedback",
          feedback_true: "question 1 true feedback",
          id: 53,
          text: "question 1 text",
        },
        {
          answer_id: null,
          answers: [
            {
              id: 126,
              is_true: true,
              text: "question 2 answer 1 true",
            },
            {
              id: 127,
              is_true: false,
              text: "question 2 answer 2 false",
            },
          ],
          feedback_false: "question 2 false feedback",
          feedback_true: "question 2 true feedback",
          id: 54,
          text: "question 2 text",
        },
        {
          answer_id: null,
          answers: [
            {
              id: 128,
              is_true: false,

              text: "question 3 answer 1 false",
            },
            {
              id: 129,
              is_true: true,
              text: "question 3 answer 2 true",
            },
            {
              id: 130,
              is_true: false,
              text: "question 3 answer 3 false",
            },
          ],
          feedback_false: "question 3 false feedback",
          feedback_true: "question 3 true feedback",
          id: 55,
          text: "question 3 text",
        },
      ],
      score: null,
      title: "quiz title",
      url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
    },
  ],
};
const QuizReducer = (state = initialState, action) => {
  const Data = state.Data;

  switch (action.type) {
    case ADD_QUIZ:
      return {
        ...state,
        Data: [...Data, action.payload],
      };
    case UPDATE_QUIZ:
      Data[action.payload?.Index] = { ...action.payload };
      return {
        ...state,
        Data: [...Data],
      };
    case DELETE_QUIZ:
      Data = Data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        Data: [...Data],
      };
    default:
      return state;
  }
};
export default QuizReducer;
