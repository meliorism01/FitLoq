import Button from "@components/ui/Button";

function SocialLogin() {
  return (
    <div className="mt-6">
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-surface-border" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-ink-500">
            OR
          </span>
        </div>
      </div>

      <Button
        variant="secondary"
        className="w-full"
        type="button"
      >
        Continue with Google
      </Button>
    </div>
  );
}

export default SocialLogin;