import boto3

client = boto3.client('apigateway')

response = client.get_rest_apis()

print('Existing Rest APIs:')
for api in response['items']:
    print(api['name'])
    r = client.get_deployments(restApiId=api["id"])
    for deployment in r['items']:
        print(deployment)