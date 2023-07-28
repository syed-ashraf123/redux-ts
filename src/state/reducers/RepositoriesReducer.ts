import { ActionTypes } from "../action-types";
import { RepositoriesState, Action } from "../action";
const initialState = {
  loading: false,
  error: null,
  data: [],
};
const Reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default Reducer;
