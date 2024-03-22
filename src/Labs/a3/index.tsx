import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Highlight from "./Highlight";
import Add2 from "./Add2";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import { useSelector } from "react-redux";
import { LabState } from "../store";
function Assignment3() {
    const { todos } = useSelector((state: LabState) => state.todosReducer);
    return (
        <div className="container-fluid">
            <h2>Assignment 3</h2>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <TodoList />
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>

            <Add2 a={22} b={44} />
            {Add2({ a: 4, b: 6 })}
            {/* <Add2 /> */}
            Lore ipsum dolor sit amet, consectetur adipiscing elit. Lore ipsum dolor
            sit amet, consectetur adipiscing elit. Lore ipsum dolor sit amet,
            consectetur <Highlight>adipiscing elit.</Highlight> Lore ipsum dolor sit
            amet, consectetur adipiscing elit. Lore ipsum dolor sit amet, consectetur
            adipiscing elit. Lore ipsum dolor sit amet, consectetur adipiscing elit.
            <PathParameters />
            <JavaScript />
        </div>
    );
}

export function Add() {
    return 2 + 4;
}

export function Subtract(a: number, b: number) {
    return a - b;
}

export default Assignment3;