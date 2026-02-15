
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
  CardDescription,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Utensils } from 'lucide-react';

const formSchema = z.object({
  patientIdentifier: z.string().min(1, 'Patient identifier (Book No. or Token) is required.'),
});

export function FoodForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientIdentifier: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Food Served',
      description: `Food has been marked as served for patient ${values.patientIdentifier}.`,
      variant: 'success',
    });
    form.reset();
  }

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm">
      <CardHeader className="items-center text-center">
        <div className="p-3 bg-primary/10 rounded-full mb-2">
            <Utensils className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">
          Food Distribution
        </CardTitle>
        <CardDescription>
          Enter patient's Book No. or Token No. to mark as served.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="patientIdentifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Identifier</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Book No. or Token No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Submitting...' : 'Mark as Served'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
