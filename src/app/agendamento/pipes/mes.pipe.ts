import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'mes',
  standalone: true
})
export class MesPipe implements PipeTransform {

  transform(horario: string): string {
    let mesFormatado : moment.Moment = moment(horario,"YYYY-MM-DD")
    return mesFormatado.format("MM");
  }

}
