# An Amazon Kinesis Analytics application will invoke this function after it has seen determined it has seen all records associated with a
# particular rowtime value.
# If records are emitted to the destination in-application stream with in the Kinesis Analytics application as a tumbling window, this means
# that this function is invoked per tumbling window trigger.
# If records are emitted to the destination in-application stream with in the Kinesis Analytics application as a continuous query or a sliding
# window, this means your Lambda function will be invoked approximately once per second.

# This function requires that the output records of the Kinesis Analytics application has a key identifier (row_id) and rowtimestamp (row_timestamp)
# and the output record format type is specified as JSON.

# A sample output record from Kinesis Analytics application for this function is as below
# {"ROWTIME_TIMESTAMP":"2017-12-15 01:09:50.000","VEHICLEID":"5","VEHICLECOUNT":18}

# Please uncomment the below code as it fit your needs.

from __future__ import print_function
import boto3
import base64
import json
import decimal
import datetime

dynamodb_client = boto3.client('dynamodb')

session = boto3.session.Session()
dynamodb = session.resource('dynamodb')
table = dynamodb.Table('Anomalies')


def lambda_handler(event, context):
    payload = event['records']
    output = []

    for record in payload:
        # # This block parses the record, and writes it to the DDB table.
        payload = base64.b64decode(record['data'])
        data_item = json.loads(payload)
        # print(data_item)
        output.append({'recordId': record['recordId'], 'result': 'Ok'})
        
        response = table.put_item(
            Item={
                'ANOMALY_SCORE': 'main',
                'info': {
                    'ANOMALY_SCORE': json.dumps(data_item)
                }
            })
    return {'records': output}
