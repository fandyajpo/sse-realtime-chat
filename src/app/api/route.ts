import { cookies } from "next/headers";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + "auth", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: body?.username, color: body?.color }),
    });

    const result = await response.json();

    cookies().set("me", result?.data?.token);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: JSON.stringify(error) });
  }
};

export const PATCH = async (req: Request) => {
  try {
    cookies().delete("me");
    return Response.json({ message: "Logout" });
  } catch (error) {
    return Response.json({ error: JSON.stringify(error) });
  }
};
