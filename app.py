import streamlit as st
import os
import shutil

# Streamlit 1.62 Page Configuration
st.set_page_config(
    page_title="Mamata Balesh Kamagoudar | AI/ML & Full-Stack Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Hide Streamlit UI Chrome and set dark background
st.markdown("""
<style>
    #MainMenu, footer, header { visibility: hidden; }
    .stApp { background-color: #05070e; margin: 0; padding: 0; }
    .block-container { padding: 0rem !important; max-width: 100% !important; }
</style>
""", unsafe_allow_html=True)

base_dir = os.path.dirname(__file__)
dist_dir = os.path.join(base_dir, "dist")
static_dir = os.path.join(base_dir, "static")

# Automatically sync compiled React build to static folder
if os.path.exists(dist_dir):
    try:
        os.makedirs(static_dir, exist_ok=True)
        dist_assets = os.path.join(dist_dir, "assets")
        static_assets = os.path.join(static_dir, "assets")
        os.makedirs(static_assets, exist_ok=True)
        shutil.copy(os.path.join(dist_dir, "index.html"), os.path.join(static_dir, "index.html"))
        if os.path.exists(dist_assets):
            for file_name in os.listdir(dist_assets):
                shutil.copy(os.path.join(dist_assets, file_name), os.path.join(static_assets, file_name))
    except Exception:
        pass

static_index = os.path.join(static_dir, "index.html")

if os.path.exists(static_index):
    with open(static_index, "r", encoding="utf-8") as f:
        html_code = f.read()

    # Rewrite asset paths to absolute Streamlit static routes
    html_code = html_code.replace('src="./assets/', 'src="/app/static/assets/')
    html_code = html_code.replace('href="./assets/', 'href="/app/static/assets/')
    html_code = html_code.replace('src="/assets/', 'src="/app/static/assets/')
    html_code = html_code.replace('href="/assets/', 'href="/app/static/assets/')

    # Use modern Streamlit st.html for native DOM injection
    st.html(html_code)
else:
    try:
        import streamlit_app_native
    except Exception as e:
        st.error(f"App initialization error: {e}")
