import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    const terms = ['isbn', 'title', 'status' ];
    const Result = [];
    console.log(value + ' : ' + searchText );
    if (!searchText) {
      return value;
    }
    if (!value) {
      alert('No Data Available');
    }
    return this.searchData(value, searchText.toLowerCase() );
  }

  searchData(value: any, searchText) {
    const Result = [];
    value.forEach(data => {
      // tslint:disable-next-line: max-line-length
      if (data.isbn.toLowerCase().includes(searchText) || data.title.toLowerCase().includes(searchText) || data.status.toLowerCase().includes(searchText)) {
        Result.push(data);
      }
      data.categories.forEach(cat => {
        if (cat.toLowerCase().includes(searchText)) {
          Result.push(data);
          console.log('cat');
        }
      });
      data.authors.forEach(auth => {
        if (auth.toLowerCase().includes(searchText)) {
          console.log('auth');
          Result.push(data);
        }
      });

    });
    if (Result.length < 1) {
      alert('No Records found for your search');
  }
    return Result;
  }

}
