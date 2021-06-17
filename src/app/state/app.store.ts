import { BookReducer, bookReducer } from "./book.reducer";
import { BookState } from "./book.state";

export interface AppState{
   books:BookState
}

export const appReducer =
{
    books:BookReducer
};