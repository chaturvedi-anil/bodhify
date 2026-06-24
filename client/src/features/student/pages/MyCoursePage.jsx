import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
const purchasedCourses = [
  {
    id: "1",
    title: "Complete Web Development + DevOps Cohort",
    instructor: "Hitesh Choudhary",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description:
      "Master MERN stack, Docker, CI/CD, Kubernetes, and deployment from scratch with real-world projects.",
  },
  {
    id: "2",
    title: "Advanced MERN Stack Bootcamp",
    instructor: "Akshay Saini",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Learn advanced React patterns, Node.js scaling, MongoDB optimization, and full-stack deployment.",
  },
  {
    id: "3",
    title: "System Design for Developers",
    instructor: "Gaurav Sen",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description:
      "Understand scalable architecture, microservices, load balancing, caching, and distributed systems.",
  },
  {
    id: "4",
    title: "Node.js Backend Engineering",
    instructor: "Piyush Garg",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "Deep dive into Node.js internals, event loop, Express, authentication, and production-grade APIs.",
  },
  {
    id: "5",
    title: "Docker & Kubernetes Masterclass",
    instructor: "Kunal Kushwaha",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
    description:
      "Learn containerization, orchestration, scaling, Helm charts, and production deployments.",
  },
  {
    id: "6",
    title: "Complete TypeScript Guide",
    instructor: "Theo Browne",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description:
      "Master TypeScript from basics to advanced patterns used in enterprise-level applications.",
  },
  {
    id: "7",
    title: "Next.js Fullstack Course",
    instructor: "Lee Robinson",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    description:
      "Build production-ready apps with Next.js, authentication, APIs, server actions, and deployment.",
  },
  {
    id: "8",
    title: "Database Design & Optimization",
    instructor: "Traversy Media",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    description:
      "Learn SQL, PostgreSQL indexing, normalization, and query optimization techniques.",
  },
  {
    id: "9",
    title: "Redis + Message Queues in Backend",
    instructor: "Fireship",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    description:
      "Implement caching, pub/sub, BullMQ, and job queues for scalable backend systems.",
  },
  {
    id: "10",
    title: "AWS for Fullstack Developers",
    instructor: "Stephane Maarek",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    description:
      "Deploy fullstack applications using EC2, S3, Lambda, CloudFront, and RDS.",
  },
];
const MyCoursesPage = () => {
  if (purchasedCourses.length < 1) {
    return (
      <div className="flex flex-1 items-center justify-center w-full font-mono">
        <Card className="w-full max-w-md text-center shadow-sm">
          <CardContent className="py-8 px-6 space-y-4">
            <h2 className="text-xl font-semibold text-(--bodhify-navy)">
              You don't have any courses
            </h2>

            <p className="text-gray-500">
              Purchase a course to start learning.
            </p>

            <Link
              to="/courses"
              className="inline-block text-(--bodhify-navy) font-semibold hover:underline"
            >
              Explore Courses
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full font-mono space-y-6">
      <h1 className="text-2xl font-bold text-(--bodhify-navy)">My Courses</h1>

      <div className="space-y-6">
        {purchasedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPage;
