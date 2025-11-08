
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, User, Mail, Phone, Calendar, Users, BarChart } from "lucide-react";
import { useUser, useFirestore } from '@/firebase';
import { useDoc } from '@/firebase/firestore/use-doc';
import { doc, DocumentData } from 'firebase/firestore';
import { useMemo } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemo(() => {
    if (!firestore || !user?.uid) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user?.uid]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc(userDocRef);

  if (isUserLoading || isProfileLoading) {
    return (
        <div className="flex-grow flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm p-6">
                <div className="flex flex-col items-center space-y-4">
                    <Skeleton className="w-24 h-24 rounded-full" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                </div>
                 <div className="space-y-6 mt-8">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            </Card>
        </div>
    );
  }

  const initial = userProfile?.username ? userProfile.username.charAt(0).toUpperCase() : (user?.email?.charAt(0).toUpperCase() || 'V');

  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm">
        <CardHeader className="items-center text-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarFallback className="text-4xl">{initial}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">{userProfile?.username || 'Volunteer'}</CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
                 <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">Camps Attended</p>
                    <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground">Patients Viewed</p>
                    <p className="text-2xl font-bold">150</p>
                </div>
            </div>
            
            <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                    <p className="text-sm">{user?.email}</p>
                </div>
                {userProfile?.phone && (
                    <div className="flex items-center">
                        <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
                        <p className="text-sm">{userProfile.phone}</p>
                    </div>
                )}
                {userProfile?.age && (
                    <div className="flex items-center">
                        <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                        <p className="text-sm">{userProfile.age} years old</p>
                    </div>
                )}
            </div>

            <Button className="w-full mt-4">
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
