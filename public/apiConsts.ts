export const categories = ['mmorpg', 'shooter', 'strategy', 'moba',
    'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival',
    'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person',
    'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller',
    'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps',
    '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action',
    'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];

export const platforms = ['pc', 'browser'];

export const sortBy = ['release-date', 'popularity', 'alphabetical', 'relevance'];

export const queryParams = {
    categories: 'tag',
    sortBy: 'sort-by',
    platforms: 'platform',
};

export const ApiPaths = {
    base: 'https://free-to-play-games-database.p.rapidapi.com/api',
    // base: 'https://www.freetogame.com/api',
    category: 'games',
    product: 'game',
};
