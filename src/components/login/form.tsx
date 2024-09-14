"use client";

import { useForm, Controller } from "react-hook-form";
import { useLogin } from "@/query/login";
export const LoginForm = () => {
  const { handleSubmit, control } = useForm<{ username: string }>({
    defaultValues: { username: "" },
  });

  const { mutate } = useLogin();

  const onSubmit = (data: { username: string }) => mutate(data?.username);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Masukin Nama lo untuk gabung
            </p>
            <div>
              <div className="relative">
                <Controller
                  control={control}
                  name="username"
                  rules={{
                    required: {
                      value: true,
                      message: "Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Must be more than 3 character",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "No symbols or emojis.",
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label>Username</label>
                        <p className="text-sm text-red-500">{error?.message}</p>
                      </div>
                      <input
                        {...field}
                        type="text"
                        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Username"
                      />
                    </div>
                  )}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
