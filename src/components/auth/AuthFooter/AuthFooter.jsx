import { Link } from "react-router-dom";

function AuthFooter({
  text,
  action,
  to,
}) {
  return (
    <p className="mt-8 text-center text-sm text-ink-500">
      {text}

      <Link
        to={to}
        className="ml-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
      >
        {action}
      </Link>
    </p>
  );
}

export default AuthFooter;