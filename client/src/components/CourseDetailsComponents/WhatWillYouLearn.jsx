"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaCheckCircle } from "react-icons/fa";

const courseData = {
  web: {
    title: "Web Development",
    day: "Every Friday",
    topics: [
      "HTML/CSS",
      "JavaScript Basics",
      "JS Architecture",
      "Async JavaScript",
      "Node vs Browser JS",
      "HTTP & Express",
      "MongoDB",
      "Postgres + Prisma",
      "TypeScript",
      "Turborepo",
      "BunJS",
      "React",
      "TailwindCSS",
      "Next.js",
      "WebSockets + WebRTC",
      "Queues / PubSubs",
    ],
    projects: ["Todo App", "Lovable Clone", "Codeforces Clone", "Trading App"],
  },
  devops: {
    title: "DevOps",
    day: "Every Friday",
    topics: [
      "Bash / Terminal",
      "VMs / Baremetal",
      "Process Management",
      "Certificates",
      "ASGs / MIGs",
      "Containers",
      "Docker",
      "Kubernetes 1",
      "Kubernetes 2",
      "CI/CD",
      "Monitoring",
      "IaC",
      "CDNs + Object Stores",
      "Sandboxing / Firecracker",
    ],
    projects: ["e2b", "Replit Clone", "Cloudflare Workers"],
  },
  ai: {
    title: "Machine Learning & AI",
    day: "Every Saturday",
    topics: [
      "AI History",
      "Deep Learning Basics",
      "Neural Networks",
      "PyTorch",
      "RNNs / LSTMs",
      "CNNs",
      "Attention Mechanism",
      "Transformers",
      "Fine Tuning",
      "Memory Systems",
    ],
    projects: [
      "Agent Framework",
      "RL Fine-tuning",
      "Devin Clone",
      "Memory Framework",
    ],
  },
};

function CourseSection({ title, day, topics, projects }) {
  return (
    <Card className="border-none shadow-lg rounded-3xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-mono text-(--bodhify-navy)">
          {title}{" "}
          <span className="text-muted-foreground text-lg font-mono font-medium">
            ({day})
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="rounded-2xl bg-(--bodhify-navy) text-white p-6">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Topics */}
            <div>
              <h4 className="font-semibold mb-4 text-lg font-mono">Topics</h4>
              <div className="space-y-3">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge variant="secondary">{index + 1}</Badge>
                    <span className="font-mono">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <Separator
              orientation="vertical"
              className="hidden md:block h-full"
            />

            {/* Projects */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Projects</h4>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="h-4 w-4 text-green-400 bg-white rounded-full" />
                    <span className="font-mono">{project}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function WhatWillYouLearn() {
  return (
    <div className=" min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-light-grey)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-4">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold font-mono text-(--bodhify-navy)">
                What You'll Learn
              </h2>
              <p className="text-muted-foreground mt-3 text-lg font-mono">
                Master server-side development, APIs, and cloud infrastructure
              </p>
            </div>

            <Tabs defaultValue="web" className="w-full">
              <TabsList className="grid w-full grid-cols-3 font-mono">
                <TabsTrigger value="web">Web Dev</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
                <TabsTrigger value="ai">AI/ML</TabsTrigger>
              </TabsList>

              <ScrollArea className=" mt-6 pr-4">
                <TabsContent value="web">
                  <CourseSection {...courseData.web} />
                </TabsContent>

                <TabsContent value="devops">
                  <CourseSection {...courseData.devops} />
                </TabsContent>

                <TabsContent value="ai">
                  <CourseSection {...courseData.ai} />
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>

          {/* Right sticky pricing card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-video ">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  alt="Bootcamp"
                  className=" h-full px-3 rounded-xl "
                />
              </div>

              <CardContent className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-4xl font-mono text-(--bodhify-navy)">
                      ₹5,999
                    </h3>
                    <p className="line-through text-muted-foreground font-mono">
                      ₹8,999
                    </p>
                  </div>

                  <Badge className="text-sm px-3 py-1 font-mono text-(--bodhify-bg) bg-(--bodhify-navy)">
                    34% Off
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3 text-sm text-muted-foreground  font-mono">
                  <p>✔ Complete TypeScript + MERN stack</p>
                  <p>✔ Complete DevOps</p>
                  <p>✔ System Design</p>
                  <p>✔ Real-world Projects</p>
                </div>

                <Button className="w-full h-12 text-base rounded-xl font-mono bg-(--bodhify-navy) cursor-pointer hover:bg-(--bodhify-dark-navy)">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
