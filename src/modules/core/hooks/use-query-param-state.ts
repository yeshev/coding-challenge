"use client";

import { useCallback, useMemo } from "react";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useQueryParamState = <T extends string = string>(
  queryKey: string,
  defaultData: T,
): useQueryParamState<T> => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryUrl = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const query = useMemo(() => queryUrl.get(queryKey), [queryKey, queryUrl]);

  const queryData: T = useMemo(() => {
    if (query) {
      return query as T;
    }

    return defaultData;
  }, [query, defaultData]);

  const redirectWithQuery = useCallback(
    (newQueryData: string): void => {
      queryUrl.set(queryKey, newQueryData);

      const generatedUrl = `${pathname}?${queryUrl.toString()}`;

      router.push(generatedUrl, { scroll: false });
    },
    [queryUrl, queryKey, pathname, router],
  );

  return {
    queryData,
    redirectWithQuery,
  };
};

interface useQueryParamState<T> {
  queryData: T;
  redirectWithQuery: (newQueryData: string) => void;
}
