import ActionCard from "../ActionCard/ActionCard";

function QuickActions() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <ActionCard
        icon="📷"
        title="Scan Meal"
        description="Take a photo and let AI identify calories, protein, carbs and fat."
        buttonText="Scan Now"
        gradient="bg-gradient-to-br from-orange-500 to-amber-500"
      />

      <ActionCard
        icon="🔍"
        title="Search Food"
        description="Search thousands of verified foods and quickly add them to your meals."
        buttonText="Search"
        gradient="bg-gradient-to-br from-emerald-500 to-teal-500"
      />

    </div>
  );
}

export default QuickActions;