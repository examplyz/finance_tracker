import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Category} from "../../types";

const defaultCategories: Category[] = [
    {
        id: 'cat-1' ,
        name: 'Food / Groceries' ,
        color: 'red',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-2' ,
        name: 'Healthcare' ,
        color: 'red',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-3' ,
        name: 'Travel' ,
        color: 'red',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-4' ,
        name: 'Housing' ,
        color: 'red',
        icon: "Some icon",
        isDefault: true
    },
    {
        id: 'cat-5' ,
        name: 'Miscellaneous' ,
        color: 'red',
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