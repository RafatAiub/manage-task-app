import { useEffect, useState } from "react";
import api from "../../api/api";

const UserHook = () => {
  const [users, setUsers] = useState({});
  const fetchMember = async () => {
    const res = await api.get("/users");
    return res.data;
  };

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await fetchMember();
      if (allUsers) setUsers(allUsers);
    };
    getUsers();
  }, []);
  return users;
};

export default UserHook;
