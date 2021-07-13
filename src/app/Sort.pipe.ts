import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe {
  transform(array: any): any {
    array = array || [];
    return array.sort((a: any, b: any) => {
      if (a.GameName < b.GameName) {
        return -1;
      } else if (a.GameName > b.GameName) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}