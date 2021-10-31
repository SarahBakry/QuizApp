import React, { useState, useEffect } from "react";
import InputField from "../../Components/FormInputs/InputField/InputField";
import Checkbox from "../../Components/FormInputs/Checkbox/Checkbox";
import { history } from "../../redux/_helpers/history";
import { connect } from "react-redux";
import { AddQuiz, UpdateQuiz } from "../../redux/actions/Quiz";

const QuizForm = (props) => {
  const [Values, SetValues] = useState(
    history.location.state?.Quiz
      ? history.location.state?.Quiz
      : {
          title: "",

          description: "",
          url: "",
          questions_answers: [
            {
              text: "",
              answers: [
                { text: "", is_true: false },
                { text: "", is_true: false },
              ],
            },
          ],
        },
  );
  const updateValue = (parent, key, value) => {
    // console.log(parent, key, value, "parent, key, value");
    // const updatedParent = { ...parent };
    parent[key] = value;
    return parent;
  };
  const handlechange = (e) => {
    let formValues = { ...Values };
    const name = e.target.name.split(".");
    if (name.length === 1) {
      if (e.target.type === "checkbox") {
        formValues[name[0]] = e.target.checked;
      } else {
        formValues[name[0]] = e.target.value;
      }
    }
    let toUpdate = formValues[name[0]];
    name.forEach((element, i) => {
      if (i > 0) {
        if (i === name.length - 1) {
          if (e.target.type === "checkbox") {
            toUpdate[name[i - 1]] = updateValue(
              toUpdate,
              element,
              e.target.checked,
            );
          } else {
            toUpdate[name[i - 1]] = updateValue(
              toUpdate,
              element,
              e.target.value,
            );
          }
        } else {
          toUpdate = toUpdate[name[i]];
        }
      }
    });
    SetValues({ ...formValues });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    if (history.location.state?.Quiz) {
      props.UpdateQuiz(Values);
    } else {
      props.AddQuiz(Values);
    }
  };
  useEffect(() => {
    console.log(Values);
  }, [Values]);
  return (
    <div className="w-90 mx-auto mb-3">
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
      >
        <div className="w-100 ">
          <h1>Quiz Form</h1>
        </div>
        <div className="w-100 flex flex-wrap">
          <div className="w-80">
            <div className="container w-100 border mb-3">
              <div className="w-100 flex flex-wrap ">
                <div className="w-20">
                  <InputField
                    required={true}
                    label="Title *"
                    type="text"
                    name="title"
                    value={Values.title}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
                <div className="w-40 px-3">
                  <InputField
                    required={true}
                    label="Description *"
                    type="text"
                    name="description"
                    value={Values.description}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
                <div className="w-40">
                  <InputField
                    label="URL"
                    type="text"
                    name="url"
                    value={Values.url}
                    onChange={(e) => handlechange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="container w-100 border px-3 ">
              <label className="w-100 p-2 flex justify-start bold mb-3">
                Questions{" "}
              </label>
              <div className="flex flex-wrap w-100">
                {Values.questions_answers?.map((question, QIndex) => (
                  <div
                    className="w-100 mb-3 flex flex-wrap border border-rounded px-3"
                    key={`Q ${QIndex + 1}`}
                  >
                    <div className="flex flex-wrap w-80 border-b py-3 ">
                      <InputField
                        required={true}
                        label={`Q ${QIndex + 1} *`}
                        type="text"
                        name={`questions_answers.${QIndex}.text`}
                        value={question.text}
                        onChange={(e) => handlechange(e)}
                      />
                      <InputField
                        label={`Correct Answer Feedback `}
                        type="text"
                        name={`questions_answers.${QIndex}.feedback_true`}
                        value={question.feedback_true}
                        onChange={(e) => handlechange(e)}
                      />
                      <InputField
                        label={`Wrong Answer Feedback`}
                        type="text"
                        name={`questions_answers.${QIndex}.feedback_false`}
                        value={question.feedback_false}
                        onChange={(e) => handlechange(e)}
                      />
                      <div className="w-100 border border-rounded p-3 mt-3 ">
                        <label className="w-100 py-3 flex justify-start bold">
                          Answers{" "}
                        </label>
                        {question.answers?.map((answer, answerIndex) => (
                          <div
                            className="w-100 flex flex-wrap px-3"
                            key={`Q ${QIndex + 1}${answerIndex}`}
                          >
                            <div className="w-100 flex">
                              <div className="w-80 flex">
                                <div className="w-50">
                                  <InputField
                                    required={true}
                                    label={`Answer ${answerIndex + 1} *`}
                                    type="text"
                                    name={`questions_answers.${QIndex}.answers.${answerIndex}.text`}
                                    value={answer.text}
                                    onChange={(e) => handlechange(e)}
                                  />
                                </div>
                                <div
                                  className="w-50 px-3 py-2 mt-3 flex items-center "
                                  style={{ height: "100%" }}
                                >
                                  <Checkbox
                                    name={`questions_answers.${QIndex}.answers.${answerIndex}.is_true`}
                                    checked={answer.is_true}
                                    label="Is Correct Answer"
                                    onClick={(e) => {
                                      handlechange(e);
                                      if (e.target.checked) {
                                        const updated = { ...Values };
                                        updated.questions_answers[
                                          QIndex
                                        ].answers = updated.questions_answers[
                                          QIndex
                                        ].answers.map((answer, index) => {
                                          if (index !== answerIndex) {
                                            return {
                                              ...answer,
                                              is_true: false,
                                            };
                                          } else {
                                            return {
                                              ...answer,
                                              is_true: true,
                                            };
                                          }
                                        });
                                      }
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="w-20">
                                <div className="w-100 flex justify-between">
                                  {answerIndex ===
                                  question.answers.length - 1 ? (
                                    <button
                                      type="button"
                                      className="btn w-40 "
                                      style={{ fontSize: "24px" }}
                                      onClick={() => {
                                        const UpdatedValues = { ...Values };
                                        UpdatedValues.questions_answers[
                                          QIndex
                                        ]?.answers?.push({});
                                        SetValues({ ...UpdatedValues });
                                      }}
                                    >
                                      +
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                  {answerIndex > 1 ? (
                                    <button
                                      type="button"
                                      className="btn w-40 "
                                      style={{ fontSize: "24px" }}
                                      onClick={() => {
                                        const UpdatedValues = { ...Values };
                                        UpdatedValues.questions_answers[
                                          QIndex
                                        ]?.answers?.splice(answerIndex, 1);
                                        SetValues({ ...UpdatedValues });
                                      }}
                                    >
                                      -
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-20 mt-3 p-3">
                      <div className="w-100 p-3 flex justify-between">
                        {QIndex === Values.questions_answers.length - 1 ? (
                          <button
                            type="button"
                            className="btn w-40 "
                            style={{ fontSize: "24px" }}
                            onClick={() => {
                              const UpdatedValues = { ...Values };
                              UpdatedValues.questions_answers?.push({
                                answers: [{}],
                              });
                              SetValues({ ...UpdatedValues });
                            }}
                          >
                            +
                          </button>
                        ) : (
                          ""
                        )}

                        {QIndex > 0 ? (
                          <button
                            type="button"
                            className="btn w-40 "
                            style={{ fontSize: "24px" }}
                            onClick={() => {
                              const UpdatedValues = { ...Values };
                              UpdatedValues.questions_answers?.splice(
                                QIndex,
                                1,
                              );
                              SetValues({ ...UpdatedValues });
                            }}
                          >
                            -
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-15 px-3 ">
            <button
              className="w-100 btn"
              type="submit"
              // onClick={() => submitHandle()}
            >
              Save
            </button>
            <button
              className="w-100 btn"
              type="button"
              onClick={() => {
                history.push("/");
              }}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Data: state.Quiz.Data || [],
  };
};

const mapDispatchToProps = {
  AddQuiz,
  UpdateQuiz,
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
