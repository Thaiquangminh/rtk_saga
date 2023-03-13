import axiosClient from "./axiosClient";
import { City, ListRespone } from "../models";

const cityApi = {
  getAll(): Promise<ListRespone<City>> {
    const url = "/cities";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 30,
      },
    });
  },
};

export default cityApi;
