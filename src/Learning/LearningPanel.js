import Hadith from "./Hadith";
import Quiz from "./Quiz";
import { useLocalStorage } from "../Utils";

function LearningPanel() {
  const [show, setShow] = useLocalStorage('show', false);
  const [showHadith, setShowHadith] = useLocalStorage("showHadith", true);
  const toggle = () => setShowHadith(!showHadith);
  return (
    <div className="w-[50%] h-[10%]">
        <div className="w-[20%] h-[5%] ml-96 pl-10 flex justify-end">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-center text-md font-bold h-[20%] w-[100%] mt-1 border-green-600 hover:text-blue-500 p-2 border rounded-md"
            >
            {show ? "Hide" : "Read"}
          </button>
        </div>
        <div className="w-[80%]  ml-20 flex justify-end">
          
          {show && (showHadith ? (
            <Hadith showQuiz={toggle} />
          ) : (
            <Quiz showHadith={toggle} />
          ))}
        </div>
    </div>
  );
}

export default LearningPanel ;