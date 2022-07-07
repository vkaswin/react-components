import { axiosIntance } from "service/axiosInstance";
import { endpoints } from "service/endpoints";

export const fileUpload = ({ data, onUploadProgress }) => {
  return axiosIntance({
    method: "post",
    url: endpoints.FILE_UPLOAD,
    data,
    onUploadProgress,
  });
};

export const getAllProducts = () => {
  return axiosIntance({
    method: "get",
    url: endpoints.GET_ALL_PRODUCTS,
  });
};

export const getAllPosts = ({ params }) => {
  return axiosIntance({
    method: "get",
    url: endpoints.GET_ALL_POSTS,
    params,
  });
};

export const getProductList = () => {
  return axiosIntance({
    method: "get",
    url: endpoints.PRODUCT_LIST,
  });
};
