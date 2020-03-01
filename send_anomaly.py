import json
import boto3

kinesis = boto3.client('kinesis', region_name='us-east-1')

with open('TestData.json') as f:
    lines = f.readlines()
    payload = json.loads(lines[0])

payload['ch_1'] = 10000
print(payload)
data = json.dumps(payload)
kinesis.put_record(
    StreamName="LiveDataInputStream",
    Data=data,
    PartitionKey="partitionkey") 

