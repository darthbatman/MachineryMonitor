import json
import boto3

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps(dynamodb.get_item(TableName='Anomalies', Key={'ANOMALY_SCORE':{'S':'main'}})['Item']['info']['M']['ANOMALY_SCORE']['S'])
    }
