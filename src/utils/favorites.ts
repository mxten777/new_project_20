
const FAVORITES_KEY = 'favoriteServices';

export function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  } catch {
    return [];
  }
}

export function setFavorites(ids: string[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

export function toggleFavorite(id: string) {
  const current = getFavorites();
  if (current.includes(id)) {
    setFavorites(current.filter(f => f !== id));
  } else {
    setFavorites([...current, id]);
  }
}

export function isFavorite(id: string) {
  return getFavorites().includes(id);
}
