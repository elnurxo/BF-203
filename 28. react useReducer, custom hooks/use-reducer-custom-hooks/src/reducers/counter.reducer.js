import ACTIONS from "../actions/counter.actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}
