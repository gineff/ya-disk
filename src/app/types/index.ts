import { Resource } from "@/entities/resources/types";

//Тип состояния приложения
export type AppState = {
  activeResource: Resource | null;
  activeDialog: 'deleteFile' | 'moveFile' | 'viewFile' | null;
};
