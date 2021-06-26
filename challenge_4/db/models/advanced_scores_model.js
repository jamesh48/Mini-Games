module.exports = (sequelize, DataTypes) => {
  const AdvancedScores = sequelize.define(`advanced_scores`, {
    username: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false
  });

  return AdvancedScores;
};
