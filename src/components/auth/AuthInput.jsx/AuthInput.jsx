function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  required = false,
}) {
  return (
    <div className="mb-5">

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-ink-700"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border px-4 py-3 outline-none transition-all duration-200
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-surface-border focus:border-emerald-500"
        }`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default AuthInput;