module.exports = (sequelize, DataTypes) => {
  const BeginnerScores = sequelize.define(`beginner_scores`, {
    username: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false
  });

  return BeginnerScores;
};
