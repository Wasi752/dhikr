import Hadith from "./Hadith";
import Quiz from "./Quiz";
import { useLocalStorage } from "../Utils";
import { useState } from "react";

function LearningPanel() {
  const [show, setShow] = useLocalStorage("show", false);
  const [showHadith, setShowHadith] = useLocalStorage("showHadith", true);
  const toggle = () => setShowHadith(!showHadith);
  return (
    <div className="w-[50%] h-[10%] m-1 flex justify-end">

      {show && (showHadith ? (
        <Hadith showQuiz={toggle} />
      ) : (
        <Quiz showHadith={toggle} />
      ))}
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-center text-md font-bold h-[20%] w-[15%] mt-5 m-1 border-green-600 hover:text-blue-500 p-2 border rounded-md"
      >
        {show ? "Hide" : "Read"}
      </button>
    </div>
  );
}

export default LearningPanel;


