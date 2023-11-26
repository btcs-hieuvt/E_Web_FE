import apiBase from "./apiClient";

export const UploadImage = async (bodyPost: FormData) => {
  try {
    const response = await apiBase.post(`media/upload`, bodyPost, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
