function AuthHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-10 text-center">

      <h1 className="text-4xl font-bold text-ink-900">
        {title}
      </h1>

      <p className="mt-3 text-ink-500 leading-7">
        {subtitle}
      </p>

    </div>
  );
}

export default AuthHeader;