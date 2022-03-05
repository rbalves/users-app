import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "types/User";

type UsersData = {
  totalUsers: number;
  totalPages: number;
  page: number;
  limit: number;
  users: User[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersData>
) {
  const response = await axios.get(
    "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json"
  );
  try {
    const users = response.data.results.map((user: User, index: number) => {
      return {
        id: index + 1,
        ...user,
      };
    });

    const { id } = req.query;
    const user = users.find((user: any) => user.id == id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
}
