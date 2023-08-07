// Page.js
import React, {useState, useEffect} from "react";
import HomeNav from "../Components/HomeNav";
import SideNav from "../Components/SideNav";
import SideMenu from '../Components/SideMenu';


const Page = ({ pageContent  }) => {
  // const [isOpen, setIsOpen] = useState(() => {
  //   const storedValue = localStorage.getItem('isOpen');
  //   return storedValue ? JSON.parse(storedValue) : true;
  // });
  // useEffect(() => {
  //   // Store the 'isOpen' state in localStorage whenever it changes
  //   localStorage.setItem('isOpen', JSON.stringify(isOpen));
  // }, [isOpen]);
  return (
    <div>
      <div className="flex ">
        
        {/* <SideNav /> */}
        <SideMenu />
        
        <div className="flex w-full flex-col">
            <div className="header">
        <HomeNav />       
        </div>
        <div className="content-body h-[92vh] overflow-scroll">{pageContent }</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
