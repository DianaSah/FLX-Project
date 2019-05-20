export interface Recipe {
    id: string;
    title: string;
    imageSrc: string;
    description: string;
    cuisineType: string;
    rating?: number;
    isFavorite?: boolean;
    cookDuration: number;
    ingredients: string[];
    steps: string[];
    videos: string[];
}
