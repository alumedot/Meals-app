export interface IProps {
  title: string;
  duration: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
  onSelectMeal(): void;
}
