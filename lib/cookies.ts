"use server"
import { cookies } from "next/headers";

export async function setCookie(name: string, value: string, days = 7) {
  const cookieStore = await cookies();
  cookieStore.set({
    name,
    value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: days * 24 * 60 * 60,
    sameSite: "strict",
  });
}

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function removeCookie(name: string) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}
