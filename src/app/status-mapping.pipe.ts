import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMapping',
  standalone: true
})
export class StatusMappingPipe implements PipeTransform {
  transform(statusId: string): string {
    switch (statusId) {
      case '0':
        return 'Design';
      case '1':
        return 'Iniciado';
      case '2':
        return 'Interrompido';
      case '3':
        return 'Finalizado';
      default:
        return 'Desconhecido'
    }
  }
}
