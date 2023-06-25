import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libros'
})
export class LibrosPipe implements PipeTransform {

  transform(value: string): string {
    let referencia = "Ref-"+ value;
    return referencia;
  }

}
