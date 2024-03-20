import JavaScript from "./JavaScript";
import Add from "./routing/Add";
import Classes from "./Classes"
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles/index"
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight"
import Addition from "./Addition"
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";


function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
        <Add/>
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <Addition a={3} b={4}/>
        <TodoList/>
      </div>
    );
  }
  export default Assignment3;