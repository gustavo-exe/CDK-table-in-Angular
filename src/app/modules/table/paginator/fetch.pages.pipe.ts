import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fetchPages"
})
export class FetchPages implements PipeTransform {
  transform(pages: any[] | null): any {
    if (pages) {
      return pages.reduce((acc, page) => {
        if (!isNaN(page)) {
          acc.push({
            page: true,
            value: page
          });
        } else {
          acc.push({
            page: false,
            value: page
          });
        }
        return acc;
      }, []);
    }
  }
}
