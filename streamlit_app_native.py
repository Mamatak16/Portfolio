import streamlit as st

# Page Configuration
try:
    st.set_page_config(
        page_title="Mamata Balesh Kamagoudar | AI/ML & Full-Stack Portfolio",
        page_icon="⚡",
        layout="wide",
        initial_sidebar_state="collapsed"
    )
except Exception:
    pass

# Custom Cyberpunk & Dark Modern CSS
st.markdown("""
<style>
    /* Dark Theme Base */
    .stApp {
        background-color: #05070e;
        color: #e2e8f0;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    
    #MainMenu, footer, header { visibility: hidden; }

    /* Main Headings */
    .gradient-heading {
        font-size: 2.8rem;
        font-weight: 800;
        background: linear-gradient(135deg, #00f0ff 0%, #818cf8 50%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0px;
        letter-spacing: -0.02em;
    }
    
    .role-subtitle {
        font-size: 1.15rem;
        color: #94a3b8;
        margin-top: 5px;
        margin-bottom: 15px;
    }

    /* Badges */
    .cyber-badge {
        display: inline-block;
        background: rgba(0, 240, 255, 0.08);
        color: #00f0ff;
        padding: 6px 14px;
        border-radius: 20px;
        border: 1px solid rgba(0, 240, 255, 0.3);
        font-family: monospace;
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 12px;
    }

    /* Cards */
    .portfolio-card {
        background: rgba(13, 17, 28, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 20px;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .portfolio-card:hover {
        border-color: rgba(0, 240, 255, 0.4);
    }

    /* Tech Tags */
    .tech-tag {
        display: inline-block;
        background: rgba(30, 41, 59, 0.7);
        color: #38bdf8;
        padding: 3px 10px;
        border-radius: 6px;
        font-size: 0.78rem;
        margin-right: 6px;
        margin-top: 6px;
        border: 1px solid rgba(56, 189, 248, 0.2);
    }
</style>
""", unsafe_allow_html=True)

# Top Banner / Header
st.markdown('<div class="cyber-badge">⚡ COMPUTER SCIENCE ENGINEERING • AI/ML • FULL STACK</div>', unsafe_allow_html=True)
st.markdown('<h1 class="gradient-heading">Mamata Balesh Kamagoudar</h1>', unsafe_allow_html=True)
st.markdown('<div class="role-subtitle">Building intelligent systems, one project at a time. | RVITM Bengaluru (2023–2027)</div>', unsafe_allow_html=True)

st.markdown("---")

# Metrics Banner
col1, col2, col3, col4 = st.columns(4)
with col1:
    st.metric(label="🎓 CGPA", value="8.55 / 10", delta="RVITM Bengaluru")
with col2:
    st.metric(label="💼 Internships", value="3 Roles", delta="Agentic AI & ML")
with col3:
    st.metric(label="🚀 Major Projects", value="4+ Key Apps", delta="Full-Stack & AI")
with col4:
    st.metric(label="📅 Graduation", value="2027", delta="B.E. CSE")

st.markdown("---")

# Main Navigation Tabs
tab_projects, tab_exp, tab_skills, tab_interests, tab_achievements, tab_contact = st.tabs([
    "🚀 Featured Projects",
    "💼 Industry Experience",
    "🛠️ Technical Skills",
    "🧠 Research & Interests",
    "🏆 Achievements & Certifications",
    "📬 Contact & Links"
])

