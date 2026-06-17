import { useQuery } from "@tanstack/react-query";
import { getCoursesApi, getCourseDetailsApi } from "./course.api";
import { QUERY_KEYS } from "@/lib/query-keys";

export const useGetCourses = () => {
  return useQuery({
    queryKey: QUERY_KEYS.COURSES,
    queryFn: getCoursesApi,
  });
};

export const useGetCourseDetails = (id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COURSE, id],
    queryFn: () => getCourseDetailsApi(id),
    enabled: !!id,
  });
};
