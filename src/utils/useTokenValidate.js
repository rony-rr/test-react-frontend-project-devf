const checkToken = async () => {
  const token = await localStorage.getItem("tokenUser");
  if (token) return token;
  return false;
};

export default checkToken;
