import { PracticeService } from './../service/practice.service';
import { Component, OnInit } from '@angular/core';
import { bookType } from '../service/bookModel';
import { Observable } from 'rxjs';
import { SearchPipe } from '../pipe/search.pipe';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  bookData:bookType[];
  getCss;
  allBooks:Observable<bookType[]>;
  curBookDetails=[];
  curBookAsyncDetails=[];
  bookToBuy;
  searchText;
  hideIt=false;
  showDetails=false;
  name = 'Angular';

  constructor(private pService:PracticeService) { 

  }

  ngOnInit() {
    this.getCss= {
      'halfWidth':false,
    }
    this.pService.getBookData()
    .subscribe(books=>{
      this.bookData=books;
    });

    this.allBooks = this.pService.getBookData(); 
  }
  searchIt(text){
    this.searchText=text;
    this.getCss= {
      'halfWidth':false,
    }
  }

  bookDetails(isbn){
    this.hideIt=false;
    this.curBookDetails=[];
    this.getCss= {
      'halfWidth':true,
      'bookScrollView':false
    }
    this.bookData.forEach(curDetails=>{
      if(curDetails.isbn===isbn){
        this.curBookDetails.push(curDetails);
        console.log("Book Detail : ",this.curBookDetails)
      }
    });
  }
  buyBook(isbn){
    this.bookToBuy=this.bookDetails(isbn);
    console.log("Book to Buy : ",this.bookToBuy)
  }

  bookDetailsAsync(isbn){
    this.curBookAsyncDetails=[];
    this.bookData.forEach(curDetails=>{
      if(curDetails.isbn===isbn){
        this.curBookAsyncDetails.push(curDetails);
        console.log("Async Book Detail : ",this.curBookAsyncDetails)
      }
    });
  }
  closeView(){
    this.hideIt=true;
    this.getCss= {
      'halfWidth':false,
    }
  }

}




