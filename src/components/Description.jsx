import React from "react";
import { useState, useEffect } from "react";

// getting values from local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("Org");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Description() {
  //main array of objects
  const [Org, setOrg] = useState(getDatafromLS());

  //User Input State
  const [communityName, setCommunityName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [communityLogo, setcommunityLogo] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState();
  const [tagline, setTagline] = useState("");
  const [Description, setDescription] = useState("");

  const handleOrgSubmit = (e) => {
    e.preventDefault();
    //create an obj
    let organization = {
      communityName,
      firstName,
      lastName,
      companyName,
      email,
      tagline,
      communityLogo,
      profilePic,
      Description,
    };
    setOrg([organization]);
    setCommunityName("");
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setTagline("");
    setcommunityLogo("");
    setprofilePic("");
    setDescription("");
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Org", JSON.stringify(Org));
  }, [Org]);
  return Org.map((organization) => (
    <>
      <section class="w-full px-8 py-8 bg-white xl:px-0">
        <div class="max-w-4xl mx-auto tracking-tighter">
          <div className="uppercase font-medium tracking-tighter text-blue-500">
            Community Description
          </div>
          <h2 class="text-xl font-bold leading-tight md:tracking-tight text-gray-700  md:text-3xl">
            {organization.Description}
          </h2>
        </div>
      </section>
    </>
  ));
}

export default Description;
