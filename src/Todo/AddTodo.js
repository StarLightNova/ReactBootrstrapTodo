import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
  const [value, setValue] = useState(defaultValue);
  return {
    bind:{
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }){
  const input = useInputValue('');

  function submitHandler(event){
    event.preventDefault();
    
    if(input.value().trim()){
      onCreate(input.value());
      input.clear();
    }
  }

  return(
    <div className="container mb-2">
      <form onSubmit={ submitHandler }>
        <div className="form-group">
          <label htmlFor="todoInput"></label>
          <input type="text" className="form-control" id="todoInput" aria-describedby="todoInputHelp" { ...input.bind }  placeholder="Something to do?🤔" />
        </div>
        <div className="form-group text-left">
          <button type="submit" className="btn btn-primary">Add todo</button>
        </div>         
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo;