import { Injectable } from "@angular/core";
import { BookService } from "../book.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getBooks } from "./book.selector";
import { get_BOOK, get_BOOK_SUCCESS } from "./book.action";
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class BookEffects {
    constructor(private service: BookService, private action: Actions) { }
    effectName2$ = createEffect(
        () => this.action.pipe(
            ofType(get_BOOK), exhaustMap(() => {
                return this.service.getBooks().pipe(map((books) => {
                    console.log(books);
                    return get_BOOK_SUCCESS(books);
                }));
            })
        )
    );
}

