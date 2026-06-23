import { toast } from "sonner";

export const notify = {
  success: (message = "Success") => toast.success(message),
  error: (message = "Something went wrong") => toast.error(message),
  info: (message = "Info") => toast.info(message),
  warning: (message = "Warning") => toast.warning(message),
};
