import { LowPolyHeartBackground } from '@/components/layout/low-poly-heart-background';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <LowPolyHeartBackground />
      <div className="relative z-10 text-center space-y-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
        <h1 className="text-7xl font-bold text-destructive">404</h1>
        <p className="text-2xl font-medium">Page Not Found</p>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/volunteer/dashboard">
            <Home className="mr-2 h-4 w-4" />
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </>
  );
}
