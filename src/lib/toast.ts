"use server";

import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";

export type ToastType = "success" | "error" | "info";
export type CrudSuccessAction = "created" | "updated" | "deleted";
export type ToastEntityKey =
  | "curriculum"
  | "diploma"
  | "division"
  | "examPaper"
  | "examinationCenter"
  | "grade"
  | "subject"
  | "teaching"
  | "theme";

export interface ToastMessage {
  type: ToastType;
  message: string;
}

const TOAST_COOKIE_NAME = "toast-message";

export async function setToastCookie(type: ToastType, message: string) {
  const cookieStore = await cookies();
  cookieStore.set(
    TOAST_COOKIE_NAME,
    JSON.stringify({ type, message }),
    {
      maxAge: 5, // 5 seconds
      path: "/",
      sameSite: "lax",
    }
  );
}

export async function setCrudSuccessToast(entityKey: ToastEntityKey, action: CrudSuccessAction) {
  const toastMessage = await buildCrudSuccessMessage(entityKey, action);
  await setToastCookie("success", toastMessage);
}

async function buildCrudSuccessMessage(entityKey: ToastEntityKey, action: CrudSuccessAction) {
  const successTranslations = await getTranslations("messages.success");
  const entityTranslations = await getTranslations(`entities.${entityKey}`);
  const entityLabel = entityTranslations("singular");

  return successTranslations(action, { entity: entityLabel });
}

export async function getToastMessage(): Promise<ToastMessage | null> {
  const cookieStore = await cookies();
  const toastCookie = cookieStore.get(TOAST_COOKIE_NAME);

  if (!toastCookie) {
    return null;
  }

  try {
    return JSON.parse(toastCookie.value) as ToastMessage;
  } catch {
    return null;
  }
}

export async function clearToastCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(TOAST_COOKIE_NAME);
}
