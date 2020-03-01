import json
import boto3

dynamodb = boto3.client('dynamodb', region_name='us-east-1')

print(dynamodb.get_item(TableName='Anomalies', Key={'ANOMALY_SCORE':{'S':'main'}}))