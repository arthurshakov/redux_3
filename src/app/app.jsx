import { useEffect } from 'react';
import { ControlPanel, Todo } from '../components';
import { readTodos } from '../actions';
import styles from './app.module.css';

import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const { searchPhrase, isAlphabetSorting }  = useSelector(state => state.options);

  useEffect(() => {
    dispatch(readTodos(searchPhrase, isAlphabetSorting));
	}, [searchPhrase, isAlphabetSorting, dispatch]);

	return (
		<div className={styles.app}>
			<ControlPanel />
			<div>
				{todos.map(({ id, title, completed }) => (
					<Todo key={id} id={id} title={title} completed={completed} />
				))}
			</div>
		</div>
	);
};
