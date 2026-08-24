import streamlit as st
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
</style>
""", unsafe_allow_html=True)

dist_index = os.path.join(os.path.dirname(__file__), "dist", "index.html")

if os.path.exists(dist_index):
    with open(dist_index, "r", encoding="utf-8") as f:
        html_code = f.read()
    st.html(html_code)
else:
    st.error("Please run `npm run build` first to generate the `dist/` directory.")
