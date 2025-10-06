import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(
    value: string,
    terms: string[] = [],
    highlightTag: string = 'mark',
    highlightClass: string = '',
    wrapperTag?: string,
    wrapperClass: string = ''
  ): string {
    if (!value) return value;

    let output = value;

    if (Array.isArray(terms) && terms.length > 0) {
      const escaped = terms
        .filter(Boolean)
        .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

      if (escaped.length > 0) {
        const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
        const classAttr = highlightClass ? ` class=\"${highlightClass}\"` : '';
        output = output.replace(regex, `<${highlightTag}${classAttr}>$1</${highlightTag}>`);
      }
    }

    if (wrapperTag) {
      const wrapAttr = wrapperClass ? ` class=\"${wrapperClass}\"` : '';
      output = `<${wrapperTag}${wrapAttr}>${output}</${wrapperTag}>`;
    }

    return output;
  }
}
