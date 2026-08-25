import streamlit as st
import os

# Streamlit Page Configuration
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
static_index = os.path.join(base_dir, "static", "index.html")

if not os.path.exists(static_index):
    static_index = os.path.join(base_dir, "dist", "index.html")

if os.path.exists(static_index):
    with open(static_index, "r", encoding="utf-8") as f:
        html_code = f.read()

    # Rewrite relative asset URLs to absolute Streamlit static routes
    html_code = html_code.replace('src="./assets/', 'src="/app/static/assets/')
    html_code = html_code.replace('href="./assets/', 'href="/app/static/assets/')
    html_code = html_code.replace('src="/assets/', 'src="/app/static/assets/')
    html_code = html_code.replace('href="/assets/', 'href="/app/static/assets/')

    st.components.v1.html(html_code, height=4000, scrolling=True)
else:
    try:
        import streamlit_app_native
    except Exception as e:
        st.error(f"App initialization error: {e}")
