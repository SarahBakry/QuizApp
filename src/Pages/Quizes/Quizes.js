import { useState } from "react";
import { connect } from "react-redux";
import Table from "../../Components/Table/Table";
import { history } from "../../redux/_helpers/history";
import { DeleteQuiz } from "../../redux/actions/Quiz";

const Quizes = (props) => {
  const { Data } = props;
  const [SelectedQuiz, SetSelectedQuiz] = useState(undefined);
  // useEffect(() => {
  //   SetSelectedQuiz(undefined);
  // }, []);
  return (
    <div>
      <div>
        <h1 className="w-100">Quizes</h1>
        <div className=" container border flex ">
          <div className="w-80 p-3">
            <Table
              Data={Data}
              SelectedItem={SelectedQuiz}
              SetSelectedItem={SetSelectedQuiz}
            />
          </div>
          <div className="w-15 p-3">
            <button
              className="btn w-100"
              type="button"
              onClick={() => {
                history.push("/New-Quiz");
              }}
            >
              Add
            </button>
            <button
              className="btn w-100"
              type="button"
              onClick={() => {
                history.push("/Update-Quiz", { Quiz: SelectedQuiz });
              }}
              disabled={!SelectedQuiz}
            >
              Update
            </button>
            <button
              className="btn w-100"
              type="button"
              disabled={!SelectedQuiz}
              onClick={() => {
                history.push("/Take-Quiz", { Quiz: SelectedQuiz });
              }}
            >
              Take
            </button>
            <button
              className="btn w-100"
              type="button"
              disabled={!SelectedQuiz}
              onClick={() => {
                props.DeleteQuiz(SelectedQuiz?.id);
                SetSelectedQuiz(undefined);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Data: state.Quiz.Data || [],
  };
};

const mapDispatchToProps = {
  DeleteQuiz,
};
export default connect(mapStateToProps, mapDispatchToProps)(Quizes);
