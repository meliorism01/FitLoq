function Item({ color, text }) {
  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-4 w-4 rounded-full border-2 ${color}`}
      />

      <span className="text-sm">
        {text}
      </span>

    </div>
  );
}

function Legend() {
  return (
    <div className="mt-8 flex flex-wrap gap-5">

      <Item
        color="border-emerald-500"
        text="Excellent"
      />

      <Item
        color="border-yellow-400"
        text="Good"
      />

      <Item
        color="border-red-400"
        text="Poor"
      />

      <Item
        color="border-slate-300"
        text="Future"
      />

    </div>
  );
}

export default Legend;