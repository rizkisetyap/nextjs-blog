import { BASE_URL_JSONP } from './constant';

const fetchPost = async () => {
  try {
    const res = await fetch(`${BASE_URL_JSONP}/posts`);
    if (res.status !== 200) return [];
    const json = await res.json();
    return json;
  } catch (error) {
    return [];
  }
};
export const fetchPostById = async (id: number | undefined) => {
  if (!id) return {};
  try {
    const res = await fetch(`${BASE_URL_JSONP}/posts/${id}`);
    if (res.status !== 200) return {};
    const json = await res.json();
    return json;
  } catch (error) {
    return {};
  }
};

export default fetchPost;
