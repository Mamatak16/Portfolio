import streamlit as st
import streamlit.components.v1 as components
import os

# Streamlit Page Config
st.set_page_config(
    page_title="Mamata Balesh Kamagoudar | AI/ML & Full-Stack Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Full-screen dark layout styling
st.markdown("""
<style>
    #MainMenu, footer, header { visibility: hidden; }
    .stApp { background-color: #05070e; }
    .block-container { padding: 0rem !important; max-width: 100% !important; }
    iframe { border: none !important; width: 100% !important; }
</style>
""", unsafe_allow_html=True)

# Path to production build
dist_index = os.path.join(os.path.dirname(__file__), "dist", "index.html")

if os.path.exists(dist_index):
    with open(dist_index, "r", encoding="utf-8") as f:
        html_code = f.read()
    components.html(html_code, height=1200, scrolling=True)
else:
    # Fallback to local dev server if running locally
    components.iframe("http://localhost:3000", height=1000, scrolling=True)
