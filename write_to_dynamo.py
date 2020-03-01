from __future__ import print_function
import boto3
import base64
import json
import decimal
import datetime

dynamodb_client = boto3.client('dynamodb')

f = open('sample_dynamo_record.txt')
data_item = json.loads(f.read())
print(data_item)
print(data_item['ANOMALY_SCORE'])

# ddb_item = {'ANOMALY_SCORE': {
#     'S': {str(data_item['ANOMALY_SCORE'])}
# }}
# dynamodb_client.put_item(TableName='EngineAnomaly', Item=ddb_item)
# {'ENGINE_COOLANT_TEMP': 84.0, 'ENGINE_OIL_PRESS': 496000.0, 'ENGINE_SPEED': 1455.375, 'FUEL_DELIVERY_PRESSURES': 496000, 'FUEL_LEVEL': 100.0, 'FUEL_RATE': 3.7777778080000005e-06, 'ANOMALY_SCORE': 0.7463396033570366}

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('Anomalies')
response = table.put_item(
    Item={
        'ANOMALY_SCORE': 'main',
        'info': {
            'ANOMALY_SCORE': json.dumps(data_item)
        }
    }
)
print(response)
print(json.dumps(data_item))