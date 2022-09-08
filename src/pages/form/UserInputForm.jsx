import React from "react";

function UserInputForm() {
  
  function submit(){
    sessionStorage.clear()
    let cname = document.getElementById("community_name").value;
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
    let ctagline = document.getElementById("community_tagline").value;
    let email = document.getElementById("email").value;
    sessionStorage.setItem("cname",cname);
    sessionStorage.setItem("fname",fname);
    sessionStorage.setItem("lname",lname);
    sessionStorage.setItem("ctagline",ctagline);
    sessionStorage.setItem("email",email);
    const comlogo = document.querySelector("#community_logo");

    comlogo.addEventListener("change",function(){
        const reader = new FileReader();
        reader.addEventListener("load",()=>{
          sessionStorage.setItem("logo",reader.result)
          console.log(reader.result)
        })
    })
  }
  return (
    <>
      <div className="py-10 bg-white md:py-16">
        <div className="px-10 mx-auto max-w-7xl md:px-16">
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
                href="mailto:saakshiraut28@gmail.com"
                className="font-medium text-blue-500 underline"
              >
                here
              </a>
              !
            </p>
          </div>
          <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Name
              </label>
              <input
               
                id="community_name"
                name="community_name"
                placeholder="Awesome Coders"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"

              >
                Community Logo
              </label>
              <input
                id="community_logo"
                name="community-logo"
                accept="image/png, image/jpg"
                type="file"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                First name
              </label>
              <input
                id="first_name"
                name="first-name"
                placeholder="Jon"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Last name
              </label>
              <input
                
                id="last_name"
                name="last-name"
                placeholder="Snow"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="dudethisiscool23@gmail.com"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Community-Tagline"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Community Tagline
              </label>
              <input
                
                id="community_tagline"
                name="Community-Tagline"
                placeholder="Rising Coders Of Today!"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="Profile Image"
                className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
              >
                Profile Image
              </label>
              <input
                id="profile_img"
                name="Profile Image"
                type="file"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              ></input>
            </div>
            <button className="px-6 py-2 mt-2 shadow-lg hover:bg-blue-700 bg-blue-500 rounded-xl text-white" onClick={()=>submit()} >
                Submit
              </button>
 
          </form>
          <div className="col-span-2">
         
              
            </div>
          <p className="max-w-3xl mx-auto mt-5 text-xs text-gray-400">
            Please allow up to 24-48 hour response during the weekdays.
          </p>
        </div>
      </div>
    </>
  );
}

export default UserInputForm;
