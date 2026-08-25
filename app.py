import streamlit as st
import os
import re

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

dist_dir = os.path.join(os.path.dirname(__file__), "dist")
dist_index = os.path.join(dist_dir, "index.html")

if os.path.exists(dist_index):
    with open(dist_index, "r", encoding="utf-8") as f:
        html_code = f.read()

    # Inline CSS files into <style> tags
    def replace_css(match):
        filename = os.path.basename(match.group(1))
        css_file_path = os.path.join(dist_dir, "assets", filename)
        if os.path.exists(css_file_path):
            with open(css_file_path, "r", encoding="utf-8") as f:
                return f"<style>\n{f.read()}\n</style>"
        return match.group(0)

    # Inline JS files into standard <script> tags (without type="module" to allow iframe execution)
    def replace_js(match):
        filename = os.path.basename(match.group(1))
        js_file_path = os.path.join(dist_dir, "assets", filename)
        if os.path.exists(js_file_path):
            with open(js_file_path, "r", encoding="utf-8") as f:
                return f"<script>\n{f.read()}\n</script>"
        return match.group(0)

    html_code = re.sub(r'<link\s+[^>]*href=["\'](\.?[/\\]?assets[/\\][^"\']+)["\'][^>]*>', replace_css, html_code)
    html_code = re.sub(r'<script\s+[^>]*src=["\'](\.?[/\\]?assets[/\\][^"\']+)["\'][^>]*></script>', replace_js, html_code)

    st.components.v1.html(html_code, height=3500, scrolling=True)
else:
    try:
        import streamlit_app_native
    except Exception as e:
        st.error(f"Error loading native app: {e}")
