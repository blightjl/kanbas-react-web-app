import JavaScript from "./JavaScript";
import Add from "./routing/Add";
import Classes from "./Classes"
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles/index"
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight"
import Addition from "./Addition"
import TodoList from "./todo/TodoList";


function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
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