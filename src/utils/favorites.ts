import { WelfareService } from '../data/sampleServices';

const FAVORITES_KEY = 'welfare_favorites';

export function getFavorites(): WelfareService[] {
  try {
    const favoritesJson = localStorage.getItem(FAVORITES_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  } catch {
    return [];
  }
}

export function isFavorite(serviceId: string): boolean {
  const favorites = getFavorites();
  return favorites.some(service => service.id === serviceId);
}

export function toggleFavorite(service: WelfareService): void {
  const favorites = getFavorites();
  const existingIndex = favorites.findIndex(fav => fav.id === service.id);
  
  if (existingIndex >= 0) {
    favorites.splice(existingIndex, 1);
  } else {
    favorites.push(service);
  }
  
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
