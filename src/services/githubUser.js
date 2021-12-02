import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const githubAPI = createApi({
  reducerPath: "githubAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: builder => ({
    getUserByUserId: builder.query({
      query: id => `users/${id}`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByUserIdQuery } = githubAPI;
