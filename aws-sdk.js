const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

const apiGateway = new AWS.APIGateway();
const cloudformation = new AWS.CloudFormation();
const ec2 = new AWS.EC2();


(async () => {
    let restApis = await apiGateway.getRestApis({}).promise();
    restApis.items.forEach(async (api) => {
        const deployments = 
            await apiGateway.getDeployments( { restApiId: api.id }).promise();
        /* console.log(deployments); */
    });

    let cfStacks = await cloudformation.describeStacks().promise();
    /* cfStacks.Stacks.forEach(s => console.log(s)); */

    const ec2Instances = await ec2.describeInstances().promise();
    const instances = ec2Instances.Reservations.reduce((acc, e) => [...acc, ...e.Instances], []);
    console.log(instances);
})();
