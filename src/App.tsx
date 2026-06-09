import React from 'react';

const App: React.FC = () => {
  const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
    <section id={id} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00E6FF] leading-tight">
        {title}
      </h2>
      {children}
    </section>
  );

  const ServiceCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
    <div className="bg-[#161B22] p-8 rounded-lg shadow-xl border border-[#4A5568] hover:border-[#00E6FF] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#00E6FF]/[0.05] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="text-5xl text-[#7BFF7B] mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );

  const ProjectCard: React.FC<{ title: string; description: string; technologies: string[] }> = ({ title, description, technologies }) => (
    <div className="bg-[#161B22] p-8 rounded-lg shadow-xl border border-[#4A5568] hover:border-[#00E6FF] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#00E6FF]/[0.05] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-[#00E6FF]/[0.2] text-[#00E6FF] text-sm rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E2E8F0] overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/[0.9] backdrop-blur-sm shadow-lg py-4 border-b border-[#4A5568]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-[#00E6FF] font-['Michroma',sans-serif]">AI_Dev</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-[#00E6FF] transition-colors duration-300 font-medium">About</a>
            <a href="#services" className="text-gray-300 hover:text-[#00E6FF] transition-colors duration-300 font-medium">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-[#00E6FF] transition-colors duration-300 font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-[#00E6FF] transition-colors duration-300 font-medium">Contact</a>
          </div>
          {/* Mobile menu button (omitted for brevity in this output but would be here) */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0D1117] to-[#161B22] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#4A5568" strokeOpacity="0.1" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Unlocking Peak Efficiency with <span className="text-[#00E6FF]">Intelligent Automation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up delay-200">
            I build bespoke AI-powered solutions that transform operations, boost productivity, and drive innovation for forward-thinking businesses.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#00E6FF] text-[#0D1117] font-semibold px-8 py-4 rounded-full text-lg shadow-xl
                       hover:bg-white hover:text-[#00E6FF] transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
          >
            Let's Innovate Together
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="Who I Am & What I Do">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As an AI Automation Developer, I specialize in crafting cutting-edge solutions that leverage artificial intelligence and machine learning to streamline complex business processes. My expertise spans from designing custom algorithms to integrating robust Robotic Process Automation (RPA) systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about transforming manual, repetitive tasks into intelligent, automated workflows, freeing up human potential for creative and strategic endeavors. My goal is to deliver tangible value by enhancing operational efficiency, reducing costs, and enabling data-driven decision-making.
            </p>
          </div>
          <div className="relative p-6 bg-[#161B22] rounded-lg shadow-2xl border border-[#4A5568] animate-fade-in-left">
            <p className="text-xl font-medium text-white mb-4">My Core Philosophy:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li><span className="text-[#7BFF7B] font-semibold">Impact-Driven:</span> Solutions designed for measurable business outcomes.</li>
              <li><span className="text-[#7BFF7B] font-semibold">Scalability:</span> Architecting systems that grow with your needs.</li>
              <li><span className="text-[#7BFF7B] font-semibold">Ethical AI:</span> Building responsible and transparent automation.</li>
              <li><span className="text-[#7BFF7B] font-semibold">Continuous Innovation:</span> Staying ahead of the curve with emerging tech.</li>
            </ul>
            <div className="absolute -top-3 -right-3 text-7xl text-[#00E6FF]/[0.1] font-bold opacity-50">AI</div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="My Expertise & Services">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="🧠"
            title="Custom AI Model Development"
            description="Crafting bespoke machine learning models for predictive analytics, natural language processing, computer vision, and more."
          />
          <ServiceCard
            icon="⚙️"
            title="Workflow Automation & RPA"
            description="Implementing Robotic Process Automation to automate repetitive tasks, improve data accuracy, and accelerate operational workflows."
          />
          <ServiceCard
            icon="📈"
            title="Data Pipeline Optimization"
            description="Designing and optimizing robust data pipelines to ensure clean, accessible, and timely data for AI applications."
          />
          <ServiceCard
            icon="🔍"
            title="Predictive Analytics Integration"
            description="Integrating advanced predictive models into existing systems to forecast trends, identify opportunities, and mitigate risks."
          />
          <ServiceCard
            icon="💬"
            title="Conversational AI Solutions"
            description="Developing intelligent chatbots and virtual assistants that enhance customer experience and internal support efficiency."
          />
          <ServiceCard
            icon="⚡"
            title="API & System Integration"
            description="Seamlessly connecting disparate systems and APIs to create a unified, automated ecosystem for your business."
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Automated Customer Support Agent"
            description="Developed an intelligent NLP-powered chatbot to handle Tier 1 customer inquiries, reducing response times by 60% and improving satisfaction."
            technologies={['Python', 'TensorFlow', 'Dialogflow', 'React']}
          />
          <ProjectCard
            title="Supply Chain Optimization Platform"
            description="Designed a predictive AI system to forecast demand, optimize inventory levels, and streamline logistics for a global e-commerce client."
            technologies={['Python', 'PyTorch', 'AWS SageMaker', 'SQL']}
          />
          <ProjectCard
            title="Financial Audit RPA Solution"
            description="Implemented Robotic Process Automation to automate data extraction and reconciliation for quarterly financial audits, ensuring compliance and accuracy."
            technologies={['UiPath', 'Blue Prism', 'Azure Logic Apps', 'SQL']}
          />
          <ProjectCard
            title="Healthcare Data Anonymization Engine"
            description="Built an AI-driven engine to automatically identify and anonymize sensitive patient data in large datasets, ensuring HIPAA compliance."
            technologies={['Python', 'SpaCy', 'Azure Databricks', 'Spark']}
          />
          <ProjectCard
            title="Intelligent Document Processing (IDP)"
            description="Developed a system to extract and classify critical information from unstructured documents (invoices, contracts) using computer vision and NLP."
            technologies={['Python', 'OpenCV', 'Google Cloud Vision', 'Node.js']}
          />
          <ProjectCard
            title="Personalized Marketing Campaign Automation"
            description="Created an AI-powered platform that analyzes user behavior to generate personalized content and automate multi-channel marketing campaigns."
            technologies={['Python', 'Scikit-learn', 'Kafka', 'PostgreSQL']}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Build the Future Together">
        <div className="max-w-3xl mx-auto bg-[#161B22] p-8 md:p-12 rounded-lg shadow-2xl border border-[#4A5568]">
          <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
            Ready to explore how AI automation can revolutionize your business? I'm eager to discuss your project and demonstrate the power of intelligent solutions. Reach out today!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md bg-[#0D1117] border border-[#4A5568] text-white focus:ring-2 focus:ring-[#00E6FF] focus:outline-none transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-[#0D1117] border border-[#4A5568] text-white focus:ring-2 focus:ring-[#00E6FF] focus:outline-none transition-colors duration-200"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 rounded-md bg-[#0D1117] border border-[#4A5568] text-white focus:ring-2 focus:ring-[#00E6FF] focus:outline-none transition-colors duration-200"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00E6FF] text-[#0D1117] font-semibold px-8 py-4 rounded-md text-lg shadow-xl
                         hover:bg-white hover:text-[#00E6FF] transition-all duration-300 transform hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#161B22] py-8 mt-16 border-t border-[#4A5568]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AI_Dev. All rights reserved.</p>
          <p className="mt-2">Built with passion for intelligent automation.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
