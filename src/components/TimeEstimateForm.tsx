import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export const TimeEstimateForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [estimate, setEstimate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskDescription.trim()) {
      toast({
        title: "Error",
        description: "Please enter a task description.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setEstimate("Approximately 2 hours and 30 minutes");
      toast({
        title: "Success",
        description: "Time estimate generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate time estimate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Task Description
          </label>
          <Textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Describe your task in detail..."
            className="w-full"
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Estimating...
            </>
          ) : (
            'Get Time Estimate'
          )}
        </Button>
      </form>
      {estimate && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Estimated Time:</h2>
          <p className="text-xl font-bold text-blue-600">{estimate}</p>
        </div>
      )}
    </Card>
  );
};