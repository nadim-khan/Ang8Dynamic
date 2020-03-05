import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, tr): any {
    console.log("Value : "+value+ ", Transform to : "+tr);
    if((typeof value) == 'string'){
      return 'Hello'+" "+ value.toUpperCase();
    }else{
      return value = "$"+value/73.34 +" /-";
    }
    
  }

}
