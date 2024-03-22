import { useState } from "react";
import AddRedux from "./a4/AddRedux";
import AddReducer from "./a4/AddRedux/addReducer";
import ArrayStateVariable from "./a4/ArrayStateVariable";
import BooleanStateVariables from "./a4/BooleanStateVariables";
import ChildStateComponent from "./a4/ChildStateComponent";
import ClickEvent from "./a4/ClickEvent";
import CounterRedux from "./a4/CounterRedux";
import CounterUseState from "./a4/CounterUseState";
import CoursesRedux from "./a4/CoursesRedux";
import DateStateVariable from "./a4/DateStateVariable";
import EventObject from "./a4/EventObject";
import ObjectStateVariable from "./a4/ObjectStateVariable";
import ParentStateComponent from "./a4/ParentStateComponent";
import PassingDataOnEvent from "./a4/PassingDataOnEvent";
import PassingFunctions from "./a4/PassingFunctions";
import ReduxExamples from "./a4/ReduxExamples";
import StringStateVariables from "./a4/StringStateVariables";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Assignment4</h2>
            <ReduxExamples />
            <AddRedux />
            <CoursesRedux />
            <CounterRedux />
            <CounterUseState count={count} setCount={setCount} />
            <ArrayStateVariable count={count} />
            <ObjectStateVariable />
            <StringStateVariables />
            <EventObject />
            <ParentStateComponent />
            <DateStateVariable />
            <BooleanStateVariables />
            <PassingFunctions theFunction={sayHello} />
            <PassingDataOnEvent />
            <ClickEvent />

        </div>
    );
}
export default Assignment4;