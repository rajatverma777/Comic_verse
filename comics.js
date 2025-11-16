/* comics.js - static dataset (window.COMICS) */
const COMICS = [
  {
    id: "004",
    title: "The Boys (Omnibus)",
    series: "The Boys",
    publisher: "Dynamite Entertainment",
    characters: ["Billy Butcher", "Wee Hughie", "Mother's Milk", "The Frenchman", "The Female"],
    genre: ["Superhero", "Action", "Dark Comedy", "Violence"],
    price: 100.00,
    release_date: "2024-01-01",
    img: "assets/images/images/the-boys-omnibus.jpg",
    synopsis:
      "Based on the hit Amazon Original series, 'The Boys' follows a black-ops team funded by the CIA whose mission is to monitor, control, and eliminate corrupt superheroes. In a world where superpowered individuals are worshipped like celebrities, many abuse their gifts. Billy Butcher and his crew—Wee Hughie, Mother's Milk, The Frenchman, and The Female—take on the responsibility of keeping the ‘supes’ in check, no matter how extreme the methods.",
    creators: {
      writer: "Garth Ennis",
      artist: "Not Provided"
    },
    audience: ["Adults (18+)"],
    theme: ["Fighting", "Humor", "Superhero", "Murder", "Friendship", "Mature"],
    art_style: ["Western Comics"],
    advisory_flags: ["Nudity", "Graphic Violence", "Drug Usage", "Obscene Language", "Sexual Content"],
    stats: {
      views: "1M",
      shelves: 7771,
      releases: 6,
      rating: "17+"
    }
  },

  {
    id: "005",
    title: "Ben 10: Max World",
    series: "Ben 10",
    publisher: "Bechikingston",
    characters: ["Ben Tennyson", "Gwen Tennyson", "Grandpa Max", "Vilgax"],
    genre: ["Superhero", "Sci-Fi", "Action", "Space", "Aliens"],
    price: 250.00,
    release_date: "2024-01-01",
    img: "assets/images/images/ben10-max-world.jpg",
    synopsis:
      "After a devastating surprise attack on Earth’s Plumber HQ by Vilgax, Ben and Gwen lose their lives while Grandpa Max is away on an off-world mission. Returning home to unimaginable tragedy, Max inherits the Omnitrix and sets out on a dark, vengeance-driven path to confront Vilgax and the forces that destroyed his family.",
    creators: {
      writer: "Bechikingston",
      artist: "Not Provided"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Fighting", "Space", "Superhero", "Aliens", "Antihero"],
    time_era: "Non-applicable (Earth timeline not applicable)",
    art_style: ["Toon", "Western Comics"],
    advisory_flags: ["Graphic Violence"],
    stats: {
      views: "2K",
      shelves: 248,
      releases: 1,
      rating: "13+"
    }
  },

  {
    id: "006",
    title: "Venom (2021)",
    series: "Venom",
    publisher: "Marvel",
    characters: ["Eddie Brock", "Venom", "Dylan Brock"],
    genre: ["Superhero", "Sci-Fi", "Action", "Horror"],
    price: 400.00,
    release_date: "2021-10-01",
    img: "assets/images/images/venom-2021.jpg",
    synopsis:
      "Launching after the events of Venom #200 and Extreme Carnage, this new era of Venom pushes the symbiote legacy into bold, mind-bending territory. Writers Al Ewing and Ram V unite to craft a dark, reality-shifting tale of symbiosis, while legendary artist Bryan Hitch delivers cinematic visuals.",
    creators: {
      writer: "Al Ewing, Ram V",
      artist: "Bryan Hitch",
      cover_artist: "Bryan Hitch"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "4K",
      shelves: 205,
      releases: 10,
      rating: "13+"
    }
  },

  {
    id: "007",
    title: "Amazing Spider-Man: Torn (2025)",
    series: "Amazing Spider-Man",
    publisher: "Marvel",
    characters: ["Peter Parker", "Gwen Stacy", "Harry Osborn", "Mary Jane Watson", "Flash Thompson"],
    genre: ["Superhero", "Action", "Drama"],
    price: 1500.00,
    release_date: "2025-01-01",
    img: "assets/images/images/amazing-spider-man-torn-2025.jpg",
    synopsis:
      "J. Michael Straczynski returns for a new story set during Peter’s college years at ESU. A mysterious threat emerges that will forever reshape Spider-Man’s early history.",
    creators: {
      writer: "J. Michael Straczynski",
      artist: "Pere Perez",
      cover_artist: "Adam Hughes, Greg Land, Humberto Ramos, Mark Chiarello"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "1K",
      shelves: 77,
      releases: 2,
      rating: "13+"
    }
  },

  {
    id: "008",
    title: "Captain America (2025)",
    series: "Captain America",
    publisher: "Marvel",
    characters: ["Steve Rogers", "Victor Von Doom", "Doctor Doom"],
    genre: ["Superhero", "Action", "Political Thriller"],
    price: 270.00,
    release_date: "2025-01-01",
    img: "assets/images/images/captain-america-2025.jpg",
    synopsis:
      "Steve Rogers awakens to a new world of espionage and hidden warfare. When Victor Von Doom rises as a dictator, Steve faces his first legendary confrontation with Doctor Doom.",
    creators: {
      writer: "Chip Zdarsky",
      artist: "Valerio Schiti",
      cover_artist: "Ben Harvey"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "1K",
      shelves: 46,
      releases: 4,
      rating: "13+"
    }
  },

  {
    id: "009",
    title: "Spider-Man '94 (2025)",
    series: "Spider-Man",
    publisher: "Marvel",
    characters: ["Spider-Man", "Kaine", "Morlun"],
    genre: ["Superhero", "Action", "Adventure"],
    price: 190.00,
    release_date: "2025-01-01",
    img: "assets/images/images/spider-man-94-2025.jpg",
    synopsis:
      "After a fierce encounter with Kaine, Spider-Man seeks answers that lead him into a deeper conspiracy tied to Morlun as the animated universe expands.",
    creators: {
      writer: "J.M. DeMatteis",
      artist: "James Towe, Jim Towe",
      cover_artist: "Nick Bradshaw"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "1K",
      shelves: 65,
      releases: 3,
      rating: "13+"
    }
  },

  {
    id: "010",
    title: "Ghost Rider (2006)",
    series: "Ghost Rider",
    publisher: "Marvel",
    characters: ["Johnny Blaze", "Ghost Rider"],
    genre: ["Superhero", "Occult", "Action", "Horror"],
    price: 389.00,
    release_date: "2006-01-01",
    img: "assets/images/images/ghost-rider-2006.jpg",
    synopsis:
      "Johnny Blaze is trapped in Hell with the Spirit of Vengeance bound to his soul. When he finds a way out, the cost may be devastating as the Ghost Rider rides again.",
    creators: {
      writer: "Jason Aaron",
      penciler: "Roland Boschi, Tan Eng Huat",
      cover_artist: "Arthur Suydam, Gerald Parel, Marc Silvestri, Marko Djurdjevic"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero", "Occult"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "3K",
      shelves: 149,
      releases: 13,
      rating: "13+"
    }
  },

  {
    id: "011",
    title: "Avengers (2023)",
    series: "Avengers",
    publisher: "Marvel",
    characters: ["Avengers Team", "Doctor Doom", "Masters of Evil"],
    genre: ["Superhero", "Action", "Adventure"],
    price: 545.00,
    release_date: "2023-01-01",
    img: "assets/images/images/avengers-2023.jpg",
    synopsis:
      "As the Avengers battle Doctor Doom, a newly formed Masters of Evil launch a catastrophic attack in this giant-sized 25th issue.",
    creators: {
      writer: "Jed Mackay, Kalinda Vasquez",
      artist: "Andrea Broccardo, C.F. Villa, Farid Karami, Francesco Mortarino, Javier Pina, Valerio Schiti",
      penciler: "C.F. Villa",
      cover_artist: "CAFU, Joshua Cassara, Russell Dauterman, Stuart Immonen, Valerio Schiti"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "5K",
      shelves: 126,
      releases: 32,
      rating: "13+"
    }
  },

  {
    id: "012",
    title: "Spider-Man Noir (2025)",
    series: "Spider-Man Noir",
    publisher: "Marvel",
    characters: ["Peter Parker (Noir)", "Gwen Stacy", "George Stacy"],
    genre: ["Superhero", "Noir", "Mystery", "Action"],
    price: 820,
    release_date: "2025-01-01",
    img: "assets/images/images/spider-man-noir-2025.jpg",
    synopsis:
      "In 1930s New York, detective Peter Parker becomes entangled in a deadly mystery when Gwen Stacy hires him to solve her father's murder.",
    creators: {
      writer: "Erik Larsen",
      artist: "Andrea Broccardo",
      penciler: "Marika Cresta",
      cover_artist: "Simone Di Meo"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "829",
      shelves: 85,
      releases: 2,
      rating: "13+"
    }
  },

  {
    id: "013",
    title: "Invincible Iron Man (2016)",
    series: "Invincible Iron Man",
    publisher: "Marvel",
    characters: ["Riri Williams", "Tony Stark (mentioned)"],
    genre: ["Superhero", "Action", "Sci-Fi"],
    price: 290.00,
    release_date: "2016-01-01",
    img: "assets/images/images/invincible-iron-man-2016.jpg",
    synopsis:
      "A new armored hero rises as Riri Williams builds her own Iron Man armor and steps into a world of danger, responsibility, and innovation.",
    creators: {
      writer: "Brian Michael Bendis",
      penciler: "Stefano Caselli",
      cover_artist: "Daniel Acuna, Jesus Saiz, Stefano Caselli"
    },
    audience: ["Teenagers (13-18)", "Adults (18+)"],
    theme: ["Superhero"],
    art_style: ["Western Comics"],
    advisory_flags: [],
    stats: {
      views: "1K",
      shelves: 47,
      releases: 11,
      rating: "13+"
    }
  }
];
window.COMICS = COMICS;
