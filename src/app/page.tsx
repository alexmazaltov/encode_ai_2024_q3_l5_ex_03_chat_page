"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: [{ role: "user", content: message }] }),
    });
    const data = await res.json();
    setResponse(data.content);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Welcome to ALEF INVEST™</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Us</CardTitle>
            <CardDescription>Solving core's security issues / Unix / Windows / Mobile / Web3 / Blockchain</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">ALEF INVEST™ is a leading company in cybersecurity and blockchain solutions. We specialize in providing cutting-edge security measures for various platforms including Unix, Windows, Mobile, Web3, and Blockchain technologies.</p>
            <p className="mb-4">Our team of experts is dedicated to solving complex security challenges and ensuring the safety of your digital assets.</p>
            <p className="font-semibold">Contact Information:</p>
            <p>CEO: Oleksii Bondarenko</p>
            <p>Address: Ozerna str. 6 / Artemivka / 08336</p>
            <p>Phone: +38 (066) 790 7666</p>
            <p>Website: <a href="http://www.alefinvest.xyz/" className="text-blue-600 hover:underline">www.alefinvest.xyz</a></p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Chat with Us</CardTitle>
            <CardDescription>Ask us anything about our services</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="w-full"
              />
              <Button type="submit" className="w-full">Send</Button>
            </form>
          </CardContent>
          {response && (
            <CardFooter>
              <div className="w-full p-4 bg-gray-100 rounded-md">
                <p className="text-gray-800">{response}</p>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </main>
  );
}