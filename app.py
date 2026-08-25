import os
import sys

# Execute the native Streamlit application
native_app_path = os.path.join(os.path.dirname(__file__), "streamlit_app_native.py")

with open(native_app_path, "r", encoding="utf-8") as f:
    code = f.read()

exec(compile(code, native_app_path, 'exec'))
