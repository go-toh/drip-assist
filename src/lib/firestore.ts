import { db } from "./firebase";
import { doc, getDoc, getDocs, setDoc, deleteDoc, collection, updateDoc, arrayUnion, addDoc } from "firebase/firestore";

export type Recipe = {
    bean_type: string  | null | undefined,
    drip_dist: Array<number>  | null | undefined,
    drip_times: number,
    head_count: number,
    powder_weight: number | null | undefined,
    recipe_ID: string,
    recipe_coment: string | null | undefined,
    recipe_title: string | null | undefined,
    setting_date: Date,
    user_ID: string  | null | undefined,
    user_name: string  | null | undefined,
    water_temp: number | null | undefined,
    water_weight: number,
    steam_time: number | null | undefined,
    steam_weight: number | null | undefined
}

export const setCustomRecipe = async(recipe: Recipe) => {
    await setDoc(doc(db, "recipe", "custom"), {
        ...recipe
      });
}