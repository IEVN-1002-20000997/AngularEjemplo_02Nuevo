import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Pipe({
  name: 'alumnoFilter'
})
export class AlumnosFilterPipe implements PipeTransform {
  transform(value: AlumnosUtl[] | null, args: string): AlumnosUtl[] | null {
    if (!value || !args) {
      return value; // Si no hay valor o argumento de filtro, devuelve el valor original
    }
    
    const filter = args.toLowerCase();

    return value.filter((alumno: AlumnosUtl) => {
      // Accede a la propiedad 'nombre' de cada 'alumno' en el filtro
      return alumno.nombre.toLowerCase().indexOf(filter) !== -1;
    });
  }
}
