import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

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
import { registerSchema } from "../schema/authSchema";
import { useRegister } from "../api/auth.query";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const { isPending, isError, error, mutate: registerUser } = useRegister();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { confirmPassword, ...paylaod } = data;
    registerUser(paylaod, {
      onSuccess: (response) => {
        console.log("registered successfully:", response);
        reset();
        navigate("/login");
      },
    });
  };

  return (
    <div className="min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-titan-white)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 pt-4 items-center">
          {/* Left Side */}
          <div className="hidden lg:block space-y-6 ">
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
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <Field className={"space-y-1"}>
                  <FieldLabel
                    className={
                      "text-sm font-medium font-mono text-(--bodhify-navy)"
                    }
                  >
                    Full Name
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      className={
                        "h-10 rounded-xl font-mono text-(--bodhify-navy)"
                      }
                      placeholder="Elon musk..."
                      {...register("name")}
                    />
                  </FieldContent>
                  <FieldError className={"text-xs font-mono"}>
                    {errors.name?.message}
                  </FieldError>
                </Field>

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
                      placeholder="abc@gmail.com"
                      {...register("email")}
                    />
                  </FieldContent>
                  <FieldError className={"text-xs font-mono"}>
                    {errors.email?.message}
                  </FieldError>
                </Field>
                {/* Password */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium font-mono text-(--bodhify-navy)">
                    Password
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="password"
                      className="h-10 rounded-xl font-mono text-(--bodhify-navy)"
                      placeholder="••••••••"
                      {...register("password")}
                    />
                  </FieldContent>
                  <FieldError className="text-xs font-mono">
                    {errors.password?.message}
                  </FieldError>
                </Field>

                {/* Confirm Password */}
                <Field className="space-y-1">
                  <FieldLabel className="text-sm font-medium font-mono text-(--bodhify-navy)">
                    Confirm Password
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="password"
                      className="h-10 rounded-xl font-mono text-(--bodhify-navy)"
                      placeholder="••••••••"
                      {...register("confirmPassword")}
                    />
                  </FieldContent>
                  <FieldError className="text-xs font-mono">
                    {errors.confirmPassword?.message}
                  </FieldError>
                </Field>

                <Field className="space-y-1">
                  <div className="flex items-start gap-3 rounded-xl border p-3">
                    <Checkbox
                      checked={watch("terms")}
                      onCheckedChange={(checked) => setValue("terms", checked)}
                      className="mt-0.5"
                    />
                    <FieldLabel className="text-sm font-normal leading-relaxed font-mono text-gray-600 cursor-pointer">
                      I agree to the Terms & Conditions
                    </FieldLabel>
                  </div>

                  <FieldError className="text-xs font-mono">
                    {errors.terms?.message}
                  </FieldError>
                </Field>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-10 rounded-xl text-base font-mono font-medium cursor-pointer bg-(--bodhify-navy) hover:bg-(--bodhify-dark-navy)"
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

export default RegisterPage;
