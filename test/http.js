var requests = {
  signin: () => {
    // handles both sign up and sign in requests that reads or creates data and returns user profile
    $.get("/user",{
      token:{}
    },
    (user) => {
      console.log("signin successfull: " + user);
    });
  },
  update: () => {
    // handles updates to the user information and returns updated user profile
    $.put("/update",{
      token:{},
      updates: [{}]
    },
    (user) => {
      console.log("updates successfull: " + user);
    });
  },
  delete: () => {
    // handles deletes from the user information and returns updated user profile
    $.delete("/delete",{
      token:{},
      deletes: [{}]
    },
    (user) => {
      console.log("deletes successfull: " + user);
    });
  },
  pulse: () => {
    // handles the pulse request main function for the app
    $.get("/pulse",{
      token:{}
    },
    (user) => {
      console.log("pulse successfull: " + user);
    });
  }
}
