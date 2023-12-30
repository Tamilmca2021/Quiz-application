import { create } from "zustand";
import apiprovider from "../network/Apiprovider";

export const userStore = create((set) => ({
  page: 1,
  search: "",
  AlluserData: [],
  isloading: false,
  setPage: (page) => set({ page }),
  setSearch: (search) => set({ search }),

  async fetchAlluser() {
    const { page, search } = userStore.getState();

    const result = await apiprovider.fetchAllUser({ page, search });
    if (result != null) {
      console.log(result.data);
      set({ AlluserData: result.data ?? [] });
    }
  },
}));
