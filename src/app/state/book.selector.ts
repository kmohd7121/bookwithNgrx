import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState } from "./book.state";

const getBookState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(getBookState, (state) =>
{
    return state.books;
});