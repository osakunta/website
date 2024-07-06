// This is not currently in a working state

import { useState, useEffect } from "react";

interface DirectusResponse<T> {
  data: T;
  meta: any;
}

interface UseCMSProps<T> {
  collection: string;
  query?: string;
  initialData?: T;
}

const useCMS = <T>({ collection, query = "", initialData }: UseCMSProps<T>) => {
  const [data, setData] = useState<T | null>(initialData || null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/text`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result: DirectusResponse<T> = await response.json();
        setData(result.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collection, query]);

  return { data, loading, error };
};

export default useCMS;
