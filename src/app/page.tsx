import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        SWECHA Healthcare
      </h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
            <Button asChild>
                <Link href="/login-volunteer">Volunteer</Link>
            </Button>
            <Button asChild variant="secondary">
                <Link href="/login-admin">Admin</Link>
            </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            New to volunteering?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