# --- PROJECTS TAB ---
with tab_projects:
    st.header("Featured Projects")
    
    # Project 1: BOOKBRIDGE
    st.markdown("""
    <div class="portfolio-card">
        <h3>📚 BOOKBRIDGE — MERN Community Book Marketplace</h3>
        <p>A full-stack community platform enabling users to buy, sell, exchange, and donate books seamlessly.</p>
        <ul>
            <li>Book listings management with rich media uploading via Cloudinary</li>
            <li>Category-based search, multi-filters & RESTful API microservices</li>
            <li>Authenticated user profiles & real-time exchange workflows</li>
        </ul>
        <span class="tech-tag">React.js</span>
        <span class="tech-tag">Node.js</span>
        <span class="tech-tag">Express.js</span>
        <span class="tech-tag">MongoDB</span>
        <span class="tech-tag">Cloudinary</span>
    </div>
    """, unsafe_allow_html=True)
    st.markdown("[🔗 GitHub Repository: BookBridge](https://github.com/Mamatak16/BookBridge)")

    st.divider()

    # Project 2: RANK2COLLEGE
    st.markdown("""
    <div class="portfolio-card">
        <h3>🎯 RANK2COLLEGE — KCET Rank Predictor & Recommendation Engine</h3>
        <p>Machine learning application analyzing historical KCET cutoff data to generate personalized college recommendations.</p>
        <ul>
            <li>Predictive ranking algorithm based on cutoff trends across engineering branches</li>
            <li>Automated EDA pipeline for placement metrics & branch seat matrix</li>
        </ul>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Pandas</span>
        <span class="tech-tag">Scikit-learn</span>
        <span class="tech-tag">Machine Learning</span>
    </div>
    """, unsafe_allow_html=True)
    st.markdown("[🔗 GitHub Repository: Rank2College](https://github.com/Mamatak16/KCET_Rank_Predictor_CollegeList_Generator)")

    st.divider()

    # Project 3: SMART TIMETABLE ASSISTANT
    st.markdown("""
    <div class="portfolio-card">
        <h3>🤖 SMART TIMETABLE ASSISTANT — Agentic AI Schedule Assistant</h3>
        <p>Intelligent timetable assistant helping users organize academic schedules using LLMs and autonomous agents.</p>
        <ul>
            <li>Autonomous agent loop powered by LangChain and conversational memory</li>
            <li>Multi-turn tool calling & dynamic conflict resolution logic</li>
        </ul>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">LangChain</span>
        <span class="tech-tag">Agentic AI</span>
        <span class="tech-tag">LLMs</span>
    </div>
    """, unsafe_allow_html=True)
    st.markdown("[🔗 GitHub Repository: Smart Timetable Assistant](https://github.com/Mamatak16/Smart-Time-Table-Assistant)")

    st.divider()

    # Project 4: GNN AGRICULTURAL RECOMMENDATION
    st.markdown("""
    <div class="portfolio-card">
        <h3>🌾 GNN + KNOWLEDGE GRAPH RECOMMENDATION SYSTEM</h3>
        <p>Agricultural recommendation system combining Graph Neural Networks and Knowledge Graphs for crop and soil intelligence.</p>
        <ul>
            <li>Knowledge Graph construction for agricultural entity relations</li>
            <li>GNN node embeddings for hybrid topological graph learning</li>
        </ul>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Graph Neural Networks</span>
        <span class="tech-tag">Knowledge Graphs</span>
        <span class="tech-tag">PyTorch</span>
    </div>
    """, unsafe_allow_html=True)

# --- EXPERIENCE TAB ---
with tab_exp:
    st.header("Industry Experience")

    st.subheader("1. Capabl — AI/ML Intern (Agentic AI)")
    st.caption("Sep 2025 – Jan 2026 • Remote")
    st.write("• Developed an intelligent schedule management assistant leveraging LangChain and LLMs, integrating autonomous agents, tool calling, and conversational memory.")
    st.markdown("`Python` `LangChain` `LLMs` `Agentic AI` `Tool Calling`")

    st.divider()

    st.subheader("2. EISystems Services — Machine Learning Intern")
    st.caption("May 2025 – Jul 2025 • Remote")
    st.write("• Engineered an end-to-end real estate price prediction system, performing EDA, preprocessing, and feature engineering.")
    st.write("• Built and evaluated predictive models using Pandas, NumPy, and Scikit-learn, comparing Linear Regression, Random Forest, and XGBoost.")
    st.markdown("`Python` `Pandas` `NumPy` `Scikit-learn` `XGBoost` `ML` ")

    st.divider()

    st.subheader("3. ElevanceSkills — Data Science Intern (Generative AI)")
    st.caption("May 2025 – Aug 2025 • Remote")
    st.write("• Built a real-time text-to-image generator using Python, PyTorch, and generative AI libraries, converting textual prompts into high-quality images.")
    st.write("• Designed end-to-end inference pipelines and applied prompt engineering to improve model latency.")
    st.markdown("`Python` `PyTorch` `Generative AI` `Prompt Engineering` `Diffusion` ")

