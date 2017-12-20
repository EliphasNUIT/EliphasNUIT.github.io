import { Injectable, Pipe, PipeTransform } from '@angular/core';
// import { buildDatabase, ProfBuild } from './helpers/profBuild';



@Pipe({
  name: 'dbSearch'
})
@Injectable()
export class DbSearchPipe implements PipeTransform {

  transform(items: { name: string, id: string }[], filter: string): any {
    if (!items) {
      return [];
    }
    return items.filter(function (elt) {
      // const filters = filter.split('&');
      /*if (filters.length > 1) {
        const build = buildDatabase.get(elt.id);
        if (!build) {
          return false;
        }
        let res = true;
        for (let i = 0; i < filters.length; i++) {
          const pair = filters[i].split('=');
          const id = pair[0];
          const value = pair[1];
          res = true;
        }
        return res;
      } else {*/
      return elt.id.toUpperCase().includes(filter.toLocaleUpperCase());
      // }
    });
  }

}
