import { describe, expect, it, vi } from "vitest";
import { render, renderHook } from "@testing-library/react";
import { Language, LanguageContext } from "../lib/LanguageContext";
import { TranslationProvider, useTranslate } from "./TranslationContext";

describe("useTranslate", () => {
  const wrapper =
    (language: Language) =>
    ({ children }: any) => (
      <LanguageContext.Provider value={{ language, setLanguage: () => {} }}>
        <TranslationProvider
          translations={[
            {
              key: "general:nation",
              en: "Satakunta Nation",
              fi: "Satakuntalainen Osakunta",
              sv: "Satakunta Nation",
            },
          ]}
        >
          {children}
        </TranslationProvider>
      </LanguageContext.Provider>
    );

  const renderUseTranslate = (language: Language) => {
    const result = renderHook(() => useTranslate(), {
      wrapper: wrapper(language),
    });
    return result.result.current;
  };

  it("returns finnish if language is finnish", () => {
    const t = renderUseTranslate("fi");

    expect(t("general:nation")).toEqual("Satakuntalainen Osakunta");
  });

  it("returns swedish if language is swedish", () => {
    const t = renderUseTranslate("sv");

    expect(t("general:nation")).toEqual("Satakunta Nation");
  });

  it("returns english if language is english", () => {
    const t = renderUseTranslate("en");

    expect(t("general:nation")).toEqual("Satakunta Nation");
  });

  it("fails gracefully if LanguageContext is not provided", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const Component = () => {
      const t = useTranslate();
      return <div>{t("general:nation")}</div>;
    };

    expect(() => render(<Component />)).toThrow();
  });

  it("fails gracefully with a wrong key", () => {
    const t = renderUseTranslate("fi");

    expect(() => t("hello" as any)).toThrow("Could not find translation hello");
  });
});
