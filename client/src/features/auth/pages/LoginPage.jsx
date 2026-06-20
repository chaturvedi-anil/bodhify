import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../api/auth.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/authSchema";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const { isPending, mutate: loginUser } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data, {
      onSuccess: (response) => {
        localStorage.setItem("token", response.token);
        reset();
        navigate("/dashboard");
      },
    });
  };
  return (
    <div className="min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-titan-white)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className=" grid lg:grid-cols-2 gap-10 pt-10 items-center">
          {/* Left Side */}
          <div className="hidden lg:block space-y-6">
            <span className="inline-block px-4 py-2 rounded-full font-mono bg-violet-100 text-violet-700 text-sm font-medium">
              Welcome Back
            </span>

            <h1 className="text-5xl font-bold leading-tight font-mono text-(--bodhify-navy)">
              Continue your learning journey with confidence.
            </h1>

            <p className="text-lg text-(--bodhify-grey) font-mono max-w-lg">
              Access your courses, track your progress, and keep building the
              skills that shape your future.
            </p>
          </div>

          {/* Login Card */}
          <Card className="w-full max-w-lg mx-auto shadow-xl border-0 rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-mono text-(--bodhify-navy)">
                Welcome Back
              </CardTitle>

              <CardDescription className="font-mono">
                Login to continue your learning journey
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <Field className={"space-y-1"}>
                  <FieldLabel
                    className={
                      "text-sm font-medium font-mono text-(--bodhify-navy)"
                    }
                  >
                    Email
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      className={
                        "h-10 rounded-xl font-mono text-(--bodhify-navy)"
                      }
                      placeholder={"abc@gmail.com"}
                      {...register("email")}
                    />
                  </FieldContent>
                  <FieldError className={"text-xs font-mono"}>
                    {errors.email?.message}
                  </FieldError>
                </Field>

                <Field className={"space-y-1"}>
                  <FieldLabel
                    className={
                      "text-sm font-medium font-mono text-(--bodhify-navy)"
                    }
                  >
                    Password
                  </FieldLabel>

                  <FieldContent>
                    <Input
                      className={
                        "h-10 rounded-xl font-mono text-(--bodhify-navy)"
                      }
                      type="password"
                      placeholder="••••••••"
                      {...register("password")}
                    />
                  </FieldContent>
                  <FieldError className={"text-xs font-mono"}>
                    {errors.password?.message}
                  </FieldError>
                </Field>
                <Button
                  type="submit"
                  className="w-full h-10 rounded-xl text-base font-mono font-medium cursor-pointer bg-(--bodhify-navy) hover:bg-(--bodhify-dark-navy)"
                >
                  Login
                </Button>

                {/* Register Link */}
                <p className="text-center text-sm font-mono text-gray-600">
                  New to bodhify?{" "}
                  <Link to={"/register"}>
                    <span className="text-(--bodhify-navy) font-mono font-semibold cursor-pointer hover:underline">
                      Register
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

export default Login;
