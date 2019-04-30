const AwsCli = require('aws-cli-js');
const options = new AwsCli.Options();
const aws = new AwsCli.Aws(options);

const getCommandOutput = async (command) => {
    const data = await aws.command(command);
    return JSON.parse(data.raw);
};


(async () => {
    const restApis = await getCommandOutput('apigateway get-rest-apis');
    restApis.items.forEach(async (api) => {
        const deployments = 
            await getCommandOutput(`apigateway get-deployments --rest-api-id ${api.id}`);
        
        deployments.items.forEach(d => console.log(d));
    });
})();
