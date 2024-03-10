import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { GetPost, PostPost } from "../Types/Post";

const api = "/api/posts";

export const getPosts = async () => {
  try {
    const data = await axios.get<GetPost>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const postPost = async (title: string, content: string) => {
  try {
    const data = await axios.post<PostPost>(api, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
