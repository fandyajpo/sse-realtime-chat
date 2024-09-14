import { cookies } from "next/headers";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const authorization = cookies().get("me")?.value;
    const response = await fetch(process.env.BACKEND_API + "content", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authorization,
      },
      body: JSON.stringify({ content: body?.content }),
    });

    const result = await response.json();

    console.log(result);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error });
  }
};
