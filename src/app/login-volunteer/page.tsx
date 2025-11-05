
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

export default function VolunteerLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'volunteer' && password === 'volunteer') {
      router.push('/volunteer/dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className={cn(
        'login-container min-h-screen font-sans',
        isActive && 'active'
      )}
      onMouseEnter={() => setIsActive(true)}
    >
        <div className="top"></div>
        <div className="bottom"></div>
        <div onClick={(e) => e.stopPropagation()} className="center flex flex-col items-center justify-center bg-card rounded-lg shadow-2xl p-8 w-[400px]">
            <h2 className="text-3xl font-bold mb-6 text-card-foreground">
                Volunteer Login
            </h2>
            <form onSubmit={handleLogin} className="w-full">
                <div className="grid gap-4">
                    <div className="grid gap-2 text-left">
                        <Label htmlFor="username">Username</Label>
                        <Input 
                            id="username" 
                            type="text" 
                            placeholder="Username" 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2 relative text-left">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-7 h-7 w-7"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                            ) : (
                            <Eye className="h-4 w-4" />
                            )}
                            <span className="sr-only">
                            {showPassword ? 'Hide password' : 'Show password'}
                            </span>
                        </Button>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
            </form>
            <div className="flex flex-col items-center justify-center gap-2 mt-4">
                <p className="text-sm text-muted-foreground">
                    <Link href="#" className="font-semibold text-primary hover:underline">
                    Forgot password?
                    </Link>
                </p>
                <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/" className="font-semibold text-primary hover:underline">
                      Sign up
                    </Link>
                </p>
            </div>
      </div>
    </div>
  );
}

