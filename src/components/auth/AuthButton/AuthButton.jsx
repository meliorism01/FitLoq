import Button from "@components/ui/Button";
import Loader from "@components/ui/Loader";

function AuthButton({
  children,
  loading = false,
  ...props
}) {
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader size="sm" />
          Please wait...
        </span>
      ) : (
        children
      )}
    </Button>
  );
}

export default AuthButton;