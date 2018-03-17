import { Injectable, Pipe, PipeTransform } from '@angular/core';

/**
 * Search bar pipeline
 */
@Pipe({
  name: 'dbSearch'
})
@Injectable()
export class DbSearchPipe implements PipeTransform {

  /**
   * Get filtered items
   * @param items Items to filter
   * @param filter Filter
   */
  transform(items: { name: string, id: string }[], filter: string): any {
    if (!items) {
      return [];
    }
    return items.filter(function (elt) {
      const filters = filter.split(' ');
      if (filters.length > 1) {
        for (let i = 0; i < filters.length; i++) {
          const value = filters[i];
          if (!elt.name.toUpperCase().includes(value.toLocaleUpperCase())) {
            return false;
          }
        }
        return true;
      } else {
        return elt.name.toUpperCase().includes(filter.toLocaleUpperCase());
      }
    });
  }

}
