
import React, { useEffect, useState } from 'react'
import "./TodoList.scss"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function ToDoList() {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState([])
  const [input, setInput] = useState([])
  const [tog, setTog] = useState(0)

  const [isCheck, setisCheck] = useState([])
  function updateInput(e) {
    const userInput = e.target.value;
    setInput(userInput)
  }
  function addLIst() {
    const newList = [...list]
    newList.push(input)
    setList(newList)
    setInput('')
  
  }
  function Toggle(id) {
    setTog(id)

  }

  function handleCheck(e) {
    const { value, checked } = e.target;

    if (checked) {
      setisCheck([...isCheck, value])
    } else {
      setisCheck(isCheck.filter((e) => e !== value))
    }
  }
  function deleteCheckedItems() {
    const newList = list.filter((_, index) => !isCheck.includes(index.toString()));
    setList(newList);
    setisCheck([]);
  }
  useEffect(() => {

  }, [isCheck])
  return (
    <div className="container">
      <div className="top">

        <div className="search">
          <input type="text" placeholder='Search here' />
          <button>Search</button>
        </div>
        <div className='imgcontainer' onClick={() => { setOpen(!open) }}>
          <div className={open == true ? "openImg" : "img"}>
            <AddCircleOutlineIcon fontSize="large" />
          </div>
        </div>
        {open && (<div className="add">
          <input type="text" placeholder='Add' value={input} onChange={updateInput} />
          <button onClick={addLIst} >Add</button>
        </div>)}
      </div>
      <div className="delete">
        <button onClick={deleteCheckedItems}>Delete</button>

      </div>
      <div className="list">

        {list.map((item, index) => {
          return (
            <div key={index} className='listItems'>
              <div className="top">
                <input type="checkbox" value={index} checked={item.isCheck} onClick={(e) => handleCheck(e)} />
                <ul >{index + 1}. </ul>

                <span>{item}</span>

              </div>
              <div className='show' >



                < MoreVertIcon className={tog === index ? "tog" : "show"} onClick={() => { Toggle(index) }} />
              </div>
              <div className={tog === index ? "options" : "tog"}>
                <span>Edit</span>
                <span>Complete</span>
                <span>Incomplete</span>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ToDoList