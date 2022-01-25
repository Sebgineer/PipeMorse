import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'mD5Pipe'
})
export class MD5PipePipe implements PipeTransform {

  transform(value: string): string {
    const md5: Md5 = new Md5();
    return md5.appendStr(value).end().toString();
  }

}
