module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define(`user_logins`, {
    username: {
      type: DataTypes.STRING,
    },
    userPass: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });

  return UserLogin;
};
