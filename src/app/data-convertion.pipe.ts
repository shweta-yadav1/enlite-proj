import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataConvertion'
})
export class DataConvertionPipe implements PipeTransform {

  transform(value: string): unknown {

        return  Math.round(+value);


  }

}
