//action to grab liked song by current user

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Song } from "@/types";

const getLikedSongs = async (): Promise<Song[]> => {
  //server component superbase client
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //fetch likedsongs for our currently logged in user
  const { data, error } = await supabase
    .from("liked_songs")
    .select("*, songs(*)")
    .eq("user_id", session?.user?.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log("error");
    return [];
  }

  if (!data) {
    return [];
  }

  // populating relation for one song in each of the query field?
  return data.map((item) => ({
    ...item.songs,
  }));
};

export default getLikedSongs;
