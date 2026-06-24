import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FaBookOpen, FaClock, FaCheckCircle } from "react-icons/fa";

const stats = [
  {
    title: "Purchased Courses",
    value: 4,
    icon: <FaBookOpen />,
  },
  {
    title: "Completed Lessons",
    value: 28,
    icon: <FaCheckCircle />,
  },
  {
    title: "Watch Time",
    value: "34h",
    icon: <FaClock />,
  },
];

const courses = [
  {
    title: "MERN Stack Mastery",
    progress: 75,
  },
  {
    title: "System Design Basics",
    progress: 42,
  },
  {
    title: "Docker & Kubernetes",
    progress: 20,
  },
];

const OverviewPage = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold font-mono text-(--bodhify-navy)">
          Overview
        </h1>
        <p className="mt-1 font-mono text-(--bodhify-navy)">
          Welcome back, continue your learning journey.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((item) => (
          <Card key={item.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-gray-500 font-mono">{item.title}</p>
                <h2 className="text-2xl font-bold mt-2 font-mono text-(--bodhify-navy)">
                  {item.value}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-mono bg-(--bodhify-light-navy)">
                {item.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Continue Learning */}
      <Card>
        <CardHeader>
          <CardTitle className={"font-mono text-(--bodhify-navy)"}>
            Continue Learning
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="p-5 rounded-xl text-white bg-(--bodhify-navy)">
            <h2 className="text-lg font-semibold font-mono">
              Advanced Node.js
            </h2>
            <p className="text-sm mt-2 opacity-90 font-mono">
              Lesson 12: Event Loop Deep Dive
            </p>

            <Button
              className="mt-4 px-4 py-2 rounded-lg cursor-pointer font-mono text-white bg-(--bodhify-teal-light) hover:bg-(--bodhify-teal)"
              variant="secondary"
            >
              Resume Course
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle className={"font-mono text-(--bodhify-navy)"}>
            Course Progress
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          {courses.map((course) => (
            <div key={course.title}>
              <div className="flex justify-between mb-2">
                <span className="font-mono">{course.title}</span>
                <span className="font-medium font-mono text-(--bodhify-light-navy)">
                  {course.progress}%
                </span>
              </div>

              <Progress value={course.progress} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewPage;
