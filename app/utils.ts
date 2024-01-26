interface Route {
  id: number;
  name: string;
  location?: {
    name: string;
    indoor: boolean;
  };
  send: boolean;
  type: "sport" | "top-rope" | "boulder" | "trad";
  notes?: {
    myGrade?: string;
    enjoyment?: number;
    notes?: string;
  }
};

interface Session {
  id: number;
  date: Date; // time is a part of the date object
  location: {
    name: string;
    indoor: boolean;
  };
  routes: Route[];
  notes?: {
    weather?: string;
    notes?: string;
  }
}
