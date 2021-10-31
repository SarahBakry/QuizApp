import "./Table.css";
import Checkbox from "../FormInputs/Checkbox/Checkbox";
const Table = (props) => {
  const { Data, SelectedItem, SetSelectedItem } = props;
  return (
    <table>
      <tr>
        <th className="w-20px"></th>
        <th className="border-l">Title</th>
        <th className="border-l">Description</th>
      </tr>
      {Data?.map((row, i) => (
        <tr>
          <td>
            <Checkbox
              cheked={SelectedItem?.id === row.id}
              onClick={() => {
                if (SelectedItem && SelectedItem.id === row.id) {
                  SetSelectedItem(undefined);
                } else {
                  SetSelectedItem({ ...row, Index: i });
                }
              }}
            />
          </td>
          <td className="border-l">{row.title}</td>
          <td className="border-l">{row.description}</td>
        </tr>
      ))}
    </table>
  );
};
export default Table;
