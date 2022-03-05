import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "types/User";

export const useFetchUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(0);
  const [users, setUsers] = useState<User[] | []>([]);

  const [states, setStates] = useState<string[] | []>([]);
  const [orderBy, setOrderBy] = useState<string>("name");

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    axios({
      method: "post",
      url: `/api/users?page=${page}`,
      data: { states, orderBy },
    })
      .then((res) => {
        if (mounted) {
          const { totalUsers, totalPages, limit, users } = res.data;

          setTotalUsers(totalUsers);
          setTotalPages(totalPages);
          setLimit(limit);
          setUsers(users);
        }
      })
      .catch(() => {
        if (mounted) {
          setTotalUsers(0);
          setTotalPages(0);
          setLimit(0);
          setUsers([]);
          setError(true);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [page, states, orderBy]);

  return {
    loading,
    error,
    totalUsers,
    totalPages,
    page,
    setPage,
    limit,
    users,
    states,
    setStates,
    orderBy,
    setOrderBy,
  };
};
