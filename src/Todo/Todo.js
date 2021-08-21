import  './Todo.css';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

function Todo(props){
  
  return (
    <div className="container text-left">
      <ul className="list-group">
        { props.todos.map((todo, index) => 
            { 
              return <TodoItem 
                        todo={ todo } 
                        key={ todo.id } 
                        index={ index } 
                        onChange={ props.onToggle }
                      />
            }
          )
        }
      </ul> 
    </div>
  );
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Todo;