# --- SKILLS TAB ---
with tab_skills:
    st.header("Technical Stack")

    c1, c2 = st.columns(2)
    with c1:
        st.subheader("💻 Languages")
        st.write("• **Python** (Advanced)")
        st.write("• **JavaScript** (Proficient)")
        st.write("• **Java** (Intermediate)")
        st.write("• **C** (Core Foundation)")

        st.subheader("🌐 Web & Frameworks")
        st.write("• **MERN Stack** (MongoDB, Express, React, Node)")
        st.write("• **React.js** (Advanced Component Design)")
        st.write("• **Node.js & Express.js** (REST API Microservices)")
        st.write("• **MongoDB & Cloudinary** (Database & Media)")

    with c2:
        st.subheader("🧠 AI / Machine Learning")
        st.write("• **Machine Learning:** Scikit-learn, XGBoost, Pandas, EDA")
        st.write("• **Agentic AI:** LangChain, LLMs, Tool Calling, Agents")
        st.write("• **Generative AI & DL:** PyTorch, Text-to-Image Pipelines")
        st.write("• **Graph AI:** Graph Neural Networks (GNN), Knowledge Graphs")

        st.subheader("🛠️ Tools & Core CS")
        st.write("• **Tools:** Git, GitHub, VS Code, Jupyter Notebooks")
        st.write("• **Core CS:** Data Structures & Algorithms, OOP, DBMS, OS")

# --- RESEARCH & INTERESTS TAB ---
with tab_interests:
    st.header("Research & Domain Focus")
    
    st.markdown("""
    - **🤖 Agentic AI & LLMs:** Multi-agent systems, tool calling, autonomous execution loops, and conversational memory.
    - **🌐 Graph Neural Networks (GNN):** Deep learning on non-Euclidean graph domains, node embeddings, and Knowledge Graphs.
    - **🎨 Generative AI:** Multimodal text-to-image synthesis, prompt optimization, and diffusion architectures.
    - **⚛️ Quantum Machine Learning (QML):** Exploring variational quantum circuits (VQC) and hybrid quantum computing.
    - **🔐 Cyber Security:** Network security fundamentals, vulnerability assessment, and Cisco certified protocols.
    """)

# --- ACHIEVEMENTS & CERTIFICATIONS TAB ---
with tab_achievements:
    st.header("Achievements & Certifications")

    st.success("🎖️ **NCC 'C' Certificate — Grade 'A':** Awarded Grade 'A' in the National Cadet Corps (NCC) C Certificate Examination for leadership and drill excellence.")
    st.info("💻 **Hacker-ring Hackathon:** Certificate of Active Participation in intense coding hackathon event.")

    st.subheader("📜 Certifications")
    st.write("1. **Agentic AI Specialization** — Capabl")
    st.write("2. **Machine Learning with Python** — EISystems Services")
    st.write("3. **Generative AI Technical Workshop** — IISc Bengaluru (Indian Institute of Science)")
    st.write("4. **Cisco Networking Basics** — Cisco Networking Academy")
    st.write("5. **Cyber Security & Ethical Hacking** — RVITM Bengaluru")

    st.divider()

    st.subheader("🎗️ Leadership & Volunteer Roles")
    st.write("**Hospitality Head — Vikrama Kannada Sangha (RVITM)**")
    st.write("Led the core organizing committee for *Samyama* (Kannada Rajyotsava celebration). Managed VIP guest receptions, budget coordination, and event execution for 1000+ attendees.")

# --- CONTACT TAB ---
with tab_contact:
    st.header("Get In Touch with Mamata")

    st.markdown("""
    📍 **Location:** Bengaluru, Karnataka, India  
    📧 **Email:** [kamagoudarmamata@gmail.com](mailto:kamagoudarmamata@gmail.com)  
    📞 **Phone:** +91 8197581999  
    🐙 **GitHub:** [https://github.com/Mamatak16](https://github.com/Mamatak16)  
    💼 **LinkedIn:** [https://www.linkedin.com/in/mamata-kamagoudar](https://www.linkedin.com/in/mamata-kamagoudar)  
    """)

    st.divider()
    
    st.subheader("📬 Send a Message")
    with st.form("contact_form"):
        name = st.text_input("Your Name")
        email = st.text_input("Your Email")
        message = st.text_area("Your Message")
        submitted = st.form_submit_button("Send Message")
        if submitted:
            st.success(f"Thank you, {name}! Your message has been sent successfully.")
