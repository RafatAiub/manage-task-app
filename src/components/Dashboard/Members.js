import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import MemberTable from "./MemberTable";

const Members = () => {
  const [member, setMember] = useState([]);
  const [data, setData] = useState([]);

  //console.log(data);

  const findOcc = (arr, key) => {
    let arr2 = [];

    arr.forEach((x) => {
      // Checking if there is any object in arr2
      // which contains the key value
      if (
        arr2.some((val) => {
          return val[key] === x[key];
        })
      ) {
        // If yes! then increase the totalNumberOfTask by 1
        arr2.forEach((k) => {
          if (k[key] === x[key]) {
            k["totalNumberOfTask"]++;
          }
        });
      } else {
        // If not! Then create a new object initialize
        // it with the present iteration key's value and
        // set the totalNumberOfTask to 1
        let a = {};
        a[key] = x[key];
        a["totalNumberOfTask"] = 1;
        arr2.push(a);
      }
    });

    return arr2;
  };

  //fetch members
  const fetchMember = async () => {
    const res = await api.get("/tasks");
    return res.data;
  };

  useEffect(() => {
    const getMembers = async () => {
      const allMembers = await fetchMember();
      if (allMembers) setMember(allMembers);
    };
    getMembers();
  }, []);
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/create-new-member");
  };

  //passing name as key from member obj && this findOcc function return an new obj with {name,totalNumberOfTask} pair
  let key = "assignTo";
  useEffect(() => {
    const finalData = findOcc(member, key);
    setData(finalData);
    //console.log(finalData);
  }, [member, key]);

  return (
    <Navbar>
      <div className="mockup-window border border-base-300 mt-5">
        <div className="justify-center px-4 py-4 border-t border-base-300">
          <div className="hero max-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="overflow-x-auto border-red-200">
                <table className="table w-full border rounded-lg">
                  <thead>
                    <tr>
                      <th>Member Name</th>
                      <th>Number Of Tasks</th>
                    </tr>
                  </thead>
                  {data.length &&
                    data.map((d) => {
                      return <MemberTable d={d} />;
                    })}
                </table>
              </div>
              <div>
                <button className="btn btn-outline btn-success" onClick={goTo}>
                  Create New Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default Members;
