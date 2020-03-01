import h5py
from os import listdir, getcwd
from os.path import isfile, join
import numpy as np
from sklearn.decomposition import PCA
import random
import matplotlib.pyplot as plt


def reject_outliers(data, m=2):
    return data[abs(data - np.mean(data)) < m * np.std(data)]


path = getcwd() + '/2020_Challenge_IOT_Analytics/competitionfiles'
files = [f for f in listdir(path) if isfile(join(path, f))]
for file in files[:1]:
    rf = h5py.File(path + '/' + file, 'r')
    chanIDs = rf['DYNAMIC DATA']
    data = []
    with open('analysis.csv', 'w') as wf:
        wf.write('channel,range_max,range_min,mean,variance,std_dev,range_size\n')
        for key in list(chanIDs.keys()):
            data.append([])
            data[len(data) - 1].extend(chanIDs[key]['MEASURED'][()])
            cleaned_data = reject_outliers(chanIDs[key]['MEASURED'][()])
            row = str(key) + ','
            try:
                range_max = np.max(cleaned_data)
                range_min = np.min(cleaned_data)
                mean = np.mean(chanIDs[key]['MEASURED'][()])
                variance = np.var(chanIDs[key]['MEASURED'][()])
                std_dev = np.sqrt(variance)
                row += str(range_max) + ',' + str(range_min) + ',' + str(mean) + ',' + str(variance) + ',' + str(std_dev) + ',' + str(range_max - range_min) + '\n'
            except:
                row += str(0) + ',' + str(0) + ',' + str(0) + ',' + str(0) + ',' + str(0) + ',' + str(0) + '\n'
            wf.write(row)
        wf.close()
    rf.close()
