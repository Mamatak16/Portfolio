import streamlit as st
import os
import shutil

# Streamlit Page Config
st.set_page_config(
    page_title="Mamata Balesh Kamagoudar | AI/ML & Full-Stack Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Full-screen dark layout styling & remove default Streamlit padding
st.markdown("""
<style>
    #MainMenu, footer, header { visibility: hidden; }
    .stApp { background-color: #05070e; margin: 0; padding: 0; }
    .block-container { padding: 0rem !important; max-width: 100% !important; }
    iframe { width: 100% !important; border: none !important; }
</style>
""", unsafe_allow_html=True)

base_dir = os.path.dirname(__file__)
dist_dir = os.path.join(base_dir, "dist")
static_dir = os.path.join(base_dir, "static")

# Automatically sync dist build output to static folder if dist exists
if os.path.exists(dist_dir):
    try:
        if not os.path.exists(static_dir):
            shutil.copytree(dist_dir, static_dir)
        else:
            # Sync index.html and assets
            shutil.copy(os.path.join(dist_dir, "index.html"), os.path.join(static_dir, "index.html"))
            dist_assets = os.path.join(dist_dir, "assets")
            static_assets = os.path.join(static_dir, "assets")
            if os.path.exists(dist_assets):
                os.makedirs(static_assets, exist_ok=True)
                for f in os.listdir(dist_assets):
                    shutil.copy(os.path.join(dist_assets, f), os.path.join(static_assets, f))
    except Exception:
        pass

# Render the React Cyberpunk Portfolio from Streamlit's static route
st.components.v1.iframe("/app/static/index.html", height=4000, scrolling=True)
