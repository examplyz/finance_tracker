import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Category} from "../../types";

const defaultCategories: Category[] = [
    {
        id: 'cat-1' ,
        name: 'Food / Groceries' ,
        color: 'oklch(75% 0.183 55.934)',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-2' ,
        name: 'Healthcare' ,
        color: 'oklch(74.6% 0.16 232.661)',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-3' ,
        name: 'Travel' ,
        color: 'oklch(70.2% 0.183 293.541)',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-4' ,
        name: 'Housing' ,
        color: 'oklch(76.5% 0.177 163.223)',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-5' ,
        name: 'Miscellaneous' ,
        color: 'oklch(70.4% 0.191 22.216)',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-6' ,
        name: 'Miscellaneous' ,
        color: 'oklch(70.4% 0.191 22.216)',
        icon: "Some icon",
        isDefault: true
    },
]




interface CategoryState {
    categories: Category[]
}

const initialState: CategoryState = {
    categories: defaultCategories
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state , action: PayloadAction<Category>) => {
            state.categories.push(action.payload)
        },
        deleteCategory: (state , action:PayloadAction<Category> ) => {
            state.categories.filter(category => category.id != action.payload.id)
        },
        updateCategory: (state, action: PayloadAction<Category>) => {
            const index = state.categories.findIndex(c => c.id === action.payload.id);
            if (index !== -1) state.categories[index] = action.payload;
        },
    },
})

export const {addCategory , deleteCategory, updateCategory} = categoriesSlice.actions


export default categoriesSlice.reducer