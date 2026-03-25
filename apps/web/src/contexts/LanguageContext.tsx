import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { en } from "@/translations/en";
import { pa } from "@/translations/pa";

type Translations = typeof en;
type Lang = "en" | "pa";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Lang, Translations> = { en, pa };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Lang>(() => {
        return (localStorage.getItem("lang") as Lang) || "en";
    });

    const setLang = useCallback((l: Lang) => {
        setLangState(l);
        localStorage.setItem("lang", l);
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
};
