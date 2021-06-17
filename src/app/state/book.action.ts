import { createAction, props } from "@ngrx/store";
import { Book } from "../models/books";

export const GET_BOOKS_ACTION = '[BOOKS page] add BOOKS';
export const GET_BOOKS_ACTION_SUCCESS = '[BOOKS page] add BOOKS';

export const get_BOOK = createAction(GET_BOOKS_ACTION);
export const get_BOOK_SUCCESS = createAction(GET_BOOKS_ACTION_SUCCESS,props<{books:any}>());

