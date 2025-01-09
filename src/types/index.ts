export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface Location {
  name: string;
  url: string;
}

type Status = "Alive | Dead | Unknown";
type Gender = "Female | Male | Genderless | unknown";
type Species =
  "Human|Alien|Humanoid|unknown|Poopybutthole|Mythological Creature|Animal|Robot|Cronenberg|Disease";

export interface Info {
  info: InfoClass;
}

interface InfoClass {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
