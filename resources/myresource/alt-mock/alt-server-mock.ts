export const on = () => {};
export const emitClient = () => {};
export class Player {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export const log = (text: string) => {
  console.log(text);
};
