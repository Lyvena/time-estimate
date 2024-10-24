import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Brain } from "lucide-react";

export const TimeEstimateForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [estimate, setEstimate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateEstimate = async (description: string) => {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
      throw new Error('Please add your OpenAI API key in settings');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: "You are a project management expert. Analyze the task and provide a time estimate in hours and minutes. Be concise and only return the time estimate."
        }, {
          role: "user",
          content: `Please estimate how long this task will take: ${description}`
        }],
        temperature: 0.7,
        max_tokens: 100
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate estimate');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

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
      const timeEstimate = await generateEstimate(taskDescription);
      setEstimate(timeEstimate);
      toast({
        title: "Success",
        description: "Time estimate generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate time estimate",
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
              Analyzing...
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Get AI Time Estimate
            </>
          )}
        </Button>
      </form>
      {estimate && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">AI Estimated Time:</h2>
          <p className="text-xl font-bold text-blue-600">{estimate}</p>
        </div>
      )}
    </Card>
  );
};