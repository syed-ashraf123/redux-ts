import axios from "axios";
import { ActionTypes } from "../action-types";
import { Dispatch } from "react";
import { Action } from "../action";
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios("https://registry.npmjs.org./-/v1/search", {
        params: {
          text: term,
        },
      });
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: data.objects.map((r: any) => r.package.name),
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
