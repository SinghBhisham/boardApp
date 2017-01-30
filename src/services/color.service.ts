let colors: string [] = [
  "#4E74F0",
  "#E44929",
  "#FF7A00",
  "#BDA100",
  "#E36CA2",
  "#591880",
  "#3AB961",
  "#654BAF",
  "#1B3880",
  "#9D1850",
  "#DB9400",
  "#008930"
];
export class ColorService{
  getRandomColor(): string{
    let rnd:number = Math.floor(Math.random()*colors.length);
    return colors[rnd];
  }
}
