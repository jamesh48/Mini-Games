module.exports = (sequelize, DataTypes) => {
  const IntermediateScores = sequelize.define(`intermediate_scores`, {
    username: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false
  });

  return IntermediateScores;
};
