type CMSItem = {
  id: number;
  user_created: null;
  date_created: string;
  user_updated: null;
  date_updated: string | null;
  text_en: string;
  text_fi: string;
  text_sv: string;
};

type CMSData = {
  data: CMSItem[];
};
