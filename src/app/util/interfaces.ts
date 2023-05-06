export interface Checkout {
  id:string,
  count:number,
  date:string,
  user_id:number,
  events:Event
}

export interface Card{
  name:string,
  number:string,
  expiration:string,
  cvv:number,
  id:string
}
export interface Event {
  id: string;
  date: string;
  time: string;
  name: string;
  title: string;
  venue: string;
  picture: string;
  host: {
    name: string;
    picture: string;
  }
  amount: number;
}
