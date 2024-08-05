type CMSItem = {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  text_en: string;
  text_fi: string;
  text_sv: string;
};

type CMSData = {
  data: CMSItem[];
};
