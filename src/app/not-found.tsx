
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { TriangleAlert } from 'lucide-react';
import { LowPolyHeartBackground } from '@/components/layout/low-poly-heart-background';

export default function NotFound() {
  return (
    <>
      <LowPolyHeartBackground />
      <div className="flex flex-grow items-center justify-center">
        <Card className="w-full max-w-md text-center bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                <TriangleAlert className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold mt-4">404 - Page Not Found</CardTitle>
            <CardDescription>The page you are looking for does not exist or has not been implemented yet.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/volunteer/dashboard">Return to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
