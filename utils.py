import os
import uuid


def zipdir(path, zip):
    for root, dirs, files in os.walk(path):
        for file in files:
            zip.write(os.path.join(root, file))


def generate_unique_filename():
    return str(uuid.uuid4()) + '.zip'
