import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'localDateTime',
  standalone: true
})
export class LocalDateTimePipe implements PipeTransform {

  transform(data: string): string {
    let dataFormatada : moment.Moment = moment(data,"YYYY-MM-DDTHH:mm:ss");
    return dataFormatada.format("DD-MM-YYYY HH:mm");
  }

}
