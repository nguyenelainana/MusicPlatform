import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Song } from "@/types";

const getSongsByUserId = async (): Promise<Song[]> => {
  //server component superbase client
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  //get session
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  console.log("session data", sessionData);

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByUserId;
