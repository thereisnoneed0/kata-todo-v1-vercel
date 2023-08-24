import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";
import { TInputTypes } from "./components/types/types";

export default function App() {
  const [inputText, setInputText] = useState<string>(""); // new task form
  const [taskList, setTaskList] = useState<TInputTypes[]>([]); // task list []
  const [activeFilter, setActiveFilter] = useState<string>("All");

  function handleSetActiveFilter(filter: string): void {
    setActiveFilter(filter);
  }

  function handleSetInput(e: React.ChangeEvent<HTMLInputElement | undefined>) {
    setInputText(e.target.value);
  }

  function handleAddTask(inputText: string) {
    if (inputText.trim() === "") return;
    setInputText("");
    setTaskList([
      ...taskList,
      {
        text: inputText,
        isCompleted: false,
        date: new Date(),
        id: uuidv4()
      }
    ]);
  }

  function handleTaskIsCompleted(id: string) {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
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

  function handleChangeTextAtTask(id: string, newText: string) {
    setTaskList(
      taskList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            text: newText
          };
        }
        return t;
      })
    );
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
          activeFilter={activeFilter}
          handleTaskIsCompleted={handleTaskIsCompleted}
          handleDeleteTask={handleDeleteTask}
          handleChangeTextAtTask={handleChangeTextAtTask}
        />
        <Footer
          clearAll={handleclearAll}
          handleHowManyIsLeft={handleHowManyIsLeft}
          onClickSetActiveFilter={handleSetActiveFilter}
          activeFilter={activeFilter}
        />
      </section>
    </section>
  );
}
