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
    const users: User[] = response.data.results.map(
      (user: User, index: number) => {
        return {
          id: index + 1,
          ...user,
        };
      }
    );

    const limit: number = 9;

    const { page } = req.query;
    const { states, orderBy } = req.body;

    if (orderBy === "name") {
      users.sort((a, b) => {
        if (a.name.first > b.name.first) return 1;
        if (a.name.first < b.name.first) return -1;
        return 0;
      });
    }

    if (orderBy === "state") {
      users.sort((a, b) => {
        if (a.location.state > b.location.state) return 1;
        if (a.location.state < b.location.state) return -1;
        return 0;
      });
    }

    let usersFiltered;
    let usersPage;
    let totalPages = 0;
    let totalUsers = 0;

    const startPosition = (+page - 1) * limit;
    const endPosition = +page * limit;

    if (states.length) {
      usersFiltered = users.filter((user) => {
        return states
          .map((state: string) => state.toLowerCase())
          .includes(user.location.state.toLowerCase());
      });
    } else {
      usersFiltered = users;
    }

    usersPage = usersFiltered.slice(startPosition, endPosition);
    totalUsers = usersFiltered.length;
    totalPages =
      totalUsers % limit === 0
        ? Math.trunc(totalUsers / limit)
        : Math.trunc(totalUsers / limit) + 1;

    res.status(200).json({
      totalUsers,
      totalPages,
      page: +page,
      limit: usersPage.length < limit ? usersPage.length : limit,
      users: usersPage,
    });
  } catch (error) {
    res.status(500);
  }
}
