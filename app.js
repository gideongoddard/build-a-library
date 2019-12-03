// MEDIA CLASS
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    get ratings() {
      return this._ratings;
    }
    
    set isCheckedOut(checkOutStatus) {
      this._isCheckedOut = checkOutStatus;
    }
    
    getAverageRating() {
      let sumRating = this._ratings.reduce( (a, b) => a + b, 0);
      let averageRating = Math.round((sumRating / this._ratings.length) * 10) / 10;
      return averageRating;
    }
    
    toggleCheckOutStatus() {
      if (this._isCheckedOut) {
        this._isCheckedOut = false;
      } else {
        this._isCheckedOut = true;
      }
    }
    
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  }
  
  // BOOK CLASS
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    
    get author() {
      return this._author;
    }
    
    get pages() {
      return this._pages;
    }
  }
  
  // MOVIE CLASS
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() {
      return this._director;
    }
    
    get runTime() {
      return this._runTime;
    }
  }
  
  // CD CLASS
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist() {
      return this._artist;
    }
    
    get songs() {
      return this._songs;
    }
  }
  
  // Creating an instance of the Book class
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  // Checking out the book
  historyOfEverything.toggleCheckOutStatus();
  
  // Logging the details of the book to verify its checkout status
  console.log(historyOfEverything);
  
  // Adding ratings to the book
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // Logging the average rating of the book to verify averages
  console.log(historyOfEverything.getAverageRating());
  
  // Creating an instance of the Movie class
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  // Checking out the movie
  speed.toggleCheckOutStatus();
  
  // Logging the details of the movie to verify its checkout status
  console.log(speed);
  
  // Adding ratings to the movie
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  // Logging the average rating of the movie to verify averages
  console.log(speed.getAverageRating());