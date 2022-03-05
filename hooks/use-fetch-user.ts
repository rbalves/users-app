import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "types/User";

export const useFetchUser = (id: string | string[] | undefined) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    axios
      .get(`/api/user/${id}`)
      .then((res) => {
        if (mounted) {
          setUser(res.data);
        }
      })
      .catch(() => {
        if (mounted) {
          setUser(null);
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
  }, [id]);

  return {
    loading,
    error,
    user,
  };
};
