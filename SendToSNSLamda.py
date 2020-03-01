import json
import boto3

client = boto3.client('sns')

def lambda_handler(event, context):
    print(json.dumps(event))
    response = client.publish(
        TargetArn='arn:aws:sns:us-east-1:430229884637:AnomalyDetectionSNS',
        Message=json.dumps(event['queryStringParameters'])
    )
    return {
        'statusCode': 200,
        'body': json.dumps(event['queryStringParameters'])
    }
