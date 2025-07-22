import { Column, ColumnOptions } from "typeorm";

export function NullableColumn(options: ColumnOptions = {}) {
  return Column({ nullable: true, ...options });
}
