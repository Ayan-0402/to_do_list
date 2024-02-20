import React ,{useState}from 'react'

const App = () => {
  const [input, setInput] = useState({name:'',
  age:'',
  class:'',

  })
  const [data, setData] = useState([])
  const handleChange=(e)=>{
    setInput({...input,name:e.target.value})
  }
  const handleChange2=(e)=>{
    setInput({...input,age:e.target.value})
  }
  const handleChange3=(e)=>{
    setInput({...input,class:e.target.value})
  }
  const handleClick=()=>{
    setData([...data,input])
    setInput({
      name:'',
      age:'',
    class:'',    })
    
  }
   const handledelete=(value)=>{
    return(
      setData(data.filter((e,index)=>index != value))
    )
  }
  return (
    <div>
      <h1>TO DO LIST </h1>
      <label>NAME</label>
      <input type='text' placeholder='Enter Name'value={input.name} onChange={(e)=>{handleChange(e)}}></input>
      <br></br>
      <label>AGE</label>
      <input type='text' placeholder='Enter AGE'value={input.age} onChange={(e)=>{handleChange2(e)}}></input>
      <br></br>
      <label>CLASS</label>
      <input type='text' placeholder='Enter CLASS'value={input.class} onChange={(e)=>{handleChange3(e)}}></input>
      <br></br>
      <button onClick={()=>{handleClick()}}>ADD</button>
{
  data.map((e,index)=>{
    return(
      <div>
        <h3>
          {index+1}.
          {e.name}
          <br></br>
          {e.age}
          <br></br>
          {e.class}
        </h3>
        <button onClick={()=>{handledelete(index)}}>delete</button>
      </div>
    )
  })
}
    </div>
  )
}

export default App