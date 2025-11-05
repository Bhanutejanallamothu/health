import { LowPolyHeartBackground } from '@/components/layout/low-poly-heart-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <LowPolyHeartBackground />
      <div className="relative z-10">
        <Card className="w-full max-w-md text-center bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-destructive">404</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xl font-medium">Page Not Found</p>
            <p className="text-muted-foreground">
              The page you are looking for does not exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/volunteer/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
