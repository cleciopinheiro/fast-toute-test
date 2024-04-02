'use client';
import { useState } from "react";
import ListSection from "./ListSection";
import MapSection from "./MapSection";
import SummarySection from "./SummarySection";
import SearchBar from "./SearchBar";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section>
      <div className="bg-[var(--input-color)] flex justify-evenly text-[12px] h-[5vh] items-center">
          <a 
            className={"w-full h-full py-1 flex justify-center items-center" + (openTab === 1 ? " active" : " inactive")}
            data-toggle="tab" 
            role="tablist" 
            href="#list" 
            onClick={(e) => { e.preventDefault(); setOpenTab(1); }}>LIST</a>
        
          <a 
            className={"w-full h-full py-1 flex justify-center items-center" + (openTab === 2 ? " active" : " inactive")}
            data-toggle="tab" 
            role="tablist" 
            href="#map" 
            onClick={(e) => { e.preventDefault(); setOpenTab(2); }}>MAP</a>
        
          <a 
            className={"w-full h-full py-1 flex justify-center items-center" + (openTab === 3 ? " active" : " inactive")}
            data-toggle="tab" 
            role="tablist" 
            href="#summary" 
            onClick={(e) => { e.preventDefault(); setOpenTab(3); }}>SUMMARY</a>
      </div>
      <SearchBar />
      <div>
        { openTab === 1 && <ListSection id="list" /> }
        { openTab === 2 && <MapSection id="map" /> }
        { openTab === 3 && <SummarySection id="summary" /> }
      </div>

    </section>
  );
};

export default Tabs;