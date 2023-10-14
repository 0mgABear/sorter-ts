// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
//as long as there's length, compare and swap functions, a class would be able to interact / use sorter!
//how to produce reproducible code
//good coding practices

export abstract class Sorter {
  abstract compare(leftIndext: number, rightIndex: number): boolean;
  abstract swap(leftIndext: number, rightIndex: number): void;
  abstract length: number;
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //type guard : collection must be array, union restriciton is lifted
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
