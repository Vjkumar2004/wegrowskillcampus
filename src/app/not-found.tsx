import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <Container>
        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded border border-orange-200">
          404 Error
        </span>
        <h1 className="text-4xl font-extrabold text-brand-navy mt-4 mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-textSecondary max-w-md mx-auto mb-8">
          The campus page you are looking for does not exist or may have been moved.
        </p>
        <Button href="/" variant="primary">
          Return to Home
        </Button>
      </Container>
    </div>
  );
}
