interface Array<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): NonNullable<T>[];
}
