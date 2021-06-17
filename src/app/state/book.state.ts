import { Book } from "../models/books";

export interface BookState{
    books:any
}
export const initialState:BookState={
    books:[{ 
        "id": "1",
        "bookName": "bookName 1",
        "author": "author 1",
        "publisher": "publisher 1",
        "publishedAt": 1623843663
    }]
}