import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function Lab4() {
    const { todos } = useSelector((state: any) => state.todoReducer);
    function sayHello() {
        alert("Hello");
    }
    return (
        <div id="wd-lab4">
            <h3>Lab 4</h3>
            <ListGroup>
                {todos.map((todo: any) => (
                    <ListGroup.Item key={todo.id}>
                    {todo.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <hr />
            
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
            
        </div>
    );
}