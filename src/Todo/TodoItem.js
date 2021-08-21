import PropTypes from 'prop-types';
import Context from '../context';
import { useContext } from 'react';

function TodoItem({ todo, index, onChange }){
  const { removeTodo } = useContext(Context);
  const id = "flexSwitchCheck" + String(index + 1);
  const classes = ['list-group-item'];
  if(todo.completed){
    classes.push('opacity-2')
  }
  return (
    <li className={ classes.join(' ') }>
      <div className="row"> 
        <div className="col-10">
          <div className="custom-control custom-switch">
                <input 
                  className="custom-control-input" 
                  type="checkbox" id={id} 
                  onChange={() => onChange(todo.id)} 
                  checked={ todo.completed }
                />
                <label 
                  className="custom-control-label" 
                  htmlFor={id}><strong>{ index + 1 }.</strong> { todo.title } 
                </label>
            </div>
          </div>
          <div className="col-2">
            <button 
                  type="button" 
                  className="close" 
                  aria-label="Close"
                  onClick={ removeTodo.bind(null, todo.id)  }  
                >
                    <span aria-hidden="true">&times;</span>
                </button>
          </div>
        </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem;