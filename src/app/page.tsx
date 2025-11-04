'use client';
import Link from 'next/link';
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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role: 'admin' | 'volunteer') => {
    if (role === 'volunteer') {
      if (username === 'volunteer' && password === 'volunteer') {
        router.push('/volunteer/dashboard');
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid username or password for volunteer.',
          variant: 'destructive',
        });
      }
    } else if (role === 'admin') {
      if (username === 'admin' && password === 'admin') {
        router.push('/admin');
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid username or password for admin.',
          variant: 'destructive',
        });
      }
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
      <div className="center flex flex-col items-center justify-center bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          SWECHA Healthcare
        </h2>
        <Input
          type="text"
          placeholder="Username"
          className="w-full p-4 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        <div
          className="flex gap-4 w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            className="w-full"
            onClick={() => handleLogin('volunteer')}
          >
            Volunteer Login
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            onClick={() => handleLogin('admin')}
          >
            Admin Login
          </Button>
        </div>
         <p className="text-sm text-muted-foreground mt-6" onClick={(e) => e.stopPropagation()}>
            New to volunteering?{' '}
            <Link href="/login-volunteer" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
      </div>
    </div>
  );
}
