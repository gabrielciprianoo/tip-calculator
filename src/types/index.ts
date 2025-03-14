export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

export type Order = MenuItem & {
  quantity: number;
};
