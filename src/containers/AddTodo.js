import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <from
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
      </from>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
