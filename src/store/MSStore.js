import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const MSStore = (set) => ({
  // Section1 Name
  fname: "Gundam",
  lname: "Gundam",
  setName: (newValue) => set({ fname: newValue }),

  // Section2 Counter
  value: 0,
  incNum: () => set((state) => ({ value: state.value + 1 })),
  decNum: () => set((state) => ({ value: state.value - 1 })),
  resetNum: () => set({ value: 0 }),

  // Section3 Array of Strings
  arr1: [],
  addTodo: (newTodo) => set((state) => ({ arr1: [...state.arr1, newTodo] })),
  removeTodo: (index) =>
    set((state) => ({
      arr1: state.arr1.filter((item, idx) => idx !== index),
    })),

  // Section4 Array of Objects
  arr2: [
    { model: "RX-78", name: "Gundam" },
    { model: "XXX-01", name: "Wing Gundam" },
  ],
  addMS: (newMS) => set((state) => ({ arr2: [...state.arr2, newMS] })),
  removeMS: (index) =>
    set((state) => ({
      arr2: state.arr2.filter((item, idx) => idx !== index),
    })),

  // Section5 API
  data: [],
  isLoading: false,
  error: false,
  errMessage: "",
  getData: async () => {
    try {
      set({ isLoading: true, error: false, errMessage: "" });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ isLoading: false, data: res.data });
    } catch (err) {
      set({ error: true, errMessage: err.message, isLoading: false });
    }
  },
});

// Persist only the data that you want to persist
const MSStorePersist = persist(MSStore, {
  name: "MSStore",
  blacklist: ["isLoading", "error", "errMessage"],
  getStorage: () => localStorage,
  partialize: (state) => ({
    fname: state.fname,
    lname: state.lname,
    value: state.value,
    arr1: state.arr1,
    arr2: state.arr2,
  }),
});

const useStore = create(persist(MSStore, MSStorePersist));

export default useStore;
