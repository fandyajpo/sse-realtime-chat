"use client";
import { useForm, Controller } from "react-hook-form";
import { useSendContent } from "@/query/content";
type InputValue = { content?: string };

export const Compose = () => {
  const { handleSubmit, control, resetField } = useForm<InputValue>({
    defaultValues: {
      content: "",
    },
  });

  const { mutate } = useSendContent();

  const onSubmit = (data: { content?: string }) => {
    mutate(data?.content);
    resetField("content");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bottom-0">
      <Controller
        control={control}
        name="content"
        rules={{
          required: {
            value: true,
            message: "Required",
          },
          minLength: {
            value: 2,
            message: "Must be more than 2 character",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-red-500">{error?.message}</p>
            </div>
            <input
              {...field}
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Your message..."
            />
          </div>
        )}
      />
    </form>
  );
};
