import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

// getting values from local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("Org");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function UserInputForm() {
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
    var element = document.getElementById("profile");
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      const profile = String(reader.result);
      console.log(reader.result);
      sessionStorage.setItem("profile", profile);
    };
    reader.readAsDataURL(file);

    var element2 = document.getElementById("community_logo");
    var file2 = element2.files[0];
    var reader2 = new FileReader();
    reader2.onloadend = function () {
      const clogo = String(reader2.result);
      console.log(reader2.result);
      sessionStorage.setItem("logo", clogo);
    };
    reader2.readAsDataURL(file2);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Org", JSON.stringify(Org));
  }, [Org]);

  return (
    <>
      <div className="py-10 bg-white md:py-16">
        <div className="px-10 mx-auto max-w-7xl md:px-16">
          <div className="py-4 flex justify-end">
            {Org.length < 1 && (
              <div className="text-sm">
                Fill The Form & See Preview Button Pop-up Here!
              </div>
            )}
            {Org.length > 0 && (
              <a href="/">
                <button className="px-6 py-2 mt-2 animate-bounce shadow-lg hover:bg-blue-700 bg-blue-400 rounded-xl text-white">
                  Preview!
                </button>
              </a>
            )}
          </div>
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <p className="text-xs font-bold text-blue-500 uppercase">
              By Pensil ❤️
            </p>
            <h2 className="mt-1 text-2xl font-bold text-left text-gray-800 lg:text-3xl md:mt-2">
              Start Your Own Community!
            </h2>
            <p className="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6">
              Fill out some simple questions below and get started with your
              brand new community! If you need some help, you can contact us{" "}
              <a
                href="mailto:siddheshkulthe43@gmail.com"
                className="font-medium text-blue-500 underline"
              >
                here
              </a>
              !
            </p>
          </div>
          <form
            className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2"
            onSubmit={handleOrgSubmit}
          >
            <div>
              <label
                for="first-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Name
              </label>
              <input
                name="community-name"
                onChange={(e) => setCommunityName(e.target.value)}
                value={communityName}
                placeholder="Awesome Coders"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <br />
            <div>
              <label
                for="first-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Logo
              </label>
              <input
                name="community-logo"
                id="community_logo"
                onChange={(e) => setcommunityLogo(e.target.value)}
                value={communityLogo}
                placeholder="Community Logo"
                type="file"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <br />
            <div className="col-span-1">
              <label
                for="Profile Image"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Profile Image
              </label>
              <input
                id="profile"
                name="Profile Image"
                type="file"
                accept="image/*"
                multiple="false"
                onChange={(e) => setprofilePic(e.target.value)}
                value={profilePic}
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              ></input>
            </div>
            <br />
            <div>
              <label
                for="first-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                First name
              </label>
              <input
                name="first-name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Jon"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                for="last-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Last name
              </label>
              <input
                name="last-name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Snow"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="company"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Company Name
              </label>
              <input
                name="company"
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
                placeholder="Sample Company. Co"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="email"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Email
              </label>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="dudethisiscool23@gmail.com"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="Community-Tagline"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Tagline
              </label>
              <input
                name="Community-Tagline"
                onChange={(e) => setTagline(e.target.value)}
                value={tagline}
                placeholder="Rising Coders Of Today!"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="Community-Description"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Description
              </label>
              <input
                name="Community-Description"
                onChange={(e) => setDescription(e.target.value)}
                value={Description}
                placeholder="Blah Blah Blah :)"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="col-span-2">
              <button className="px-6 py-2 mt-2 shadow-lg hover:bg-blue-700 bg-blue-500 rounded-xl text-white">
                Submit
              </button>
            </div>
          </form>
          <div>
            {Org.length > 0 && (
              <p className="text-green-600 tracking-tight text-lg p-4">
                Great! Checkout the preview of your community by clicking <br />
                the preview button unlocked above!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInputForm;
