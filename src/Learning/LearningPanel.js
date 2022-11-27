import Hadith from "./Hadith";
import Quiz from "./Quiz";
import { useLocalStorage } from "../Utils";

function LearningPanel() {
  const [show, setShow] = useLocalStorage('show', false);
  const [showHadith, setShowHadith] = useLocalStorage("showHadith", true);
  const toggle = () => setShowHadith(!showHadith);
  return (

    <div className="w-[30%] h-[10%] justify-end ">
        <div className="w-[47%] h-[5%] ml-72 pl-12 flex justify-end ">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-center text-md font-bold h-[20%] w-[50%] mt-1 border-green-600 hover:text-blue-500 p-2 border rounded-md"
            >
            {show ? "Hide" : "Read"}
          </button>
        </div>
        <div className="w-[100%] flex justify-end">
          
          {show && (showHadith ? (
            <Hadith showQuiz={toggle} />
          ) : (
            <Quiz showHadith={toggle} />
          ))}
        </div>

    </div>
  );
}

export default LearningPanel;


