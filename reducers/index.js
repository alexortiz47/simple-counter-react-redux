const INITIAL_STATE = {
  counter: 0
};

// reducer que se ejecutará al iniciarse nuestra app, de ahí que le indiquemos un valor por defecto del estado inicial
export function counterApp(state = INITIAL_STATE, action) {
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
