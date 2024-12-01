
abstract class FavoriteManager {
    protected favorites: Set<string>; 
  
    constructor() {
      this.favorites = new Set();
    }
  
  
    abstract addFavorite(item: string): void;
  
    getFavorites(): string[] {
      return Array.from(this.favorites);
    }
  }
  

  class MoviesFavoriteManager extends FavoriteManager {
  
  
    addFavorite(item: string): void {

      if (!this.favorites.has(item)) {
        this.favorites.add(item);
        console.log(`Filme "${item}" adicionado aos favoritos.`);
      } else {
        console.log(`Filme "${item}" já está na lista de favoritos.`);
      }
    }
  
   
    getFavorites(): string[] {
      const sortedFavorites = Array.from(this.favorites).sort(); 
      return sortedFavorites;
    }
  }
  

  class BooksFavoriteManager extends FavoriteManager {
  

    addFavorite(item: string): void {
      this.favorites.add(item); 
      console.log(`Livro "${item}" adicionado aos favoritos.`);
    }
  

    getFavorites(): string[] {
   
      return Array.from(this.favorites).reverse(); 
    }
  }
  

  

  const movieManager = new MoviesFavoriteManager();
  movieManager.addFavorite("Inception");
  movieManager.addFavorite("Interstellar");
  movieManager.addFavorite("The Dark Knight");
  movieManager.addFavorite("Inception"); 
  console.log("Filmes Favoritos:", movieManager.getFavorites());
  
  // Gerenciando livros favoritos
  const bookManager = new BooksFavoriteManager();
  bookManager.addFavorite("1984");
  bookManager.addFavorite("Brave New World");
  bookManager.addFavorite("Fahrenheit 451");
  bookManager.addFavorite("1984"); 
  console.log("Livros Favoritos:", bookManager.getFavorites());
  