const getRecipentEmail = (users, userLoggedIn) => {
  return users?.filter((user) => user !== userLoggedIn?.email)[0];
};

export default getRecipentEmail;
