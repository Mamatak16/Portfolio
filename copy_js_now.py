import os
import shutil

base_dir = r"c:\Users\Asus\Desktop\Portfolio"
dist_assets = os.path.join(base_dir, "dist", "assets")
static_assets = os.path.join(base_dir, "static", "assets")

os.makedirs(static_assets, exist_ok=True)
for f in os.listdir(dist_assets):
    src_file = os.path.join(dist_assets, f)
    dst_file = os.path.join(static_assets, f)
    shutil.copy(src_file, dst_file)
    print(f"Copied {f} to {dst_file}")
