import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create-service`,
        method: "POST",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.services],
    }),
    service: build.query({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services],
    }),

    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useServicesQuery,
  useServiceQuery,
  useUpdateServiceMutation,
  useAddServiceMutation,
} = serviceApi;
