import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = async (
  request: any,
  { params }: { params: Promise<{ kindeAuth: string }> }
) => {
  const { kindeAuth } = await params;
  return handleAuth()(request, { params: { kindeAuth } } as any);
};
