import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: build => ({
        getCourses: build.query({
            query: () => '/posts'
        })
    })
})

export const {useGetCoursesQuery} = api as any