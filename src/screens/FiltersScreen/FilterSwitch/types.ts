export interface IProps {
  label: string;
  filterValue: boolean;
  onChange(filterValue: boolean): void;
  trackColor?: string;
}
