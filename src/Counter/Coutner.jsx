import { connect } from "react-redux";
import * as actions from "../redux/counter/counter-actions";

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div>
      <h1>{value}</h1>
      <h2>Шаг:{step}</h2>

      <button type="button" onClick={() => onIncrement(step)}>
        +
      </button>

      <button type="button" onClick={() => onDecrement(step)}>
        -
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch(actions.increment(step)),
  onDecrement: (step) => dispatch(actions.decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
