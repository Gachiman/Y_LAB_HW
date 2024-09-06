export const mockFetch = async (
  url, params
) => {
  return new Promise((resolve) => {
    const body = JSON.parse(params.body);
    const result = { URL: url, ...body };
    console.log(result);
    alert('Welcome back!');
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};