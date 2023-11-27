# build_files.sh
echo "Current directory: $(pwd)"
ls -l

pip install -r requirements.txt
python3.9 manage.py collectstatic
