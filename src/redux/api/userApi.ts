import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ADMIN_URL = "/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    user: build.query({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useUsersQuery, useUserQuery } = usersApi;
