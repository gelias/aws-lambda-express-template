const awsRegion = () => {
  const environment = process.env.NODE_ENV;
  if (["development", "approval", undefined].includes(environment))
    return "us-east-2";
  if ("production" === environment) return "us-east-1";
};

module.exports = {
  awsRegion
};
