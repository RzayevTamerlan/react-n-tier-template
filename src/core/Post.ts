import { Base } from '@core/Base.ts';

export type Post = Base & {
  title: string;
  body: string;
  userId: number;
};
