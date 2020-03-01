 
import json
import boto3
import time
import random

# {"uid": 2147542273, "value": 1, "field": "ENGINE_ON"}
# {"uid": 2147542314, "value": 356193.60000000003, "field": "SPRAY_NOZZLE_PRESSURE"}
# awsuser       rU9YFVR7%&m%

# session = boto3.session.Session()
kinesis = boto3.client('kinesis', region_name='us-east-1')

while True:    
    with open('TestData.json') as f:
        lines = f.readlines()
        c = 0
        for line in lines:
            c+= 1
            print(line)
            if c % 100 == 0:
                print(c)
            kinesis.put_record(
                StreamName="LiveDataInputStream",
                Data=line,
                PartitionKey=str(random.randint(0, 15)))
            time.sleep(1)
