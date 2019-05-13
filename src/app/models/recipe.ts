export interface Recipe {
    id: number;
    title: string;
    nameToSearch: string;
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
