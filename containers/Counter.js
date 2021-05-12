// importamos la función connect
import { connect } from 'react-redux';
import { Counter } from '../components/Counter';

// le indicamos que queremos que se pase como prop al componente con mapStateToProp
const mapStateToProp = state => {
  return { counter: state.counter };
};

// con el mapDispatchToProps enviamos en un objeto las acciones con las que queremos modificar el estado. Cada una de las keys del obj llegará como prop a nuestro componente
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};

// creamos la conexión con el metodo connect pasándole los 2 parámetros. A su vez estamos guardando una función, la cual podemos ejecutar pasándole el componente que queremos conectar
const createConnection = connect(
  mapStateToProp,
  mapDispatchToProps
);

const ComponentWithConnectionWithRedux = createConnection(Counter);

// exportamos el cointainer, que siguiendo el patrón contenedor-contenido es el que contiene las conexiones con Redux
export default ComponentWithConnectionWithRedux;
