import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseCard = ({ course }) => {
  return (
    <Card className="w-full rounded-3xl shadow-sm border border-gray-200 overflow-hidden font-mono">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Image */}
          <div className="w-full lg:w-[38%] shrink-0">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-[240px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-2xl font-bold text-(--bodhify-navy) leading-snug">
                {course.title}
              </h2>

              <p className="mt-2 text-base text-(--bodhify-light-navy) font-semibold">
                Instructor: {course.instructor}
              </p>

              <p className="mt-4 text-gray-500 text-base leading-7 line-clamp-3">
                {course.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button className="bg-(--bodhify-navy) hover:bg-(--bodhify-dark-navy) px-6 py-2 rounded-xl cursor-pointer">
                View
              </Button>

              <Button
                variant="outline"
                className="px-6 py-2 rounded-xl border-gray-300 text-(--bodhify-navy) hover:bg-gray-100 cursor-pointer"
              >
                View Invoice
              </Button>

              <Button
                variant="outline"
                className="px-6 py-2 rounded-xl border-gray-300 text-(--bodhify-navy) hover:bg-gray-100 cursor-pointer"
              >
                Download Certificate
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
