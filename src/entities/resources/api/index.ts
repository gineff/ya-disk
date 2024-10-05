import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Resource, ResourcesQueryArgs } from '../types';
import { createSearchParams } from '../lib/createSearchParams';

const token = import.meta.env.VITE_ACCESS_TOKEN;
const basePath = import.meta.env.VITE_BASE_PATH;


export const resourcesApi = createApi({
  reducerPath: 'resourcesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${basePath}/v1/disk/resources`,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `OAuth ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getResources: builder.query<Resource, ResourcesQueryArgs>({
      query: (data) => {
        const params = createSearchParams(data);

        return {
          url: `?${params}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetResourcesQuery } = resourcesApi;
