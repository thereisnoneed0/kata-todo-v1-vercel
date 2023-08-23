import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";
import { TInputTypes, TStatesForCompleted } from "./components/types/types";

export default function App() {
  const [inputText, setInputText] = useState<string>(""); // new task form
  const [taskList, setTaskList] = useState<TInputTypes[]>([]); // task list []
  const [isCompletedFlag, setIsCompletedFlag] =
    useState<TStatesForCompleted>("");

  function handleFlagToComplete() {
    console.log(
      "я только что поменял isCompletedFlag  на    " + isCompletedFlag
    );
    setIsCompletedFlag("completed");
  }
  function handleFlagToEdit() {
    console.log(
      "я только что поменял isCompletedFlag  на    " + isCompletedFlag
    );
    setIsCompletedFlag("editing");
  }
  function handleFlagToAll() {
    console.log(
      "я только что поменял isCompletedFlag  на    " + isCompletedFlag
    );
    setIsCompletedFlag("");
  }

  function handleSetInput(e: React.ChangeEvent<HTMLInputElement | undefined>) {
    setInputText(e.target.value);
  }

  function handleAddTask(inputText: string) {
    "console.log(OTRABOTALO)";
    setInputText("");
    setTaskList([
      ...taskList,
      {
        text: inputText,
        isCompleted: false,

        id: uuidv4()
      }
    ]);
  }

  function handleTaskIsCompleted(id: string) {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          console.log(item, "itemmms");
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        }
        return { ...item };
      })
    );
  }
  function handleclearAll() {
    setTaskList([]);
  }

  function handleDeleteTask(id: string) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const handleHowManyIsLeft = taskList.filter((e) => e.isCompleted).length;

  return (
    <section className="todoapp">
      <header>
        <h1>ToDos</h1>
        <NewTaskForm
          handleSetInput={handleSetInput}
          inputText={inputText}
          addTask={handleAddTask}
        />
      </header>
      <section className="main">
        <TaskList
          taskList={taskList}
          isCompletedFlag={isCompletedFlag}
          handleTaskIsCompleted={handleTaskIsCompleted}
        />
        <Footer
          clearAll={handleclearAll}
          toComplete={handleFlagToComplete}
          toEdit={handleFlagToEdit}
          toAll={handleFlagToAll}
          handleHowManyIsLeft={handleHowManyIsLeft}
        />
      </section>
    </section>
  );
}
