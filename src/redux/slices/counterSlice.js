import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "لا إله إلا الله": 0,
    "الحمد لله":0,
    "استغفر الله":0,
    "سبحان الله":0,
    "رب إغفر لي ولوالدي": 0,
    "لا حول ولا قوة إلا بالله العظيم":0,
    "الله اكبر":0,
    "إنا لله وإنا اليه راجعون":0,
    "لا إله إلا الله وحده لا شريك له، لهُ الملك ، ولهُ الحمدُ، وهو على كل شيء قدير":0,
    "لا إله إلا نت سبحانك إني كنت من الظالمين":0,
    "أستغفر الله الذى لا إله إلا هو الحيّ القيّوم وأتوب إليه":0,
    "ربِ إغفر لي":0,
    "لا إله إلا الله وحده لا شريك له، لهُ الملك، ولهُ الحمد، وهو على كل شيء قدير":0,
    "أستغفر الله الذى لا إله إلا هو الحيّ القيّوم وأتوب إليه":0,
    "سبحان الله وبحمده سبحان الله العظيم":0,
}

const setCount= (item, value) =>{
    sessionStorage.setItem(item, value)
}

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state, action) => {
        var vcount = sessionStorage.getItem(action.payload)
        setCount ([action.payload], Number(vcount) + 1)
        
        return {
            ...state, [action.payload]:state[action.payload]+1
        }
    },
    
    reset: (state, action ) => {
        sessionStorage.setItem([action.payload],0)
        return{
            ...state, [action.payload]:0
        }
    
    }
  }
});

export const { increment, reset } = counterSlice.actions

export default counterSlice.reducer