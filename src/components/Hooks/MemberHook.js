import { useEffect, useState } from "react";
import api from "../../api/api";

const MemberHook = () => {
  const [members, setMembers] = useState({});
  const fetchMember = async () => {
    const res = await api.get("/members");
    return res.data;
  };

  useEffect(() => {
    const getMembers = async () => {
      const allmembers = await fetchMember();
      if (allmembers) setMembers(allmembers);
    };
    getMembers();
  }, []);
  return members;
};

export default MemberHook;
