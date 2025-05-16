import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tablepipe' })
export class tablePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {}
}
