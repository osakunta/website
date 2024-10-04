import { TranslationProvider } from "@/hooks/TranslationContext";
import { Translation } from "./cmsClient";

type PropsWithTranslations<T> = T & {
  translations: Translation[];
};

function withTranslations<PageProps extends object>(
  PageComponent: React.ComponentType<PageProps>,
) {
  return function WithTranslation(props: PropsWithTranslations<PageProps>) {
    const { translations, ...rest } = props;
    return (
      <TranslationProvider translations={translations}>
        <PageComponent {...(rest as PageProps)} />
      </TranslationProvider>
    );
  };
}

export default withTranslations;
