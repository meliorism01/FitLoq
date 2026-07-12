import DashboardCard from "@components/dashboard/DashboardCard";

import RecordsHeader from "./RecordsHeader";
import RecordCard from "./RecordCard";
import RecordsSummary from "./RecordsSummary";

import { personalRecords } from "./recordsData";

function PersonalRecords() {
  return (
    <DashboardCard
      className="
  overflow-hidden
  rounded-[36px]
  bg-gradient-to-br
  from-slate-950
  via-blue-950
  to-slate-900
  px-10
  py-14
"
    >
      <RecordsHeader />

      <div className="mt-8 space-y-5">
        {personalRecords.map((record) => (
          <RecordCard
            key={record.id}
            record={record}
          />
        ))}
      </div>

      <RecordsSummary />
    </DashboardCard>
  );
}

export default PersonalRecords;