import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { GetItem, PostItem } from "../Types/Item";

const api = "/api";

export const getPosts = async (limit?: number) => {
  try {
    const url = limit ? `${api}/posts?limit=${limit}` : api + "/posts";
    const data = await axios.get<GetItem[]>(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getPost = async (id?: string) => {
  try {
    const data = await axios.get<GetItem>(api + "/posts/" + id);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const postPost = async (
  title: string,
  description: string,
  content: string
) => {
  try {
    const data = await axios.post<PostItem>(api + "/posts", {
      title: title,
      content: content,
      description: description,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deletePost = async (id?: string) => {
  try {
    const data = await axios.delete(api + "/posts/" + id);
    return data;
  } catch (error) {
    handleError(error);
  }
};
