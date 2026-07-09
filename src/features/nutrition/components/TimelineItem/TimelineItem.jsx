    function TimelineItem({ children, last = false }) {
  return (
    <div className="relative pl-10">

      {!last && (
        <div className="absolute left-4 top-8 h-full w-0.5 bg-slate-200" />
      )}

      <div className="absolute left-1 top-4 h-6 w-6 rounded-full border-4 border-white bg-emerald-500 shadow" />

      {children}

    </div>
  );
}

export default TimelineItem;