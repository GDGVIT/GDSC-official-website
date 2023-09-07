import { NextResponse } from "next/server";

type UserSchema = {
  userId: string;
  name: string;
  username: string;
};

type PostSchema = {
  id: string;
  creatorId: keyof UserSchema;
  title: string;
  createdAt: number;
  updatedAt: number;
};

export type ResponsePostSchema = PostSchema & {
  user: UserSchema;
};

type MediumResponse = {
  success: boolean;
  payload: {
    collection: any;
    references: {
      Collection: any;
      User: Record<string, UserSchema>;
      Post: Record<string, PostSchema>;
    };
  };
};

export async function GET(request: Request) {
  const res = await fetch("https://medium.com/gdg-vit?format=json");
  const text = await res.text();
  const json = JSON.parse(text.substring(text.indexOf("{"))) as MediumResponse;
  text.indexOf("{");

  const posts = getPosts(json);
  return NextResponse.json(posts);
}

const getPosts = (json: MediumResponse): ResponsePostSchema[] => {
  const postsJson = json.payload.references.Post;
  const arr: PostSchema[] = [];
  Object.keys(postsJson).forEach((key) => {
    if (postsJson[key]) {
      arr.push(postsJson[key]);
    }
  });

  arr.sort((a, b) => b.createdAt - a.createdAt);
  const response: ResponsePostSchema[] = arr.map((ele) => {
    return { ...ele, user: json.payload.references.User[ele.creatorId] };
  });
  return response.slice(0, 5);
};
