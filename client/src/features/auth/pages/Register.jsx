import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Field,
  FieldContent,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { registerSchema } from "../schema/authSchema";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-titan-white)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="hidden lg:block space-y-6">
            <span className="inline-block px-4 py-2 rounded-full font-mono bg-violet-100 text-violet-700 text-sm font-medium">
              Start Learning Today
            </span>

            <h1 className="text-5xl font-bold leading-tight font-mono text-(--bodhify-navy)">
              Build your future with premium courses.
            </h1>

            <p className="text-lg text-(--bodhify-grey) font-mono max-w-lg">
              Join thousands of learners and instructors and start growing.
            </p>
          </div>

          {/* Register Card */}
          <Card className="w-full max-w-lg mx-auto shadow-xl border-0 rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-mono text-(--bodhify-navy)">
                Create Account
              </CardTitle>
              <CardDescription className={"font-mono"}>
                Register to start learning
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium font-mono text-(--bodhify-navy)">
                    Full Name
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      className="h-11 rounded-xl"
                      placeholder="Anil Kumar"
                      {...register("fullName")}
                    />
                  </FieldContent>
                  <FieldError className="text-xs">
                    {errors.fullName?.message}
                  </FieldError>
                </Field>

                {/* Email */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium text-gray-700">
                    Email
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      className="h-11 rounded-xl"
                      placeholder="you@example.com"
                      {...register("email")}
                    />
                  </FieldContent>
                  <FieldError className="text-xs">
                    {errors.email?.message}
                  </FieldError>
                </Field>

                {/* Role */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium text-gray-700">
                    Join As
                  </FieldLabel>
                  <FieldContent>
                    <Select onValueChange={(value) => setValue("role", value)}>
                      <SelectTrigger className="h-11 rounded-xl w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="instructor">Instructor</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldContent>
                  <FieldError className="text-xs">
                    {errors.role?.message}
                  </FieldError>
                </Field>

                {/* Password */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium text-gray-700">
                    Password
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="password"
                      className="h-11 rounded-xl"
                      placeholder="••••••••"
                      {...register("password")}
                    />
                  </FieldContent>
                  <FieldError className="text-xs">
                    {errors.password?.message}
                  </FieldError>
                </Field>

                {/* Confirm Password */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="password"
                      className="h-11 rounded-xl"
                      placeholder="••••••••"
                      {...register("confirmPassword")}
                    />
                  </FieldContent>
                  <FieldError className="text-xs">
                    {errors.confirmPassword?.message}
                  </FieldError>
                </Field>

                {/* Terms */}
                <Field className="space-y-1">
                  <div className="flex items-start gap-3 rounded-xl border p-4">
                    <Checkbox
                      checked={watch("terms")}
                      onCheckedChange={(checked) => setValue("terms", checked)}
                      className="mt-0.5"
                    />
                    <FieldLabel className="text-sm font-normal leading-relaxed text-gray-600 cursor-pointer">
                      I agree to the Terms & Conditions
                    </FieldLabel>
                  </div>

                  <FieldError className="text-xs">
                    {errors.terms?.message}
                  </FieldError>
                </Field>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-11 rounded-xl text-base font-medium"
                >
                  Create Account
                </Button>

                {/* Login Link */}
                <p className="text-center text-sm font-mono text-gray-600">
                  Already have an account?{" "}
                  <Link to={"/login"}>
                    <span className="text-(--bodhify-navy) font-mono font-semibold cursor-pointer hover:underline">
                      Login
                    </span>
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
