import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LanguageState {
  language: "en" | "fr" | "ar";
  switchLanguage: (newLanguage: string) => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      switchLanguage: (newLanguage: string) =>
        set({ language: newLanguage as "en" | "fr" | "ar" }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
