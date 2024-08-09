import { describe, expect, it } from "vitest";
import { render, renderHook } from "@testing-library/react";
import useTranslate from "./useTranslate";
import { Language, LanguageContext } from "../lib/LanguageContext";

describe("useTranslate", () => {
  const wrapper =
    (language: Language) =>
    // eslint-disable-next-line react/display-name
    ({ children }: any) => (
      <LanguageContext.Provider value={{ language, setLanguage: () => {} }}>
        {" "}
        {children}{" "}
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
    const Component = () => {
      const t = useTranslate();
      return <div>{t("general:nation")}</div>;
    };

    expect(() => render(<Component></Component>)).toThrow();
  });

  it("fails gracefully with a wrong key", () => {
    const t = renderUseTranslate("fi");

    expect(() => t("hello" as any)).toThrow();
  });
});
