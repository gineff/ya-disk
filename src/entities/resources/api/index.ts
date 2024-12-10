import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DeleteResourceArgs, MoveResourceArgs, Resource, ResourcesQueryArgs } from '../types';
import { createSearchParams } from '../lib/createSearchParams';
import { getResourceFolder } from '../lib/get-resource-folder';

const token = import.meta.env.VITE_ACCESS_TOKEN;
const basePath = import.meta.env.VITE_BASE_PATH;

export const resourcesApi = createApi({
  reducerPath: 'resourcesApi',
  tagTypes: ['Resource'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${basePath}/v1/disk/resources`,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `OAuth ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getResource: builder.query<Resource, ResourcesQueryArgs>({
      query: (data) => {
        const params = createSearchParams(data);
        return {
          url: `?${params}`,
          method: 'GET',
        };
      },
      providesTags: (result) => (result ? [{ type: 'Resource' as const, id: result.path }] : []),
    }),
    deleteResource: builder.mutation<void, DeleteResourceArgs>({
      query: ({ path }) => ({
        url: `?path=${encodeURIComponent(path)}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, { path }) => [
        { type: 'Resource', id: getResourceFolder(<Resource>{ path }) },
      ],
    }),
    moveResource: builder.mutation<void, MoveResourceArgs>({
      query: ({ from, to }) => {
        const params = createSearchParams({
          from,
          path: to,
        });

        return {
          url: `/move?${params}`,
          method: 'POST',
        };
      },
      invalidatesTags: (_result, _error, { from, to }) => [
        { type: 'Resource', id: getResourceFolder(<Resource>{ path: from }) },
        { type: 'Resource', id: getResourceFolder(<Resource>{ path: to }) },
      ],
    }),
  }),
});

export const { useGetResourceQuery, useDeleteResourceMutation, useMoveResourceMutation } =
  resourcesApi;
