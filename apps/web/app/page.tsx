"use client"

import { Button } from "@workspace/ui/components/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

import { api } from "@workspace/backend/_generated/api";
import { useQuery ,useMutation } from "convex/react";
import { use } from "react";

export default function Page() {
  const users = useQuery(api.user.getMany);
  const addUser = useMutation(api.user.add);




  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        {JSON.stringify(users)}
        <div>
          <div>
            <Button onClick={({}) => addUser({})}>Add User</Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
