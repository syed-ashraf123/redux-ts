import { ActionTypes } from "../action-types";

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
