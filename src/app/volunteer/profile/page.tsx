
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm">
        <CardHeader className="items-center text-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="user" data-ai-hint="user avatar" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">Volunteer</CardTitle>
          <CardDescription>volunteer@healthreach.org</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Role</p>
                <p className="text-base font-semibold">Camp Volunteer</p>
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                <p className="text-base font-semibold">January 2023</p>
            </div>
             <Button className="w-full mt-4">
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
