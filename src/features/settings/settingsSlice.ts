import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Settings} from "../../types";


const initialState: Settings = {
    currency: "USD",
    theme: "dark"
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSettings: (state, action: PayloadAction<Settings>) => {
            state = action.payload
        },
    },
})

export const {updateSettings} = settingsSlice.actions


export default settingsSlice.reducer