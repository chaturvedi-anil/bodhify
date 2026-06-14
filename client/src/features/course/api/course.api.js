import axiosInstance from "@/lib/axios";

export const getCoursesApi = async () => {
  const response = await axiosInstance.get("/courses");

  return response.data.data;
};

export const getCourseDetailsApi = async (id) => {
  const response = await axiosInstance.get(`/courses/${id}`);
  return response.data.data;
};
