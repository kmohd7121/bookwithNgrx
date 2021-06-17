import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { get_BOOK, GET_BOOKS_ACTION_SUCCESS, get_BOOK_SUCCESS } from "./book.action";
import { initialState } from "./book.state";



export const bookReducer=createReducer(initialState,on(get_BOOK,(state,action)=>{
    return{
        ...state,
        books:state.books
        // id:action.id,
        // bookName:action.bookName,
        // author:action.author,
        // publisher:action.publisher,
        // publishedAt:action.action.publishedAt
    }
    
}),on(get_BOOK_SUCCESS,(state, action)=>{
    console.log(action)
    return {
        ...state,
        books:action.books

    }
}))

export function BookReducer(state: any, action: any): any {
    return bookReducer(state, action);
}