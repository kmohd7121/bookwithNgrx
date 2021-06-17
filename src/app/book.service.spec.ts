import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BookService } from './book.service';
import { Post} from './post';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from api', () => {
    const dummyPosts:Post[]=[{
      id:1,
      bookName:"hello",
      publisher:"sumit",
      publishedAt:"20/02/2021"
    },{
      id:1,
      bookName:"hello",
      publisher:"sumit",
      publishedAt:"20/02/2021"
    },
    {
      id:1,
      bookName:"hello",
      publisher:"sumit",
      publishedAt:"20/02/2021"
    }]

    service. getBooks().subscribe(data=>{
      expect(data.length).toBe(3);
      expect(data).toEqual(dummyPosts);
    })

    const request = httpMock.expectOne(service.url);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts)
  })
});
