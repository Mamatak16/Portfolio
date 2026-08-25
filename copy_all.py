import os
import shutil

base_dir = r"c:\Users\Asus\Desktop\Portfolio"
dist_dir = os.path.join(base_dir, "dist")
static_dir = os.path.join(base_dir, "static")

if os.path.exists(static_dir):
    shutil.rmtree(static_dir)

shutil.copytree(dist_dir, static_dir)
print("Successfully copied dist -> static")
