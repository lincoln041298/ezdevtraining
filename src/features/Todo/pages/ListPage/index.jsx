import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [searchParams, setSeachParams] = useSearchParams();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => searchParams.get('status') || 'all');

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    // newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
    const queryParams = { status: 'all' };
    setSeachParams(queryParams);
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
    const queryParams = { status: 'completed' };
    setSeachParams(queryParams);
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
    const queryParams = { status: 'new' };
    setSeachParams(queryParams);
  };
  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
