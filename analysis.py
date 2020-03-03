import h5py
from os import listdir, getcwd
from os.path import isfile, join
import numpy as np
from sklearn.decomposition import PCA
import random
import matplotlib.pyplot as plt
import numpy as np


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
        c = np.cov(data)
        second_min_cov = c.flatten().argsort()[::-1][-2:][::-1][1]
        second_min_cov = np.unravel_index(second_min_cov, c.shape)
        third_min_cov = c.flatten().argsort()[::-1][-4:][::-1][3]
        third_min_cov = np.unravel_index(third_min_cov, c.shape)
        fourth_min_cov = c.flatten().argsort()[::-1][-6:][::-1][5]
        fourth_min_cov = np.unravel_index(fourth_min_cov, c.shape)
        fifth_min_cov = c.flatten().argsort()[::-1][-8:][::-1][7]
        fifth_min_cov = np.unravel_index(fifth_min_cov, c.shape)
        sixth_min_cov = c.flatten().argsort()[::-1][-10:][::-1][9]
        sixth_min_cov = np.unravel_index(sixth_min_cov, c.shape)
        seventh_min_cov = c.flatten().argsort()[::-1][-12:][::-1][11]
        seventh_min_cov = np.unravel_index(seventh_min_cov, c.shape)
        eighth_min_cov = c.flatten().argsort()[::-1][-36:][::-1][35]
        eighth_min_cov = np.unravel_index(eighth_min_cov, c.shape)
        ninth_min_cov = c.flatten().argsort()[::-1][-92:][::-1][91]
        ninth_min_cov = np.unravel_index(ninth_min_cov, c.shape)
        min_cov = np.unravel_index(np.argmin(c), c.shape)
        print('min_cov: ' + str(list(chanIDs.keys())[min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[min_cov[1]]))
        print('second_min_cov: ' + str(list(chanIDs.keys())[second_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[second_min_cov[1]]))
        print('third_min_cov: ' + str(list(chanIDs.keys())[third_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[third_min_cov[1]]))
        print('fourth_min_cov: ' + str(list(chanIDs.keys())[fourth_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[fourth_min_cov[1]]))
        print('fifth_min_cov: ' + str(list(chanIDs.keys())[fifth_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[fifth_min_cov[1]]))
        print('sixth_min_cov: ' + str(list(chanIDs.keys())[sixth_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[sixth_min_cov[1]]))
        print('seventh_min_cov: ' + str(list(chanIDs.keys())[seventh_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[seventh_min_cov[1]]))
        print('eighth_min_cov: ' + str(list(chanIDs.keys())[eighth_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[eighth_min_cov[1]]))
        print('ninth_min_cov: ' + str(list(chanIDs.keys())[ninth_min_cov[0]]) + ' and ' + str(list(chanIDs.keys())[ninth_min_cov[1]]))
    rf.close()
