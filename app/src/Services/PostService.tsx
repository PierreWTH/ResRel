import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { GetItem, PostItem } from "../Types/Item";

const api = "/api/posts";

export const getPosts = async (limit?: number) => {
  try {
    const url = limit ? `${api}?limit=${limit}` : api;
    const data = await axios.get<GetItem[]>(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const postPost = async (title: string, content: string) => {
  try {
    const data = await axios.post<PostItem>(api, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
