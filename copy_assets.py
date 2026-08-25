import os
import shutil

base_dir = os.path.dirname(__file__)
dist_dir = os.path.join(base_dir, "dist")
static_dir = os.path.join(base_dir, "static")
streamlit_static_dir = os.path.join(base_dir, ".streamlit", "static")

for target in [static_dir, streamlit_static_dir]:
    if os.path.exists(target):
        shutil.rmtree(target)
    shutil.copytree(dist_dir, target)
    print(f"Copied {dist_dir} -> {target}")
