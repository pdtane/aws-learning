import boto3
import pprint

apiGatewayClient = boto3.client('apigateway')
ec2Client = boto3.client('ec2')
ec2Resource = boto3.resource('ec2')

response = apiGatewayClient.get_rest_apis()
print('Existing Rest APIs:')
for api in response['items']:
    print(api['name'])
    r = apiGatewayClient.get_deployments(restApiId=api['id'])
    for deployment in r['items']:
        print(deployment)

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
    print(instance)

