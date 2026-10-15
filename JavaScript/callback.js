let input = function () {
  u_name = "Sahil";
  return u_name;
};

let match_user_details = function (a, pass) {
  const user_details = [
    {
      user: "Nakul",
      pass: 13101,
    },
    {
      user: "Sahil",
      pass: 90404,
    },
    {
      user: "Faizan",
      pass: 13102,
    },
  ];

  const name = a();

  for (let i = 0; i < user_details.length; i++) {
    if (name == user_details[i].user && pass == user_details[i].pass) {
      return "Matched";
    }
  }

  return "Not Found";
};

console.log(match_user_details(input, 90404));
