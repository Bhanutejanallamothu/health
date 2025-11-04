'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  bookNumber: z.string().min(1, 'Book number is required.'),
  bp: z.string().min(1, 'BP is required.'),
  pulse: z.string().min(1, 'Pulse is required.'),
  rbs: z.string().min(1, 'RBS is required.'),
  weight: z.string().min(1, 'Weight is required.'),
  height: z.string().min(1, 'Height is required.'),
  lastMealTime: z.string().min(1, 'Last meal and time is required.'),
});

export function VitalsForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookNumber: '',
      bp: '',
      pulse: '',
      rbs: '',
      weight: '',
      height: '',
      lastMealTime: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Vitals Submitted',
      description: `Vitals for patient with book number ${values.bookNumber} have been submitted.`,
    });
    form.reset();
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Vitals</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="bookNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter patient book number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BP (systolic/diastolic)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 120/80" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pulse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pulse</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 72" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rbs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RBS</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 90" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 70" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height (cm)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 175" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastMealTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Meal and Time</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Breakfast, 8:00 AM" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
