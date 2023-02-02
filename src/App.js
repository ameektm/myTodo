import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvents = (event) => {
    setInputList(event.target.value)

  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");


  }

  const deleteItems = (id) => {
    // console.log('deleted')
    setItems((oldItems) => {
      return (oldItems.filter((arrElem, index) => {
        return index !== id;
      }))
    })

  }



  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add Items' onChange={itemEvents} value={inputList} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemVal, index) => {
              return (<ToDoList text={itemVal} key={index} id={index} onSelect={deleteItems} />)
            })}
          </ol>

        </div>
      </div>


    </>


  );
}

export default App;
