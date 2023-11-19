import { create } from "zustand";

import { axiosClient } from "@/helper/axios/axiosClient";

const initialState = {
  isLoading: false,
  payload: {},
};

const useFetchCheckout = create((set) => ({
  ...initialState,

  fetch: async (data) => {
    const url = "/vnPay/create_payment_url";

    const response = await axiosClient.post(url, data);

    set({ payload: await response.data });
  },
}));

export default useFetchCheckout;
