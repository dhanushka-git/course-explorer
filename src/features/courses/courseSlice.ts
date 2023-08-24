import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState: any[] = []

const courseSlice: any = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        courseAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({title, content}): any {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
    }
})

export const {courseAdded} = courseSlice.actions

export default courseSlice.reducer