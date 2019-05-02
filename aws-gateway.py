import boto3
import pprint

apiGatewayClient = boto3.client('apigateway')
ec2Client = boto3.client('ec2')
ec2Resource = boto3.resource('ec2')

def get_deployments():
    all_deployments = []
    response = apiGatewayClient.get_rest_apis()
    deployments = map(lambda i: get_deployments_for_api(i['id']),
                      response['items'])
    for d in deployments:
        all_deployments.extend(d)
    return all_deployments

def get_deployments_for_api(restApiId):
    response = apiGatewayClient.get_deployments(restApiId=restApiId)
    return response['items']

response = apiGatewayClient.get_rest_apis()
print('Existing deployments:')
for deployment in get_deployments():
    pprint.pprint(deployment)

instances = []
response = ec2Client.describe_instances()
print('Existing instances:')
for reservation in response['Reservations']:
    for instance in reservation['Instances']:
        instances.append(instance)

for i in instances:
    pprint.pprint(i)

myInstances = ec2Resource.instances.all()
for instance in myInstances:
    pprint.pprint(instance)

