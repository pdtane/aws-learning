const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

const apiGateway = new AWS.APIGateway();

(async () => {
    let restApis = await apiGateway.getRestApis({}).promise();
    restApis.items.forEach(async (api) => {
        const deployments = 
            await apiGateway.getDeployments( { restApiId: api.id }).promise();
        console.log(deployments);
    });
})();
