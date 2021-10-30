import { connect } from "react-redux";
import Table from "../../Components/Table/Table";

const Quizes = (props) => {
  return (
    <div>
      <div>
        <h1 className="w-100">Quizes</h1>
        <div className=" container border ">
          <Table />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Quizes);
