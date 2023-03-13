import { Student } from "models/students";
import { ListRespone } from "../models";
import axiosClient from "./axiosClient";

const cityApi = {
  getAll(): Promise<ListRespone<Student>> {
    const url = "/student";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 30,
      },
    });
  },

  getById(id: string): Promise<Student> {
    const url = `./student/${id}`;
    return axiosClient.get(url);
  },

  add(data: Student): Promise<Student> {
    const url = "/student";
    return axiosClient.post(url, data);
  },

  update(data: Student): Promise<Student> {
    const url = "/student";
    return axiosClient.put(url, data);
  },

  removeStudent(id: string) {
    const url = `/student/${id}`;
    return axiosClient.delete(url);
  },
};

export default cityApi;
