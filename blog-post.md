The Container Components are key.

A container component is just a React component that:

- uses `store.subscribe()` to read a part of the Redux state tree and supply props to a presentational component it renders.
- uses `connect()` with `mapStateToProps`. `mapStateToProps` tells  the current Redux store how to transform the state into the props you want to pass to a presentational component you are wrapping.  From the docs:



For example, VisibleTodoList needs to calculate todos to pass to the TodoList, so we define a function that filters the state.todos according to the state.visibilityFilter, and use it in its `mapStateToProps`:

    const getVisibleTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_ALL':
          return todos
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)
      }
    }

    const mapStateToProps = (state) => {
      return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
      }
    }

In addition to reading the state, container components can dispatch actions. In a similar fashion, you can define a function called `mapDispatchToProps()` that receives the `dispatch()` method and returns callback props that you want to inject into the presentational component. For example, we want the VisibleTodoList to inject a prop called onTodoClick into the TodoList component, and we want onTodoClick to dispatch a TOGGLE_TODO action:

    const mapDispatchToProps = (dispatch) => {
      return {
        onTodoClick: (id) => {
          dispatch(toggleTodo(id))
        }
      }
    }

Finally, we create the VisibleTodoList by calling `connect()` and passing these two functions:

    import { connect } from 'react-redux'

    const VisibleTodoList = connect(
      mapStateToProps,
      mapDispatchToProps
    )(TodoList)

    export default VisibleTodoList


Passing the Store

All container components need access to the Redux store so they can subscribe to it. One option would be to pass it as a prop to every container component. However it gets tedious, as you have to wire store even through presentational components just because they happen to render a container deep in the component tree.

The option we recommend is to use a special React Redux component called `<Provider>` to magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component:

    index.js

    import React from 'react'
    import { render } from 'react-dom'
    import { Provider } from 'react-redux'
    import { createStore } from 'redux'
    import todoApp from './reducers'
    import App from './components/App'

    let store = createStore(todoApp)

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')




