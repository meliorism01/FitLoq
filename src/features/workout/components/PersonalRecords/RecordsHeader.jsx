import { Trophy } from "lucide-react";
import { summary } from "./recordsData";

function RecordsHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

       <p className="text-xl font-bold uppercase tracking-[0.2em] text-cyan-400">
  personal records
</p>

        <h2 className="mt-3 text-5xl font-extrabold text-white">
          Hall of Strength
        </h2>

        <p className="mt-3 text-lg text-blue-100">
          Every personal record tells the story of your progress.
        </p>

      </div>


    </div>
  );
}

export default RecordsHeader;