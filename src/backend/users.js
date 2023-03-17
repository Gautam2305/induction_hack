import { v4 as uuid } from "uuid";
import { formatDate } from "./AuthUtil";

export const users = [
  {
    _id: uuid(),
    username: "Gautam",
    email: "a@gmail.com",
    password: "abc123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
