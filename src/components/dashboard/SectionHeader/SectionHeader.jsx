function SectionHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div className="mb-5 flex items-center justify-between">

      <div>

        <h2 className="text-xl font-bold text-ink-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-ink-500">
            {subtitle}
          </p>
        )}

      </div>

      {action}

    </div>
  );
}

export default SectionHeader;