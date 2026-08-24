import streamlit as st

st.set_page_config(
    page_title="Mamata Balesh Kamagoudar | AI/ML Portfolio",
    page_icon="🤖",
    layout="wide"
)

# Dark Futuristic Cyberpunk CSS Theme
st.markdown("""
<style>
    .stApp {
        background-color: #05070e;
        color: #e2e8f0;
    }
    .main-title {
        font-size: 3rem;
        font-weight: 800;
        background: linear-gradient(135deg, #00f0ff 0%, #818cf8 50%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .badge {
        background-color: rgba(0, 240, 255, 0.1);
        color: #00f0ff;
        padding: 4px 12px;
        border-radius: 6px;
        border: 1px solid rgba(0, 240, 255, 0.3);
        font-family: monospace;
        font-size: 0.8rem;
    }
    .card {
        background: rgba(13, 17, 28, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 15px;
    }
</style>
""", unsafe_allow_html=True)

# Header
st.markdown('<span class="badge">COMPUTER SCIENCE ENGINEERING • AI/ML • FULL STACK</span>', unsafe_allow_html=True)
st.markdown('<h1 class="main-title">Mamata Balesh Kamagoudar</h1>', unsafe_allow_html=True)
st.caption("RV Institute of Technology and Management, Bengaluru • B.E. CSE (2023–2027) • CGPA: 8.55 / 10")

st.markdown("---")

# Metrics
col1, col2, col3, col4 = st.columns(4)
col1.metric("CGPA", "8.55 / 10")
col2.metric("Internships", "3+")
col3.metric("Major Projects", "6+")
col4.metric("Graduation", "2027")

st.markdown("---")

# Navigation Tabs
tab1, tab2, tab3, tab4, tab5 = st.tabs(["🚀 Projects", "💼 Experience", "🛠️ Tech Stack", "🏆 Achievements", "📬 Contact"])

with tab1:
    st.header("Featured Projects")
    
    st.subheader("1. BOOKBRIDGE — MERN Community Marketplace")
    st.write("Full-stack community platform to buy, sell, exchange, and donate books.")
    st.tags = st.write("**Tech:** React.js • Node.js • Express.js • MongoDB • Cloudinary")
    st.markdown("[View GitHub Repository](https://github.com/Mamatak16/BookBridge)")
    
    st.divider()
    
    st.subheader("2. RANK2COLLEGE — KCET Rank Predictor")
    st.write("Machine learning app predicting suitable engineering colleges based on KCET cutoff trends.")
    st.write("**Tech:** Python • Pandas • Scikit-learn • Machine Learning")
    st.markdown("[View GitHub Repository](https://github.com/Mamatak16/KCET_Rank_Predictor_CollegeList_Generator)")

    st.divider()

    st.subheader("3. SMART TIMETABLE ASSISTANT — Agentic AI")
    st.write("Intelligent schedule assistant built with LangChain, LLMs, and autonomous tool calling.")
    st.write("**Tech:** Python • LangChain • Agentic AI • LLMs")
    st.markdown("[View GitHub Repository](https://github.com/Mamatak16/Smart-Time-Table-Assistant)")

with tab2:
    st.header("Experience Timeline")
    st.markdown("""
    - **Capabl** — *AI/ML Intern (Agentic AI)* (Sep 2025 – Jan 2026)
      - Developed intelligent schedule management assistant using LangChain & autonomous tool calling.
    - **EISystems Services** — *Machine Learning Intern* (May 2025 – Jul 2025)
      - Built real estate price prediction models comparing Random Forest, XGBoost & Linear Regression.
    - **ElevanceSkills** — *Data Science Intern (Generative AI)* (May 2025 – Aug 2025)
      - Built real-time text-to-image inference pipelines using PyTorch.
    """)

with tab3:
    st.header("Technical Stack")
    st.write("**Languages:** Python, Java, JavaScript, C")
    st.write("**Web & Frameworks:** MERN Stack, React.js, Node.js, Express.js, MongoDB")
    st.write("**AI / ML:** Machine Learning, Generative AI, Agentic AI, PyTorch, LangChain, Scikit-learn, GNN")
    st.write("**Core CS:** Data Structures & Algorithms, OOP, DBMS, Operating Systems")

with tab4:
    st.header("Achievements & Certifications")
    st.success("🎖️ National Cadet Corps (NCC) 'C' Certificate — Grade 'A'")
    st.info("📜 Certifications: Machine Learning (EISystems), Agentic AI (Capabl), Cisco Networking, Generative AI (IISc Bengaluru), Cyber Security (RVITM)")

with tab5:
    st.header("Contact Mamata")
    st.write("📧 Email: kamagoudarmamata@gmail.com")
    st.write("📞 Phone: +91 8197581999")
    st.markdown("[GitHub Profile](https://github.com/Mamatak16) | [LinkedIn Profile](https://www.linkedin.com/in/mamata-kamagoudar)")
