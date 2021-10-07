import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">新增Todo</button>
      </form>
    </div>
  );
};

// 綁定 redux的data 與 react component
AddTodo = connect()(AddTodo);

export default AddTodo;
