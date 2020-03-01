import h5py
from os import listdir, getcwd
from os.path import isfile, join


def hdf_to_csv():
    path = getcwd() + '/2020_Challenge_IOT_Analytics/competitionfiles'
    files = [f for f in listdir(path) if isfile(join(path, f))]
    for file in files:
        rf = h5py.File(path + '/' + file, 'r')
        chanIDs = rf['DYNAMIC DATA']

        csv_file_name = getcwd() + '/csv_data/' + \
            file.split('/')[-1].split('.')[0] + '.csv'
        with open(csv_file_name, 'w') as wf:
            channel_vals = {}
            row = ''
            for key in list(chanIDs.keys()):
                channel_vals[key] = chanIDs[key]['MEASURED'][()]
                row += key + ','
            row = row[:-1] + '\n'
            wf.write(row)
            for i in range(len(channel_vals[list(chanIDs.keys())[0]])):
                row = ''
                for key in list(chanIDs.keys()):
                    row += str(channel_vals[key][i]) + ','
                row = row[:-1] + '\n'
                wf.write(row)
            wf.close()

        rf.close()


def hdf_to_json():
    path = getcwd() + '/2020_Challenge_IOT_Analytics/competitionfiles'
    files = [f for f in listdir(path) if isfile(join(path, f))]
    for file in files:
        rf = h5py.File(path + '/' + file, 'r')
        chanIDs = rf['DYNAMIC DATA']

        csv_file_name = getcwd() + '/json_data/' + \
            file.split('/')[-1].split('.')[0] + '.json'
        with open(csv_file_name, 'w') as wf:
            channel_vals = {}
            for key in list(chanIDs.keys()):
                channel_vals[key] = chanIDs[key]['MEASURED'][()]
            for i in range(len(channel_vals[list(chanIDs.keys())[0]])):
                row = '{'
                for key in list(chanIDs.keys()):
                    row += '"' + key + '": ' + str(channel_vals[key][i]) + ', '
                row = row[:-2] + '}\n'
                wf.write(row)
            wf.close()

        rf.close()


if __name__ == '__main__':
    hdf_to_json()
